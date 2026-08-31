import { notFound } from "next/navigation";
import Link from "next/link";
import { CURRICULUM_DATA } from "@/lib/curriculum-data";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  FlaskConical,
  Calculator,
  Globe,
  Sparkles,
  Layers,
  Video,
} from "lucide-react";

export function generateStaticParams() {
  return CURRICULUM_DATA.map((c) => ({
    classId: c.slug,
  }));
}

export default async function ClassSubjectPage({
  params,
}: {
  params: Promise<{ classId: string }>;
}) {
  const resolvedParams = await params;
  const currentClass = CURRICULUM_DATA.find((c) => c.slug === resolvedParams.classId);

  if (!currentClass) {
    notFound();
  }

  const getSubjectConfig = (slug: string) => {
    switch (slug) {
      case "science":
        return {
          icon: <FlaskConical className="w-8 h-8" />,
          accentBg: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white",
          glowBorder: "hover:border-emerald-300 hover:shadow-emerald-500/10",
          tagBg: "bg-emerald-50 text-emerald-700 border-emerald-100",
          buttonColor: "text-emerald-600 group-hover:text-emerald-700",
          subtitle: "Physics, Chemistry & Biology",
        };
      case "maths":
      case "mathematics":
        return {
          icon: <Calculator className="w-8 h-8" />,
          accentBg: "bg-indigo-50 text-[#4F46E5] border-indigo-100 group-hover:bg-[#4F46E5] group-hover:text-white",
          glowBorder: "hover:border-indigo-300 hover:shadow-indigo-500/10",
          tagBg: "bg-indigo-50 text-[#4F46E5] border-indigo-100",
          buttonColor: "text-[#4F46E5] group-hover:text-[#4338CA]",
          subtitle: "Arithmetic, Algebra & Geometry",
        };
      case "social":
      case "social-science":
        return {
          icon: <Globe className="w-8 h-8" />,
          accentBg: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-600 group-hover:text-white",
          glowBorder: "hover:border-amber-300 hover:shadow-amber-500/10",
          tagBg: "bg-amber-50 text-amber-700 border-amber-100",
          buttonColor: "text-amber-600 group-hover:text-amber-700",
          subtitle: "History, Civics & Geography",
        };
      default:
        return {
          icon: <BookOpen className="w-8 h-8" />,
          accentBg: "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-600 group-hover:text-white",
          glowBorder: "hover:border-purple-300 hover:shadow-purple-500/10",
          tagBg: "bg-purple-50 text-purple-700 border-purple-100",
          buttonColor: "text-purple-600 group-hover:text-purple-700",
          subtitle: "Grammar, Prose & Poetry",
        };
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFC] py-16 selection:bg-indigo-500 selection:text-white">
      <div className="w-full px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto space-y-12">
        
        {/* Navigation & Header */}
        <div className="border-b border-[#E2E8F0] pb-8 space-y-4">
          <Link
            href="/explore"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#4F46E5] transition-colors bg-white px-3.5 py-2 rounded-xl border border-[#E2E8F0] shadow-2xs cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Classes
          </Link>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-[#4F46E5] text-xs font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Step 2 • Subject Selection</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
                {currentClass.name}
              </h1>
              <p className="text-base text-slate-600 mt-1 font-normal max-w-2xl">
                {currentClass.description} • Choose a subject below to explore chapter-wise video lessons and quizzes.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold px-4 py-2 bg-indigo-50 text-[#4F46E5] rounded-full border border-indigo-100 font-mono">
                {currentClass.subjects.length} Core Subjects
              </span>
            </div>
          </div>
        </div>

        {/* 4 Subjects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {currentClass.subjects.map((subject) => {
            const config = getSubjectConfig(subject.slug);
            const totalLessons = subject.chapters.reduce(
              (acc, ch) => acc + ch.topics.reduce((a, t) => a + t.lessons.length, 0),
              0
            );
            
            return (
              <Link 
                key={subject.slug}
                href={`/explore/${currentClass.slug}/${subject.slug}`}
                className={`group bg-white p-8 rounded-[2rem] border border-[#E2E8F0] ${config.glowBorder} hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between h-[360px] shadow-2xs relative overflow-hidden`}
              >
                {/* Top Subtle Glow bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent group-hover:via-[#4F46E5] transition-colors" />

                <div>
                  {/* Icon & Subject Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-18 h-18 rounded-2xl ${config.accentBg} border flex items-center justify-center transition-all duration-300 shadow-2xs group-hover:scale-105`}>
                      {config.icon}
                    </div>

                    <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${config.tagBg}`}>
                      KSEEB
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] group-hover:text-[#4F46E5] transition-colors mb-1 tracking-tight">
                    {subject.name}
                  </h2>
                  
                  <div className="text-xs font-semibold text-slate-500 mb-2">
                    {config.subtitle}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {subject.description}
                  </p>
                </div>

                {/* Bottom Footer Info & Action */}
                <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-500">
                    <span className="flex items-center gap-1">
                      <Layers className="w-3.5 h-3.5 text-slate-400" />
                      {subject.chapters.length} Ch
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Video className="w-3.5 h-3.5 text-slate-400" />
                      {totalLessons} Videos
                    </span>
                  </div>

                  <span className={`inline-flex items-center gap-1 text-xs font-bold ${config.buttonColor} group-hover:translate-x-1 transition-transform`}>
                    <span>View Syllabus</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
}
