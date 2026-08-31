"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

interface User {
  name: string;
  role: "teacher" | "admin";
}

interface AuthContextType {
  user: User | null;
  login: (name: string, role?: "teacher" | "admin") => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check for existing session
    const storedUser = localStorage.getItem("brandex_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse user session", e);
      }
    }
    setIsLoading(false);
  }, []);

  // Route Protection for admin
  useEffect(() => {
    if (!isLoading) {
      if (!user && pathname.startsWith("/admin")) {
        router.push("/login");
      }
    }
  }, [user, isLoading, pathname, router]);

  const login = (name: string, role: "teacher" | "admin" = "teacher") => {
    const newUser = { name, role };
    setUser(newUser);
    localStorage.setItem("brandex_user", JSON.stringify(newUser));
    router.push("/");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("brandex_user");
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {/* Hide content while determining auth state to prevent flicker */}
      {isLoading ? null : children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
