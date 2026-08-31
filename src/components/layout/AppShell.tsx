"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { BrandexFooter } from "./BrandexFooter";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  if (isLoginPage) {
    return <main className="flex-1 flex flex-col min-h-screen">{children}</main>;
  }

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#F8FAFC]">
      <Navbar />
      
      {/* Main Page Content */}
      <main className="flex-1 w-full h-full relative">
        {children}
      </main>

      {/* Global Official Brandex Ecosystem Footer */}
      <BrandexFooter />
    </div>
  );
}
