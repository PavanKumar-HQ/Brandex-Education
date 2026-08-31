import { notFound } from "next/navigation";
import Link from "next/link";
import { CURRICULUM_DATA } from "@/lib/curriculum-data";
import { ArrowLeft, PlayCircle, BookOpen, Layers, Sparkles, CheckCircle2, ArrowRight, Tv, HelpCircle } from "lucide-react";

export function generateStaticParams() {
  const params: { classId: string; subjectSlug: string }[] = [];
  for (const cls of CURRICULUM_DATA) {
    for (const sub of cls.subjects) {
      params.push({
        classId: cls.slug,
        subjectSlug: sub.slug,
      });
    }
  }
  return params;
}

export default async function SubjectChaptersPage({
  params,
}: {
  params: Promise<{ classId: string; subjectSlug: string }>;
}) {
  const resolvedParams = await params;
  const currentClass = CURRICULUM_DATA.find((c) => c.slug === resolvedParams.classId);
  const currentSubject = currentClass?.subjects.find((s) => s.slug === resolvedParams.subjectSlug);

  if (!currentClass || !currentSubject) {
    notFound();
  }

  const totalLessons = currentSubject.chapters.reduce(
    (acc, ch) => acc + ch.topics.reduce((a, t) => a + t.lessons.length, 0),
    0
  );

  return (
    <div className="min-h-screen bg-[#FAFAFC] py-16 selection:bg-indigo-500 selection:text-white">
      <div className="w-full px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto space-y-12">
        
        {/* Navigation & Header */}
        <div className="border-b border-[#E2E8F0] pb-8 space-y-4">
          <Link
            href={`/explore/${currentClass.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#4F46E5] transition-colors bg-white px-3.5 py-2 rounded-xl border border-[#E2E8F0] shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to {currentClass.name} Subjects
          </Link>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-[#4F46E5] text-xs font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Step 3 • Syllabus Chapters &amp; Lessons</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight flex items-center gap-3">
                <span>{currentSubject.name}</span>
                <span className="text-sm font-mono font-bold text-[#4F46E5] bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                  {currentClass.name}
                </span>
              </h1>
              <p className="text-base text-slate-600 mt-1 font-normal">
                {currentSubject.description}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold px-4 py-2 bg-indigo-50 text-[#4F46E5] rounded-full border border-indigo-100 font-mono">
                {currentSubject.chapters.length} Chapters • {totalLessons} Videos
              </span>
            </div>
          </div>
        </div>

        {/* Chapters Stack */}
        <div className="space-y-10">
          {currentSubject.chapters.map((chapter, index) => (
            <div key={chapter.id} className="bg-white rounded-3xl border border-[#E2E8F0] shadow-sm overflow-hidden">
              
              {/* Chapter Header */}
              <div className="px-8 py-6 border-b border-[#E2E8F0] bg-gradient-to-r from-slate-50/80 via-white to-slate-50/40 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-2xl bg-indigo-50 text-[#4F46E5] flex items-center justify-center font-extrabold font-mono text-sm border border-indigo-100 shadow-2xs">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h2 className="text-xl font-extrabold text-[#0F172A] tracking-tight">
                      Chapter {index + 1}: {chapter.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                      {chapter.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-semibold text-slate-600 bg-white px-3.5 py-1.5 rounded-xl border border-[#E2E8F0] shadow-2xs">
                    {chapter.topics.length} Topics
                  </span>
                </div>
              </div>

              {/* Topics & Lessons */}
              <div className="p-8 space-y-8 bg-[#F9FAFB]/90">
                {chapter.topics.map((topic) => (
                  <div key={topic.id} className="space-y-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-[#4F46E5]" />
                      <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-700 font-mono">
                        Topic: {topic.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-3">
                      {topic.lessons.map((lesson) => (
                        <div
                          key={lesson.id}
                          className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 p-5 rounded-2xl bg-white border border-[#E2E8F0] hover:border-indigo-200 hover:shadow-sm transition-all group"
                        >
                          {/* Left Thumbnail & Info */}
                          <div className="flex items-start gap-4 min-w-0 flex-1">
                            <div className="relative w-28 h-18 sm:w-36 sm:h-22 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border border-[#E2E8F0] shadow-2xs">
                              <img
                                src={`https://img.youtube.com/vi/${lesson.youtubeId}/maxresdefault.jpg`}
                                alt={lesson.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                <PlayCircle className="w-8 h-8 text-white drop-shadow" />
                              </div>
                              <span className="absolute bottom-1.5 right-1.5 px-2 py-0.5 bg-black/80 text-[10px] font-mono font-bold text-white rounded-md">
                                {lesson.duration}
                              </span>
                            </div>

                            <div className="min-w-0 space-y-1.5 flex-1">
                              <div className="flex items-center gap-2.5 flex-wrap">
                                <span className="text-base font-bold text-[#0F172A] group-hover:text-[#4F46E5] transition-colors leading-tight">
                                  {lesson.title}
                                </span>
                                <span className="text-[10px] font-bold text-[#4F46E5] bg-indigo-50 px-2.5 py-0.5 rounded-full font-mono border border-indigo-100">
                                  HD Video
                                </span>
                              </div>

                              <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 font-normal leading-relaxed">
                                {lesson.description}
                              </p>

                              {lesson.learningObjectives?.length > 0 && (
                                <div className="flex items-center gap-2 pt-1 text-xs text-slate-500 font-medium">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                  <span className="truncate">
                                    {lesson.learningObjectives[0]}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex items-center gap-3 self-end lg:self-center shrink-0">
                            <Link
                              href={`/lesson/${lesson.slug}`}
                              className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-bold transition-all shadow-xs hover:shadow-indigo-600/20"
                            >
                              <span>Watch Lesson</span>
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
