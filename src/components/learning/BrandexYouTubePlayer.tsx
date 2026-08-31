"use client";

import { useState, useEffect } from "react";
import { Maximize2, Tv, AlertCircle, WifiOff } from "lucide-react";

interface BrandexYouTubePlayerProps {
  videoId: string;
  title: string;
  onEnterClassroomMode?: () => void;
  isClassroomMode?: boolean;
}

export function BrandexYouTubePlayer({
  videoId,
  title,
  onEnterClassroomMode,
  isClassroomMode = false,
}: BrandexYouTubePlayerProps) {
  const [isOnline, setIsOnline] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsOnline(navigator.onLine);
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div className={`relative overflow-hidden bg-slate-950 rounded-2xl shadow-xl border border-slate-800 ${
      isClassroomMode ? "w-full h-full" : "w-full aspect-video"
    }`}>
      {!isOnline ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-slate-900 text-white">
          <div className="p-4 rounded-full bg-slate-800 text-amber-400 mb-4">
            <WifiOff className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-bold text-slate-100">You are currently offline</h3>
          <p className="text-sm text-slate-400 max-w-md mt-2">
            Brandex educational videos are streamed directly from YouTube and require an active internet connection. The application shell and quiz metadata remain available.
          </p>
        </div>
      ) : (
        <>
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950 text-slate-400 z-0">
              <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mb-3" />
              <span className="text-xs font-mono tracking-wider uppercase">Loading Classroom Stream...</span>
            </div>
          )}
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&enablejsapi=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            onLoad={() => setIsLoading(false)}
            className="w-full h-full border-0 relative z-10"
          />

          {!isClassroomMode && onEnterClassroomMode && (
            <div className="absolute top-4 right-4 z-20 opacity-0 hover:opacity-100 focus-within:opacity-100 transition-opacity">
              <button
                onClick={onEnterClassroomMode}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 text-white text-xs font-semibold hover:bg-blue-600 transition-colors shadow-md backdrop-blur-md border border-slate-700"
              >
                <Tv className="w-3.5 h-3.5" /> Classroom Display Mode
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
