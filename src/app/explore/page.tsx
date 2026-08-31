import Link from "next/link";
import { CURRICULUM_DATA } from "@/lib/curriculum-data";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-[#FAFAFC] py-16 selection:bg-indigo-500 selection:text-white">
      <div className="w-full px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto space-y-12">
        
        {/* Header */}
        <div className="border-b border-[#E2E8F0] pb-8 space-y-2">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Select Your Grade
          </h1>
          <p className="text-base text-slate-600 font-normal max-w-2xl">
            Choose your class to view mapped Karnataka State Syllabus subjects and video lesson modules.
          </p>
        </div>

        {/* Classes List View */}
        <div className="space-y-4 max-w-5xl">
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
                className="group bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-4">
                  <div className="w-13 h-13 rounded-xl bg-indigo-50 group-hover:bg-indigo-600 text-indigo-600 group-hover:text-white border border-indigo-100 flex items-center justify-center font-black text-2xl transition-colors shrink-0 shadow-2xs">
                    {cls.grade}
                  </div>

                  <div>
                    <div className="flex items-center gap-2.5">
                      <h2 className="text-xl font-extrabold text-[#0F172A] group-hover:text-indigo-600 transition-colors tracking-tight">
                        {cls.name}
                      </h2>
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
                  <div className="text-xs font-mono font-semibold text-slate-600 whitespace-nowrap bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/70">
                    {totalLessons} Video Lessons
                  </div>
                  
                  <div className="px-5 py-2.5 rounded-xl bg-indigo-50 group-hover:bg-indigo-600 text-indigo-600 group-hover:text-white font-bold text-xs flex items-center gap-2 transition-all shadow-2xs whitespace-nowrap">
                    <span>Explore Syllabus</span>
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
