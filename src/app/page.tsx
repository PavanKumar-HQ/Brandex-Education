"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Play,
  Tv,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  HelpCircle,
  Clock,
  Sparkles,
  ChevronDown,
  Layers,
  Star,
  Quote,
  Zap,
  Target,
  BarChart3,
  MonitorPlay,
  Lightbulb,
} from "lucide-react";
import { CURRICULUM_DATA } from "@/lib/curriculum-data";

export default function ProductLandingPage() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const featureTabs = [
    {
      id: 0,
      title: "Teacher Assistant",
      tagline: "Personalized Content for Frictionless Teaching",
      desc: "Tailored educational modules with zero prep time. High-impact Karnataka State Syllabus video lectures created for different classroom needs.",
      points: [
        {
          title: "One-Click Classroom Launch",
          desc: "Start HD curriculum video lessons in seconds on any smartboard without loading delays.",
        },
        {
          title: "Subject-Wise Topic Breakdowns",
          desc: "Structured chapters with comprehensive concepts, definitions, and textbook exercise solutions.",
        },
        {
          title: "Visual & Interactive Media",
          desc: "Clean diagram animations, formula derivations, and real-world examples that hold student attention.",
        },
        {
          title: "Aligned to KSEEB Standards",
          desc: "Content precisely mapped to Karnataka State Board textbooks for Classes 6 through 10.",
        },
      ],
      previewBadge: "Live Classroom Stream",
      previewTitle: "Class 8 • Science: Cell Structure & Functions",
    },
    {
      id: 1,
      title: "Smarter Assessments",
      tagline: "Immediate Formative Feedback in Class",
      desc: "Assess student comprehension immediately after every lecture with predefined interactive quiz modules.",
      points: [
        {
          title: "Predefined Formative Quizzes",
          desc: "Carefully curated multiple-choice questions mapped to textbook learning goals.",
        },
        {
          title: "Instant Scoring & Feedback",
          desc: "Display detailed explanations on screen to clarify misconceptions on the spot.",
        },
        {
          title: "Confidence Rating Check",
          desc: "Empower students to evaluate their own understanding before moving to the next chapter.",
        },
        {
          title: "Zero Student Login Friction",
          desc: "Conducted directly through the teacher's screen without student device setup.",
        },
      ],
      previewBadge: "Formative Assessment",
      previewTitle: "Class 10 • Mathematics: Quadratic Equations Quiz",
    },
    {
      id: 2,
      title: "Classroom Smartboard",
      tagline: "Distraction-Free Theater Display Mode",
      desc: "Engineered specifically for classroom smartboards, interactive flat panels, and projectors.",
      points: [
        {
          title: "Zero Watermarks & Distractions",
          desc: "Custom player controls with no external branding, sidebars, or unrelated recommendations.",
        },
        {
          title: "Seamless Lesson Navigation",
          desc: "Switch chapters, replay key clips, or skip forward with quick 10-second skip buttons.",
        },
        {
          title: "Full-Monitor Projection",
          desc: "One-click fullscreen expansion optimized for large classroom display screens.",
        },
        {
          title: "Keyboard Shortcuts",
          desc: "Control playback smoothly with standard teacher-friendly presentation keys.",
        },
      ],
      previewBadge: "Smartboard Projector Mode",
      previewTitle: "Class 9 • Social Science: Natural Vegetation of India",
    },
    {
      id: 3,
      title: "PWA Offline Readiness",
      tagline: "Reliable Performance in Every School",
      desc: "Fast app shell caching ensures the platform runs smoothly even with intermittent school Wi-Fi.",
      points: [
        {
          title: "Installable Desktop & Tablet App",
          desc: "Install directly onto classroom laptops or teacher tablets with a single click.",
        },
        {
          title: "Cached Curriculum Directory",
          desc: "Browse subjects, chapters, and assessment metadata with zero network delay.",
        },
        {
          title: "Lightweight & Blazing Fast",
          desc: "Optimized Next.js Turbopack engine loads in under a second.",
        },
        {
          title: "Enterprise Grade Security",
          desc: "Protected by unique Educator authentication to prevent unauthorized classroom access.",
        },
      ],
      previewBadge: "Offline PWA Shell",
      previewTitle: "Class 7 • English: Grammar & Sentence Structure",
    },
  ];

  const pedagogySteps = [
    {
      step: "01",
      title: "Diagnose",
      desc: "Evaluate foundational concept clarity and readiness before starting a new chapter.",
      color: "bg-indigo-50 text-indigo-700 border-indigo-200",
      icon: Target,
    },
    {
      step: "02",
      title: "Learn",
      desc: "Engage students with curriculum-aligned video lectures and structured visual animations.",
      color: "bg-blue-50 text-blue-700 border-blue-200",
      icon: MonitorPlay,
    },
    {
      step: "03",
      title: "Practice",
      desc: "Walk through step-by-step solved textbook numericals and board exam exercises.",
      color: "bg-cyan-50 text-cyan-700 border-cyan-200",
      icon: Lightbulb,
    },
    {
      step: "04",
      title: "Assess",
      desc: "Run instant classroom quizzes to measure real-time retention and comprehension.",
      color: "bg-emerald-50 text-emerald-700 border-emerald-200",
      icon: BarChart3,
    },
    {
      step: "05",
      title: "Master",
      desc: "Review key takeaways and summary notes aligned with Karnataka State Board patterns.",
      color: "bg-purple-50 text-purple-700 border-purple-200",
      icon: Zap,
    },
  ];

  const testimonials = [
    {
      quote:
        "Brandex has completely transformed our smartboard lectures. Having curriculum-mapped lessons organized by chapter with zero distractions allows our teachers to focus 100% on teaching.",
      name: "Dr. Ramesh H. S.",
      role: "Principal",
      school: "Bangalore North High School",
      rating: 5,
    },
    {
      quote:
        "The built-in formative quizzes right after the video lessons are a game changer. Students stay engaged and we can immediately address topics they find difficult.",
      name: "Suma Venkatesh",
      role: "Senior Science Teacher",
      school: "Mysore Public Vidyalaya",
      rating: 5,
    },
    {
      quote:
        "The list view and step-by-step curriculum navigation make finding any chapter seamless during live lectures. It is fast, clean, and built exactly for schools.",
      name: "Praveen Kumar",
      role: "Mathematics Faculty",
      school: "Mangalore Composite PU & High School",
      rating: 5,
    },
  ];

  const faqs = [
    {
      q: "Is the curriculum aligned with Karnataka State Board (KSEEB)?",
      a: "Yes. All subjects (Science, Mathematics, Social Science, and English) across Classes 6 through 10 are strictly mapped to Karnataka State Board textbooks and syllabus standards.",
    },
    {
      q: "How does Classroom Mode work on smartboards and projectors?",
      a: "Classroom Mode provides a full-monitor theater view that strips away all external web chrome, watermarks, and recommendations, leaving a clean presentation stage with dedicated teacher controls.",
    },
    {
      q: "Can the platform be installed as an offline-ready PWA?",
      a: "Yes! Brandex Digital Learning is a Progressive Web App (PWA). You can install it on teacher laptops, desktop smartboards, or tablets for instant access with cached curriculum navigation.",
    },
    {
      q: "Do students need individual accounts or logins?",
      a: "No. The platform is designed for teachers to present and evaluate directly in the classroom. Only educators need an account to unlock the curriculum, saving precious lecture time.",
    },
    {
      q: "Are formative assessments and quizzes included?",
      a: "Yes. Every lesson module includes pre-built multiple-choice questions with instant scoring and detailed answer explanations for live classroom evaluation.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFC] flex flex-col selection:bg-indigo-500 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white pt-14 pb-20 border-b border-slate-200/90">
        {/* Soft background ambient gradient lights */}
        <div className="absolute top-0 right-0 w-[700px] h-[600px] bg-gradient-to-bl from-indigo-100/60 via-blue-50/40 to-transparent rounded-full blur-3xl -z-10 translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[550px] h-[450px] bg-gradient-to-tr from-sky-100/50 via-indigo-50/30 to-transparent rounded-full blur-3xl -z-10 -translate-x-1/4 translate-y-1/4" />

        <div className="w-full px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-7">
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
                
                <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
                  Karnataka State Syllabus video lessons and interactive chapter assessments for Classes 6 to 10. Present on smartboards, explore modules, and evaluate comprehension with zero setup friction.
                </p>
              </motion.div>

              {/* Call To Action Buttons (Single Primary CTA) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-center gap-3.5 pt-1"
              >
                <Link
                  href="/explore"
                  className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm sm:text-base transition-all shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30 hover:-translate-y-0.5 flex items-center gap-2.5"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Explore Curriculum</span>
                  <ArrowRight className="w-4 h-4 ml-0.5" />
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

            {/* Right Hero Classroom Showcase Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-6 relative flex justify-center"
            >
              {/* Glow backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-sky-500/10 rounded-3xl blur-2xl -z-10" />

              {/* Classroom Illustration Showcase Container */}
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl p-4 sm:p-6 overflow-hidden relative w-full max-w-xl group">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-100">
                    Smartboard Classroom Mode
                  </span>
                </div>

                <div className="relative rounded-xl overflow-hidden bg-gradient-to-b from-indigo-50/50 to-slate-50 flex items-center justify-center border border-slate-100 shadow-inner">
                  <img
                    src="/hero-classroom.png"
                    alt="Digital Smartboard Classroom Presentation"
                    className="w-full h-auto object-contain max-h-[360px] group-hover:scale-102 transition-transform duration-500"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between text-xs font-semibold text-slate-500 pt-2 border-t border-slate-100">
                  <span className="flex items-center gap-1.5 text-slate-700">
                    <Tv className="w-3.5 h-3.5 text-indigo-600" /> Live Teacher Presentation
                  </span>
                  <span className="font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60 text-[10px]">
                    Zero Distraction
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE TABBED FEATURE DISCOVERY SECTION */}
      <section className="py-20 bg-white border-b border-slate-200/90">
        <div className="w-full px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold font-mono uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Transformative Upgrades
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Discover the latest upgrades for schools & teachers
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Built from the ground up to solve real classroom teaching challenges.
            </p>
          </div>

          {/* Feature Tabs Selector */}
          <div className="flex items-center justify-center border-b border-slate-200/90 overflow-x-auto gap-2 sm:gap-6 pb-2">
            {featureTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer relative ${
                  activeTab === tab.id
                    ? "text-indigo-600 bg-indigo-50/80 border border-indigo-200"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {tab.title}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute -bottom-2.5 left-0 right-0 h-0.5 bg-indigo-600"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Active Tab Content Card */}
          <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200/90 p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                    {featureTabs[activeTab].tagline}
                  </h3>
                  <p className="text-sm text-slate-600 font-normal mt-2 leading-relaxed">
                    {featureTabs[activeTab].desc}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {featureTabs[activeTab].points.map((pt, i) => (
                    <div key={i} className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-2xs space-y-1">
                      <h4 className="text-xs font-bold text-[#0F172A] flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                        <span>{pt.title}</span>
                      </h4>
                      <p className="text-xs text-slate-500 font-normal leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Visual Frame */}
              <div className="lg:col-span-5">
                <div className="bg-white rounded-xl border border-slate-200 shadow-md p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="text-[11px] font-mono font-bold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded border border-indigo-100">
                      {featureTabs[activeTab].previewBadge}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>

                  <div className="aspect-video rounded-lg bg-slate-950 flex flex-col justify-between p-4 relative overflow-hidden shadow-inner">
                    <div className="flex items-center justify-between text-white/70 text-[10px] font-mono">
                      <span>BRANDEX HD ENGINE</span>
                      <span className="bg-white/10 px-2 py-0.5 rounded">1080p 60fps</span>
                    </div>

                    <div className="flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shadow-lg">
                        <Play className="w-5 h-5 fill-white ml-0.5" />
                      </div>
                    </div>

                    <div className="text-white">
                      <span className="text-[10px] font-mono text-indigo-300 block uppercase">
                        Active Presentation
                      </span>
                      <p className="text-xs font-bold truncate">
                        {featureTabs[activeTab].previewTitle}
                      </p>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-lg text-xs font-semibold text-slate-600 flex items-center justify-between border border-slate-200/70">
                    <span>Syllabus Verified</span>
                    <span className="text-indigo-600 font-bold">100% KSEEB Standard</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. HOW BRANDEX STANDS APART (PEDAGOGY FLOW) */}
      <section className="py-20 bg-[#FAFAFC] border-b border-slate-200/90">
        <div className="w-full px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold font-mono uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Transformative Pedagogy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              A proven 5-step classroom learning cycle
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Structured to maximize student understanding and active classroom engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {pedagogySteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-indigo-400 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-black text-slate-400">
                      STEP {step.step}
                    </span>
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${step.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-[#0F172A] tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 text-[11px] font-bold text-indigo-600 flex items-center gap-1">
                    <span>Explore Step</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. CLASSES LIST VIEW SECTION */}
      <section className="py-20 bg-white border-b border-slate-200/90">
        <div className="w-full px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold font-mono uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                Full Curriculum Library
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mt-2">
                Explore by Class
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

          {/* Classes List View */}
          <div className="space-y-3.5 max-w-5xl mx-auto">
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
                  className="group bg-[#FAFAFC] hover:bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-13 h-13 rounded-xl bg-indigo-50 group-hover:bg-indigo-600 text-indigo-600 group-hover:text-white border border-indigo-100 flex items-center justify-center font-black text-2xl transition-colors shrink-0 shadow-2xs">
                      {cls.grade}
                    </div>

                    <div>
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-xl font-extrabold text-[#0F172A] group-hover:text-indigo-600 transition-colors tracking-tight">
                          {cls.name}
                        </h3>
                        <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-100">
                          {cls.subjects.length} Core Subjects
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-500 font-normal mt-0.5">
                        {cls.description} • Karnataka State Board Syllabus
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3.5 shrink-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                    <div className="text-xs font-mono font-semibold text-slate-600 whitespace-nowrap bg-white px-3 py-1.5 rounded-lg border border-slate-200/70">
                      {totalLessons} Video Lessons
                    </div>
                    
                    <div className="px-5 py-2.5 rounded-xl bg-indigo-50 group-hover:bg-indigo-600 text-indigo-600 group-hover:text-white font-bold text-xs flex items-center gap-2 transition-all shadow-2xs whitespace-nowrap">
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

      {/* 5. TEACHER TESTIMONIALS SECTION */}
      <section className="py-20 bg-[#F8FAFC] border-b border-slate-200/90">
        <div className="w-full px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold font-mono uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Trusted by Educators
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              What Karnataka school teachers say
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Empowering classrooms across the state with reliable, structured digital curriculum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-8 bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0F172A]">{t.name}</h4>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {t.role} • {t.school}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. FREQUENTLY ASKED QUESTIONS (FAQS) */}
      <section className="py-20 bg-white border-b border-slate-200/90">
        <div className="w-full px-6 sm:px-10 lg:px-16 max-w-4xl mx-auto space-y-10">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold font-mono uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600 font-normal">
              Everything you need to know about Brandex Digital Learning for your school.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200/90 bg-[#FAFAFC] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0F172A] hover:text-indigo-600 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-indigo-600" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed border-t border-slate-200/60 pt-3"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. BOTTOM CTA BANNER */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F8FAFC]">
        <div className="w-full px-6 sm:px-10 lg:px-16 max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Ready to modernize your classroom learning?
          </h2>
          <p className="text-base text-slate-600 max-w-xl mx-auto font-normal">
            Choose your class and start teaching with curated video modules and assessments today.
          </p>
          <div className="pt-2">
            <Link
              href="/explore"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base transition-all shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30 hover:-translate-y-0.5"
            >
              <BookOpen className="w-5 h-5" />
              <span>Explore Curriculum Library</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
