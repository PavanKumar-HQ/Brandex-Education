"use client";

import { useState, useEffect } from "react";
import { X, Maximize2, Minimize2, ChevronLeft, ChevronRight, HelpCircle, BookOpen, Layers, Tv } from "lucide-react";
import { Lesson, Chapter, Subject, ClassLevel } from "@/lib/curriculum-data";
import { BrandexYouTubePlayer } from "../learning/BrandexYouTubePlayer";
import { QuizRunnerModal } from "../quiz/QuizRunnerModal";

interface ClassroomModeModalProps {
  lesson: Lesson;
  chapter: Chapter;
  subject: Subject;
  classLevel: ClassLevel;
  isOpen: boolean;
  onClose: () => void;
  onSelectNextLesson?: () => void;
  onSelectPrevLesson?: () => void;
  hasNextLesson?: boolean;
  hasPrevLesson?: boolean;
}

export function ClassroomModeModal({
  lesson,
  chapter,
  subject,
  classLevel,
  isOpen,
  onClose,
  onSelectNextLesson,
  onSelectPrevLesson,
  hasNextLesson = false,
  hasPrevLesson = false,
}: ClassroomModeModalProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape" && !isQuizOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isQuizOpen, onClose]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 text-white flex flex-col overflow-hidden select-none">
      {/* Top Presentation Bar */}
      <div className="flex items-center justify-between px-6 py-3.5 bg-slate-900 border-b border-slate-800 shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-500/20 text-blue-400 font-mono text-xs font-bold uppercase tracking-wider border border-blue-500/30">
            <Tv className="w-3.5 h-3.5" /> Classroom Mode
          </div>
          <div className="h-4 w-px bg-slate-700 hidden sm:block" />
          <div className="text-xs sm:text-sm text-slate-300 font-medium truncate max-w-xl">
            <span className="text-slate-400">{classLevel.name}</span>
            <span className="mx-1.5 text-slate-600">/</span>
            <span className="text-blue-400">{subject.name}</span>
            <span className="mx-1.5 text-slate-600">/</span>
            <span className="text-slate-200">Ch {chapter.chapterNumber}: {chapter.title}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {lesson.quiz && (
            <button
              onClick={() => setIsQuizOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors shadow-sm"
            >
              <HelpCircle className="w-3.5 h-3.5" /> Take Quiz
            </button>
          )}

          <button
            onClick={toggleFullscreen}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors hidden sm:block"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-rose-600/90 text-slate-200 hover:text-white text-xs font-semibold transition-colors border border-slate-700 hover:border-rose-500"
          >
            <X className="w-4 h-4" /> Exit
          </button>
        </div>
      </div>

      {/* Main Video Presentation Stage */}
      <div className="flex-1 relative flex items-center justify-center p-2 sm:p-6 bg-black">
        <div className="w-full h-full max-w-7xl max-h-[82vh] rounded-xl overflow-hidden shadow-2xl border border-slate-800">
          <BrandexYouTubePlayer
            videoId={lesson.youtubeId}
            title={lesson.title}
            isClassroomMode={true}
          />
        </div>
      </div>

      {/* Bottom Controls & Topic Title */}
      <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-t border-slate-800 shrink-0">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400">
              Active Lesson
            </span>
            <span className="text-[11px] font-medium text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/50">
              {lesson.duration}
            </span>
          </div>
          <h2 className="text-lg font-bold text-white tracking-tight mt-0.5">
            {lesson.title}
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onSelectPrevLesson}
            disabled={!hasPrevLesson}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold disabled:opacity-30 disabled:pointer-events-none transition-colors border border-slate-700"
          >
            <ChevronLeft className="w-4 h-4" /> Previous Lesson
          </button>

          <button
            onClick={onSelectNextLesson}
            disabled={!hasNextLesson}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold disabled:opacity-30 disabled:pointer-events-none transition-colors shadow-lg shadow-blue-600/20"
          >
            Next Lesson <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Quiz Modal within Classroom Mode */}
      {lesson.quiz && (
        <QuizRunnerModal
          quiz={lesson.quiz}
          isOpen={isQuizOpen}
          onClose={() => setIsQuizOpen(false)}
        />
      )}
    </div>
  );
}
