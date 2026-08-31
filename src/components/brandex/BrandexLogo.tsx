import Link from "next/link";
import Image from "next/image";

interface BrandexLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  hideSubtitle?: boolean;
}

export function BrandexLogo({ size = "md", className = "", hideSubtitle = false }: BrandexLogoProps) {
  const heightClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10",
  };

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group select-none ${className}`}>
      <img
        src="/brandex-logo-latest.png"
        alt="Brandex"
        className={`${heightClasses[size]} w-auto object-contain transition-transform duration-200 group-hover:scale-105`}
      />
      {!hideSubtitle && (
        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#EEF2FF] text-[#4338CA] font-mono border border-[#E0E7FF] mt-1">
          EDU
        </span>
      )}
    </Link>
  );
}
