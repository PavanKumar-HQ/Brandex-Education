"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/lib/auth-context";
import { BrandexLogo } from "@/components/brandex/BrandexLogo";
import { Lock, User, ArrowRight, ShieldCheck, Database, Zap } from "lucide-react";

const loadingSteps = [
  { id: 1, text: "Authenticating credentials...", icon: Lock },
  { id: 2, text: "Establishing secure connection...", icon: ShieldCheck },
  { id: 3, text: "Syncing curriculum data...", icon: Database },
  { id: 4, text: "Preparing workspace...", icon: Zap },
];

export default function LoginPage() {
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [schoolCode, setSchoolCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isSubmitting) {
      let currentStep = 0;
      const interval = setInterval(() => {
        if (currentStep < loadingSteps.length) {
          setLoadingStep(currentStep);
          currentStep++;
        } else {
          clearInterval(interval);
          if (schoolCode.length >= 3) {
            login(name, "teacher");
          } else {
            setError("Invalid school code. Please try again.");
            setIsSubmitting(false);
            setLoadingStep(0);
          }
        }
      }, 700);
      return () => clearInterval(interval);
    }
  }, [isSubmitting, name, schoolCode, login]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }
    if (!schoolCode.trim()) {
      setError("Please enter your school access code");
      return;
    }

    setIsSubmitting(true);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 relative overflow-hidden selection:bg-[#4F46E5] selection:text-white">
      {/* Animated Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-400/20 blur-[100px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-400/20 blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row relative z-10 bg-white/60 backdrop-blur-3xl rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-white/50 overflow-hidden m-6 h-[700px] md:h-[600px]">
        
        {/* Left Branding Panel (Light Theme) */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden md:flex md:w-1/2 p-12 lg:p-16 flex-col justify-between relative bg-gradient-to-br from-indigo-50/50 to-white/50 border-r border-white/60"
        >
          <div className="relative z-10">
            {/* The Logo is now perfectly visible against the light background */}
            <BrandexLogo size="lg" hideSubtitle={false} />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-20 max-w-lg"
            >
              <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-[#0F172A] leading-[1.1]">
                Educational <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#8B5CF6]">video library</span>
                <br /> for schools.
              </h1>
              <p className="mt-6 text-lg text-slate-600 font-medium">
                Access curated NCERT syllabus content and seamless classroom presentations in one simple platform.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="relative z-10 flex items-center gap-3 text-slate-500 text-sm font-semibold"
          >
            <ShieldCheck className="w-5 h-5 text-[#4F46E5]" />
            <span>Secure Enterprise Access • © {new Date().getFullYear()}</span>
          </motion.div>
        </motion.div>

        {/* Right Login Panel */}
        <div className="flex-1 flex flex-col justify-center px-8 py-12 md:px-16 bg-white/80 relative z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="w-full max-w-md mx-auto"
          >
            <div className="md:hidden mb-12 flex justify-center">
              <BrandexLogo size="lg" />
            </div>

            <div className="mb-10 text-center md:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A]">Welcome Back</h2>
              <p className="text-slate-500 mt-2">Please sign in to access your curriculum.</p>
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitting ? (
                <motion.form 
                  key="login-form"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="space-y-2 group">
                    <label htmlFor="name" className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 group-focus-within:text-[#4F46E5] transition-colors">
                      Teacher Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-slate-400 group-focus-within:text-[#4F46E5] transition-colors" />
                      </div>
                      <input
                        id="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="block w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-[#0F172A] font-bold placeholder-slate-300 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#4F46E5]/10 focus:border-[#4F46E5] transition-all shadow-sm"
                        placeholder="e.g. Sarah Jenkins"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <label htmlFor="code" className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 group-focus-within:text-[#4F46E5] transition-colors">
                      School Access Code
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-slate-400 group-focus-within:text-[#4F46E5] transition-colors" />
                      </div>
                      <input
                        id="code"
                        type="password"
                        required
                        value={schoolCode}
                        onChange={(e) => setSchoolCode(e.target.value)}
                        className="block w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-[#0F172A] font-bold placeholder-slate-300 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#4F46E5]/10 focus:border-[#4F46E5] transition-all shadow-sm"
                        placeholder="Enter your school code"
                      />
                    </div>
                  </div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="text-sm font-semibold text-rose-600 bg-rose-50 p-4 rounded-xl border border-rose-100"
                    >
                      {error}
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    className="w-full pt-2"
                  >
                    <div className="w-full flex items-center justify-center gap-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white py-4 px-6 rounded-2xl font-bold text-[15px] shadow-[0_8px_20px_-6px_rgba(79,70,229,0.5)] hover:shadow-[0_12px_24px_-6px_rgba(79,70,229,0.6)] hover:-translate-y-0.5 transition-all duration-200">
                      <span>Access Curriculum</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="loading-sequence"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-16 space-y-6"
                >
                  {/* Clean, neat spinner */}
                  <div className="w-10 h-10 border-2 border-indigo-100 border-t-[#4F46E5] rounded-full animate-spin" />
                  
                  <div className="h-8 overflow-hidden text-center relative w-full">
                    <AnimatePresence mode="popLayout">
                      <motion.div
                        key={loadingStep}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center gap-2 text-slate-600 text-sm font-medium"
                      >
                        {loadingSteps[loadingStep] && (() => {
                          const Icon = loadingSteps[loadingStep].icon;
                          return (
                            <>
                              <Icon className="w-4 h-4 text-[#4F46E5]" />
                              {loadingSteps[loadingStep].text}
                            </>
                          );
                        })()}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
