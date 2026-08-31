"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  Tv,
  HelpCircle,
  CheckCircle2,
  BookOpen,
  Layers,
  ArrowLeft,
} from "lucide-react";
import { getLessonBySlug } from "@/lib/curriculum-data";
import { BrandexYouTubePlayer } from "@/components/learning/BrandexYouTubePlayer";
import { ClassroomModeModal } from "@/components/classroom/ClassroomModeModal";
import { QuizRunnerModal } from "@/components/quiz/QuizRunnerModal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function LessonPage({ params }: PageProps) {
  const { slug } = use(params);
  const data = getLessonBySlug(slug);

  const [isClassroomOpen, setIsClassroomOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  if (!data) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
        <div className="p-4 rounded-2xl bg-[#EEF2FF] text-[#4F46E5] mb-4">
          <BookOpen className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-[#0F172A]">Lesson Not Found</h2>
        <p className="text-sm text-[#475569] max-w-sm mt-1 mb-6">
          The requested educational module could not be found in the active curriculum catalog.
        </p>
        <Link
          href="/"
          className="px-6 py-3 rounded-2xl bg-[#4F46E5] text-white text-xs font-bold hover:bg-[#4338CA] transition-colors"
        >
          Return to Curriculum Home
        </Link>
      </div>
    );
  }

  const { lesson, topic, chapter, subject, classLevel } = data;

  const allChapterLessons = chapter.topics.flatMap((t) => t.lessons);
  const currentIndex = allChapterLessons.findIndex((l) => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? allChapterLessons[currentIndex - 1] : null;
  const nextLesson =
    currentIndex < allChapterLessons.length - 1 ? allChapterLessons[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-[#E2E8F0] py-4 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-500 font-medium">
            <Link href="/explore" className="hover:text-[#4F46E5] flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> All Classes
            </Link>
            <span>/</span>
            <Link href={`/explore/${classLevel.slug}`} className="hover:text-[#4F46E5]">
              {classLevel.name}
            </Link>
            <span>/</span>
            <Link href={`/explore/${classLevel.slug}/${subject.slug}`} className="hover:text-[#4F46E5] font-bold text-[#4338CA]">
              {subject.name}
            </Link>
            <span>/</span>
            <span className="text-[#0F172A] font-semibold truncate max-w-xs sm:max-w-md">
              Ch {chapter.chapterNumber}: {chapter.title}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setIsClassroomOpen(true)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#4F46E5] text-white font-bold text-xs hover:bg-[#4338CA] transition-colors shadow-xs"
            >
              <Tv className="w-3.5 h-3.5" />
              <span>Classroom Mode</span>
            </button>
            {lesson.quiz && (
              <button
                onClick={() => setIsQuizOpen(true)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-[#4338CA] border border-[#E0E7FF] font-bold text-xs hover:bg-[#EEF2FF] transition-colors shadow-xs"
              >
                <HelpCircle className="w-3.5 h-3.5 text-[#4F46E5]" />
                <span>Take Quiz</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="container mx-auto max-w-6xl px-4 lg:px-8 py-8 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Player & Overview (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-slate-950 rounded-3xl overflow-hidden shadow-lg border border-slate-800">
              <BrandexYouTubePlayer
                videoId={lesson.youtubeId}
                title={lesson.title}
                onEnterClassroomMode={() => setIsClassroomOpen(true)}
              />
            </div>

            {/* Title & Actions Bar */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E2E8F0] shadow-xs space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E2E8F0] pb-5">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#4338CA] bg-[#EEF2FF] px-2.5 py-0.5 rounded-md border border-[#E0E7FF]">
                      {classLevel.name} • {subject.name}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Duration: {lesson.duration}
                    </span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                    {lesson.title}
                  </h1>
                </div>

                {/* Previous / Next Controls */}
                <div className="flex items-center gap-2 shrink-0">
                  {prevLesson ? (
                    <Link
                      href={`/lesson/${prevLesson.slug}`}
                      className="flex items-center gap-1 px-4 py-2.5 rounded-xl border border-[#E2E8F0] text-xs font-bold text-[#0F172A] hover:bg-slate-50 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" /> Prev
                    </Link>
                  ) : (
                    <span className="px-4 py-2.5 text-xs font-bold text-slate-300 border border-[#E2E8F0] rounded-xl cursor-not-allowed">
                      Prev
                    </span>
                  )}

                  {nextLesson ? (
                    <Link
                      href={`/lesson/${nextLesson.slug}`}
                      className="flex items-center gap-1 px-4 py-2.5 rounded-xl bg-[#4F46E5] text-white text-xs font-bold hover:bg-[#4338CA] transition-colors shadow-xs"
                    >
                      Next <ChevronRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <span className="px-4 py-2.5 text-xs font-bold text-slate-300 border border-[#E2E8F0] rounded-xl cursor-not-allowed">
                      Next
                    </span>
                  )}
                </div>
              </div>

              {/* Lesson Description */}
              <div className="space-y-2">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Lesson Overview
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {lesson.description}
                </p>
              </div>

              {/* Learning Objectives */}
              {lesson.learningObjectives?.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    Key Learning Objectives
                  </h3>
                  <div className="grid grid-cols-1 gap-2.5">
                    {lesson.learningObjectives.map((obj, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0F172A] font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Playlist (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-xs overflow-hidden sticky top-24">
              <div className="p-5 border-b border-[#E2E8F0] bg-[#F8FAFC]">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#4F46E5]" />
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A]">
                    Chapter Syllabus Modules
                  </h3>
                </div>
                <p className="text-sm font-bold text-[#0F172A] mt-1 truncate">
                  Ch {chapter.chapterNumber}: {chapter.title}
                </p>
              </div>

              <div className="divide-y divide-[#E2E8F0] max-h-[60vh] overflow-y-auto p-2">
                {allChapterLessons.map((item, idx) => {
                  const isActive = item.id === lesson.id;
                  return (
                    <Link
                      key={item.id}
                      href={`/lesson/${item.slug}`}
                      className={`flex items-start gap-3.5 p-3.5 rounded-2xl transition-all ${
                        isActive
                          ? "bg-[#EEF2FF] border border-[#C7D2FE] text-[#4338CA] font-bold"
                          : "hover:bg-[#F8FAFC] text-slate-700"
                      }`}
                    >
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 font-mono ${
                          isActive
                            ? "bg-[#4F46E5] text-white"
                            : "bg-[#F1F5F9] text-slate-600"
                        }`}
                      >
                        {(idx + 1).toString().padStart(2, "0")}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1">
                          <p className="text-xs font-bold truncate">
                            {item.title}
                          </p>
                          <span className="text-[10px] text-slate-400 shrink-0 font-mono">
                            {item.duration}
                          </span>
                        </div>
                        {item.quiz && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 mt-1">
                            <HelpCircle className="w-3 h-3" /> Predefined Quiz
                          </span>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>

              <div className="p-4 bg-[#F8FAFC] border-t border-[#E2E8F0]">
                <button
                  onClick={() => setIsClassroomOpen(true)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-bold transition-colors shadow-xs"
                >
                  <Tv className="w-4 h-4 text-[#818CF8]" />
                  <span>Open in Classroom Mode</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isClassroomOpen && (
        <ClassroomModeModal
          lesson={lesson}
          chapter={chapter}
          subject={subject}
          classLevel={classLevel}
          isOpen={isClassroomOpen}
          onClose={() => setIsClassroomOpen(false)}
          hasNextLesson={!!nextLesson}
          hasPrevLesson={!!prevLesson}
        />
      )}

      {lesson.quiz && isQuizOpen && (
        <QuizRunnerModal
          quiz={lesson.quiz}
          isOpen={isQuizOpen}
          onClose={() => setIsQuizOpen(false)}
        />
      )}
    </div>
  );
}
