"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  Play,
  Tv,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Layers,
  GraduationCap,
  HelpCircle,
  Clock,
  FlaskConical,
  Calculator,
  Globe,
  Compass,
} from "lucide-react";
import { CURRICULUM_DATA } from "@/lib/curriculum-data";

export default function ProductLandingPage() {
  const featuredClass = CURRICULUM_DATA.find((c) => c.grade === "8") || CURRICULUM_DATA[0];
  const featuredSubject = featuredClass.subjects[0];
  const featuredLesson = featuredSubject?.chapters[0]?.topics[0]?.lessons[0];

  return (
    <div className="min-h-screen bg-[#FAFAFC] flex flex-col selection:bg-indigo-500 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white pt-16 pb-24 border-b border-[#E2E8F0]">
        {/* Soft background ambient gradient lights */}
        <div className="absolute top-0 right-0 w-[700px] h-[600px] bg-gradient-to-bl from-indigo-100/60 via-blue-50/40 to-transparent rounded-full blur-3xl -z-10 translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[550px] h-[450px] bg-gradient-to-tr from-sky-100/50 via-indigo-50/30 to-transparent rounded-full blur-3xl -z-10 -translate-x-1/4 translate-y-1/4" />

        <div className="w-full px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-7">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0F172A] leading-[1.08]">
                  Digital learning <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600">
                    built for schools.
                  </span>
                </h1>
                
                <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
                  Karnataka State Syllabus video lessons and interactive chapter assessments for Classes 6 to 10. Present on smartboards, explore modules, and evaluate comprehension with zero setup friction.
                </p>
              </motion.div>

              {/* Call To Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex flex-wrap items-center gap-3.5 pt-1"
              >
                <Link
                  href="/explore"
                  className="px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm sm:text-base transition-all shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30 hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Explore Curriculum</span>
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </Link>
                
                <Link
                  href="/classroom"
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base transition-all border border-slate-200/90 shadow-2xs hover:border-slate-300 flex items-center gap-2"
                >
                  <Tv className="w-4 h-4 text-indigo-600" />
                  <span>Launch Classroom Mode</span>
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="pt-2 flex flex-wrap items-center gap-6 text-xs font-semibold text-slate-500"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Classes 6 to 10 (KSEEB)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>All Core Subjects</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Predefined Quizzes</span>
                </div>
              </motion.div>
            </div>

            {/* Right Interactive Mockup / Product Visual Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-5 relative"
            >
              {/* Subtle ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-sky-500/10 rounded-2xl blur-xl -z-10" />

              {/* Showcase Card */}
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-lg p-5 space-y-4">
                {/* Header bar of preview */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-100">
                    Live Classroom Player
                  </span>
                </div>

                {/* Video Mock Screen */}
                <div className="relative rounded-xl overflow-hidden aspect-video bg-slate-900 shadow-inner group">
                  {featuredLesson && (
                    <img
                      src={`https://img.youtube.com/vi/${featuredLesson.youtubeId}/maxresdefault.jpg`}
                      alt={featuredLesson.title}
                      className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-4">
                    <span className="self-end px-2 py-0.5 bg-black/80 text-[10px] font-mono font-bold text-white rounded-md">
                      10:00 HD
                    </span>
                    
                    <div className="flex items-center justify-center">
                      <div className="w-11 h-11 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-lg">
                        <Play className="w-4 h-4 fill-white ml-0.5" />
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-wider block">
                        Class 8 • Science
                      </span>
                      <h4 className="text-sm font-bold text-white truncate">
                        {featuredLesson?.title || "Crop Production & Management"}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Interactive Action Pills */}
                <div className="grid grid-cols-2 gap-2.5 pt-0.5">
                  <div className="p-2.5 bg-[#F8FAFC] rounded-xl border border-slate-200/80 flex items-center gap-2">
                    <Tv className="w-4 h-4 text-indigo-600 shrink-0" />
                    <div>
                      <span className="text-[11px] font-bold text-[#0F172A] block leading-tight">Classroom Mode</span>
                      <span className="text-[10px] text-slate-500">Smartboard Ready</span>
                    </div>
                  </div>

                  <div className="p-2.5 bg-[#F8FAFC] rounded-xl border border-slate-200/80 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <div>
                      <span className="text-[11px] font-bold text-[#0F172A] block leading-tight">Formative Quiz</span>
                      <span className="text-[10px] text-slate-500">Instant Evaluation</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. CLASS OVERVIEW HIGHLIGHTS */}
      <section className="py-20 bg-[#FAFAFC]">
        <div className="w-full px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E2E8F0] pb-6">
            <div>
              <span className="text-xs font-bold font-mono uppercase tracking-wider text-[#4F46E5] bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                Explore Grades
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mt-2">
                Curriculum at a Glance
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 font-normal">
                Select your class to enter the step-by-step curriculum browser.
              </p>
            </div>

            <Link
              href="/explore"
              className="px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-indigo-600 font-bold text-xs border border-slate-200 shadow-2xs hover:border-indigo-300 flex items-center gap-1.5 transition-all self-start md:self-auto"
            >
              <span>View full curriculum</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 5 Grade Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {CURRICULUM_DATA.map((cls) => {
              const totalLessons = cls.subjects.reduce(
                (sum, s) =>
                  sum +
                  s.chapters.reduce(
                    (cSum, ch) =>
                      cSum + ch.topics.reduce((tSum, t) => tSum + t.lessons.length, 0),
                    0
                  ),
                0
              );

              return (
                <Link
                  key={cls.id}
                  href={`/explore/${cls.slug}`}
                  className="group bg-white p-6 rounded-2xl border border-slate-200/90 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between h-64 shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-indigo-50 group-hover:bg-indigo-600 text-indigo-600 group-hover:text-white border border-indigo-100 flex items-center justify-center font-black text-xl transition-colors duration-200 shadow-2xs">
                      {cls.grade}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200/80">
                      {cls.subjects.length} Subjects
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-extrabold text-[#0F172A] group-hover:text-indigo-600 transition-colors tracking-tight">
                      {cls.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 font-medium">
                      {cls.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <span className="text-xs font-mono font-semibold text-slate-500 whitespace-nowrap">{totalLessons} Lessons</span>
                    <div className="px-3.5 py-1.5 rounded-lg bg-indigo-50 group-hover:bg-indigo-600 text-indigo-600 group-hover:text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-2xs whitespace-nowrap shrink-0">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. FOUR CORE PILLARS SECTION */}
      <section className="py-20 bg-white border-y border-[#E2E8F0]">
        <div className="w-full px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold font-mono uppercase tracking-wider text-[#4F46E5] bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Purpose Built
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Designed specifically for classroom teachers
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Everything you need for seamless smartboard presentations without software complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-8 bg-[#F8FAFC] rounded-3xl border border-[#E2E8F0] space-y-4 hover:border-indigo-200 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-[#4F46E5] border border-indigo-100 flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A]">State Syllabus Mapped</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Curated specifically according to Karnataka State Board textbooks for Classes 6 through 10.
              </p>
            </div>

            <div className="p-8 bg-[#F8FAFC] rounded-3xl border border-[#E2E8F0] space-y-4 hover:border-indigo-200 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-[#4F46E5] border border-indigo-100 flex items-center justify-center">
                <Tv className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A]">Classroom Mode</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Distraction-free, theatre presentation mode built for smartboards, projectors, and interactive TVs.
              </p>
            </div>

            <div className="p-8 bg-[#F8FAFC] rounded-3xl border border-[#E2E8F0] space-y-4 hover:border-indigo-200 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-[#4F46E5] border border-indigo-100 flex items-center justify-center">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A]">Predefined Quizzes</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Immediate formative assessment questions paired with lessons to test comprehension on the spot.
              </p>
            </div>

            <div className="p-8 bg-[#F8FAFC] rounded-3xl border border-[#E2E8F0] space-y-4 hover:border-indigo-200 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-[#4F46E5] border border-indigo-100 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A]">Zero Friction</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                No student tracking, no passwords to manage, and no setup delays during live classroom lectures.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. BOTTOM CTA BANNER */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F8FAFC]">
        <div className="w-full px-6 sm:px-10 lg:px-16 max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Ready to explore lessons for your classroom?
          </h2>
          <p className="text-base text-slate-600 max-w-xl mx-auto font-normal">
            Choose your class and start teaching with curated video modules today.
          </p>
          <div className="pt-2">
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Explore Curriculum</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
