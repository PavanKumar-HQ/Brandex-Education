import Link from "next/link";
import { CURRICULUM_DATA } from "@/lib/curriculum-data";
import { ChevronRight, ArrowRight, Sparkles, BookOpen } from "lucide-react";

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-[#FAFAFC] py-16 selection:bg-indigo-500 selection:text-white">
      <div className="w-full px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto space-y-12">
        
        {/* Header */}
        <div className="border-b border-[#E2E8F0] pb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[#4F46E5] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Step 1 • Class Selection</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Explore Learning
          </h1>
          <p className="text-base text-slate-600 font-normal max-w-2xl">
            Choose your class grade to view mapped Karnataka State Syllabus subjects and video lesson modules.
          </p>
        </div>

        {/* 5 Grade Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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
                className="group bg-white p-8 rounded-3xl border border-[#E2E8F0] hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-80 shadow-2xs"
              >
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-50 group-hover:bg-[#4F46E5] text-[#4F46E5] group-hover:text-white border border-indigo-100 flex items-center justify-center font-black text-2xl transition-colors duration-300 shadow-2xs">
                    {cls.grade}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#4F46E5] transition-colors">
                    {cls.subjects.length} Subjects
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-[#0F172A] group-hover:text-[#4F46E5] transition-colors tracking-tight">
                    {cls.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 font-medium">
                    {cls.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#4F46E5]">
                  <span className="font-mono text-slate-500">{totalLessons} Lessons</span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Explore <ArrowRight className="w-4 h-4" />
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
