"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandexLogo } from "../brandex/BrandexLogo";
import { SearchIcon, Tv, BookOpen, Home, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { SearchModal } from "../search/SearchModal";
import { useAuth } from "@/lib/auth-context";

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { user, logout } = useAuth();
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/explore", label: "Curriculum", icon: BookOpen },
    { href: "/classroom", label: "Classroom Mode", icon: Tv },
  ];

  return (
    <>
      <header className="sticky top-0 z-30 w-full h-[72px] border-b border-slate-200/90 bg-white/95 backdrop-blur-xl flex items-center justify-between px-6 sm:px-10 lg:px-16 shrink-0 shadow-xs">
        
        {/* Left side: Brand Logo */}
        <div className="flex items-center gap-8">
          <BrandexLogo size="md" />

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? "bg-indigo-50 text-indigo-700 border border-indigo-100"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-indigo-600" : "text-slate-400"}`} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right side: Search & Auth */}
        <div className="flex items-center gap-3.5">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="hidden sm:flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-slate-200 text-sm font-semibold text-slate-600 transition-all w-60 shadow-2xs cursor-pointer"
          >
            <SearchIcon className="w-4 h-4 text-slate-400" />
            <span className="flex-1 text-left text-slate-400 font-medium text-xs">Search lessons...</span>
            <span className="text-[10px] font-mono font-bold bg-white px-1.5 py-0.5 rounded text-slate-400 border border-slate-200">⌘K</span>
          </button>
          
          <button 
            onClick={() => setIsSearchOpen(true)} 
            className="sm:hidden p-2 text-slate-500 hover:text-slate-900 bg-[#F8FAFC] border border-slate-200 rounded-xl"
          >
            <SearchIcon className="w-4 h-4" />
          </button>

          {user ? (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold">
                <div className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px]">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span className="truncate max-w-[120px]">{user.name}</span>
              </div>

              <button
                onClick={logout}
                title="Sign Out"
                className="p-2 rounded-xl bg-white hover:bg-rose-50 text-slate-500 hover:text-rose-600 border border-slate-200 hover:border-rose-200 transition-colors cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-xs hover:shadow-indigo-600/20"
            >
              Sign In
            </Link>
          )}
        </div>
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
