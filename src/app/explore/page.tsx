import Link from "next/link";
import { CURRICULUM_DATA } from "@/lib/curriculum-data";
import { ArrowRight, Sparkles } from "lucide-react";

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
            Select Your Grade
          </h1>
          <p className="text-base text-slate-600 font-normal max-w-2xl">
            Choose your class to view mapped Karnataka State Syllabus subjects and video lesson modules.
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
                className="group bg-white p-6 rounded-2xl border border-slate-200/90 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between h-68 shadow-xs"
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
                  <h2 className="text-xl font-extrabold text-[#0F172A] group-hover:text-indigo-600 transition-colors tracking-tight">
                    {cls.name}
                  </h2>
                  <p className="text-xs text-slate-500 line-clamp-2 font-medium">
                    {cls.description}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-slate-500">{totalLessons} Lessons</span>
                  <div className="px-3.5 py-1.5 rounded-lg bg-indigo-50 group-hover:bg-indigo-600 text-indigo-600 group-hover:text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-2xs">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
}
