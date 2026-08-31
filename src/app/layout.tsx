import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import { AuthProvider } from "@/lib/auth-context";
import { AppShell } from "@/components/layout/AppShell";
import { PwaRegister } from "@/components/pwa/PwaRegister";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#070B14",
};

export const metadata: Metadata = {
  title: "Brandex Digital Learning • Karnataka State Syllabus",
  description: "Curriculum-organized educational video lessons and predefined quizzes for schools.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Brandex EDU",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
        <AuthProvider>
          <AppShell>
            {children}
          </AppShell>
          <PwaRegister />
        </AuthProvider>
      </body>
    </html>
  );
}
