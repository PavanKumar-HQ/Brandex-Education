"use client";

import Link from "next/link";
import { BrandexLogo } from "../brandex/BrandexLogo";
import { SearchIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { SearchModal } from "../search/SearchModal";

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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

  return (
    <>
      <header className="sticky top-0 z-30 w-full h-[72px] border-b border-[#E2E8F0] bg-white/90 backdrop-blur-xl flex items-center justify-between px-6 sm:px-10 lg:px-16 shrink-0">
        
        {/* Left side: Brand Logo */}
        <div className="flex items-center">
          <BrandexLogo size="md" />
        </div>

        {/* Right side: Search & Auth */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="hidden sm:flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-sm font-semibold text-slate-600 transition-all w-72 shadow-2xs"
          >
            <SearchIcon className="w-4 h-4 text-slate-400" />
            <span className="flex-1 text-left text-slate-400 font-medium text-xs">Search lessons & topics...</span>
            <span className="text-[10px] font-mono font-bold bg-white px-1.5 py-0.5 rounded text-slate-400 border border-slate-200">⌘K</span>
          </button>
          
          <button 
            onClick={() => setIsSearchOpen(true)} 
            className="sm:hidden p-2.5 text-slate-500 hover:text-slate-900 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl"
          >
            <SearchIcon className="w-4 h-4" />
          </button>

          <Link href="/login" className="px-5 py-2.5 rounded-2xl bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-bold transition-all shadow-xs hover:shadow-indigo-600/20">
            Sign In
          </Link>
        </div>
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
