"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

interface User {
  name: string;
  role: "teacher" | "admin";
  loggedInAt: string;
}

interface AuthContextType {
  user: User | null;
  login: (name: string, password?: string, role?: "teacher" | "admin") => boolean;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Protected routes that require authentication
const PROTECTED_PREFIXES = ["/explore", "/lesson", "/classroom", "/classes", "/admin", "/studio"];

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

  // Route Protection: gate explore, lessons, classroom behind login
  useEffect(() => {
    if (!isLoading) {
      const isProtected = PROTECTED_PREFIXES.some((prefix) => pathname.startsWith(prefix));
      if (!user && isProtected) {
        router.push(`/login?redirect=${encodeURIComponent(pathname)}`);
      }
    }
  }, [user, isLoading, pathname, router]);

  const login = (name: string, password: string = "", role: "teacher" | "admin" = "teacher"): boolean => {
    if (!name.trim()) return false;
    
    const newUser: User = {
      name: name.trim(),
      role,
      loggedInAt: new Date().toISOString(),
    };

    setUser(newUser);
    localStorage.setItem("brandex_user", JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("brandex_user");
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {isLoading ? (
        <div className="min-h-screen bg-[#070B14] flex flex-col items-center justify-center text-white">
          <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mb-3" />
          <span className="text-xs font-mono text-slate-400">Loading Brandex Digital Learning...</span>
        </div>
      ) : (
        children
      )}
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
