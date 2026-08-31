"use client";

import { useState } from "react";
import Link from "next/link";
import { Tv, PlayCircle, HelpCircle, Layers, ArrowLeft, Maximize2, Sparkles, BookOpen } from "lucide-react";
import { CURRICULUM_DATA, Lesson, Chapter, Subject, ClassLevel } from "@/lib/curriculum-data";
import { BrandexYouTubePlayer } from "@/components/learning/BrandexYouTubePlayer";
import { QuizRunnerModal } from "@/components/quiz/QuizRunnerModal";

export default function ClassroomHubPage() {
  // Default selected class & subject & lesson
  const [selectedClassId, setSelectedClassId] = useState<string>("class-8");
  const [selectedSubjectSlug, setSelectedSubjectSlug] = useState<string>("science");
  
  const currentClass = CURRICULUM_DATA.find((c) => c.id === selectedClassId) || CURRICULUM_DATA[0];
  const currentSubject = currentClass.subjects.find((s) => s.slug === selectedSubjectSlug) || currentClass.subjects[0];
  
  const defaultChapter = currentSubject.chapters[0];
  const defaultTopic = defaultChapter.topics[0];
  const defaultLesson = defaultTopic.lessons[0];

  const [activeLesson, setActiveLesson] = useState<Lesson>(defaultLesson);
  const [activeChapter, setActiveChapter] = useState<Chapter>(defaultChapter);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  // Flatten lessons for current subject
  const allSubjectLessons = currentSubject.chapters.flatMap((ch) =>
    ch.topics.flatMap((top) => top.lessons.map((l) => ({ lesson: l, chapter: ch })))
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      {/* Classroom Mode Header */}
      <div className="flex items-center justify-between px-4 lg:px-8 py-3.5 bg-slate-900 border-b border-slate-800">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Exit
          </Link>
          <div className="h-4 w-px bg-slate-800" />
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-blue-500/20 text-blue-400 font-mono text-xs font-bold uppercase tracking-wider border border-blue-500/30">
              <Tv className="w-3.5 h-3.5" /> Classroom Theater
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">
              Optimized for Smartboards &amp; Projectors
            </span>
          </div>
        </div>

        {/* Grade & Subject Selectors */}
        <div className="flex items-center gap-2">
          <select
            value={selectedClassId}
            onChange={(e) => {
              setSelectedClassId(e.target.value);
              const cls = CURRICULUM_DATA.find((c) => c.id === e.target.value);
              if (cls && cls.subjects[0]) {
                setSelectedSubjectSlug(cls.subjects[0].slug);
                const ch = cls.subjects[0].chapters[0];
                setActiveChapter(ch);
                setActiveLesson(ch.topics[0].lessons[0]);
              }
            }}
            className="bg-slate-800 border border-slate-700 text-xs font-bold text-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {CURRICULUM_DATA.map((cls) => (
              <option key={cls.id} value={cls.id}>
                {cls.name}
              </option>
            ))}
          </select>

          <select
            value={selectedSubjectSlug}
            onChange={(e) => {
              setSelectedSubjectSlug(e.target.value);
              const sub = currentClass.subjects.find((s) => s.slug === e.target.value);
              if (sub && sub.chapters[0]) {
                const ch = sub.chapters[0];
                setActiveChapter(ch);
                setActiveLesson(ch.topics[0].lessons[0]);
              }
            }}
            className="bg-slate-800 border border-slate-700 text-xs font-bold text-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {currentClass.subjects.map((sub) => (
              <option key={sub.slug} value={sub.slug}>
                {sub.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Classroom Screen Layout */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Main Stage (Player & Lesson Title) */}
        <div className="flex-1 p-4 lg:p-8 flex flex-col justify-center max-h-full overflow-y-auto">
          <div className="max-w-6xl w-full mx-auto space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-800 aspect-video bg-black">
              <BrandexYouTubePlayer
                videoId={activeLesson.youtubeId}
                title={activeLesson.title}
                isClassroomMode={true}
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-slate-900/80 rounded-2xl border border-slate-800">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-400">
                    {currentClass.name} • {currentSubject.name} • Ch {activeChapter.chapterNumber}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    {activeLesson.duration}
                  </span>
                </div>
                <h1 className="text-xl font-bold text-white mt-1">
                  {activeLesson.title}
                </h1>
              </div>

              {activeLesson.quiz && (
                <button
                  onClick={() => setIsQuizOpen(true)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors shadow-lg shadow-emerald-600/30"
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>Start Classroom Quiz</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right Syllabus Quick Switcher */}
        <div className="w-full lg:w-96 border-t lg:border-t-0 lg:border-l border-slate-800 bg-slate-900/90 flex flex-col">
          <div className="p-4 border-b border-slate-800">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              Syllabus Playlist
            </h3>
            <p className="text-sm font-bold text-white mt-0.5">
              {currentSubject.name} • {allSubjectLessons.length} Modules
            </p>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2 max-h-[40vh] lg:max-h-full">
            {allSubjectLessons.map(({ lesson, chapter }, idx) => {
              const isActive = lesson.id === activeLesson.id;
              return (
                <div
                  key={lesson.id}
                  onClick={() => {
                    setActiveLesson(lesson);
                    setActiveChapter(chapter);
                  }}
                  className={`p-3 rounded-xl cursor-pointer transition-all border ${
                    isActive
                      ? "bg-blue-950/80 border-blue-500/60 text-white"
                      : "bg-slate-800/40 border-slate-800/80 hover:bg-slate-800 text-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono text-slate-400">
                      Ch {chapter.chapterNumber} • Lesson {(idx + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="text-[10px] font-mono text-blue-400">
                      {lesson.duration}
                    </span>
                  </div>
                  <p className="text-xs font-bold truncate mt-1">
                    {lesson.title}
                  </p>
                  {lesson.quiz && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 mt-1">
                      <HelpCircle className="w-3 h-3" /> Quiz Attached
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quiz Modal */}
      {activeLesson.quiz && isQuizOpen && (
        <QuizRunnerModal
          quiz={activeLesson.quiz}
          isOpen={isQuizOpen}
          onClose={() => setIsQuizOpen(false)}
        />
      )}
    </div>
  );
}
