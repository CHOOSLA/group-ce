"use client";

import { useApply } from "@/lib/apply-context";

export function Nav({ dDay = 14 }: { dDay?: number }) {
  const { openApply } = useApply();
  return (
    <nav className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-serif text-2xl tracking-tight">
          ce<span className="text-coral">.</span>rizz
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-ink/70">
          <a href="#why" className="hover:text-ink">왜 CE</a>
          <a href="#categories" className="hover:text-ink">카테고리</a>
          <a href="#journey" className="hover:text-ink">성장 여정</a>
          <a href="#process" className="hover:text-ink">지원 프로세스</a>
          <a href="#faq" className="hover:text-ink">FAQ</a>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline text-xs text-ink/60">
            3기 모집 <span className="text-coral font-medium">D-{dDay}</span>
          </span>
          <button
            onClick={() => openApply()}
            className="bg-ink text-paper text-sm px-4 py-2 hover:bg-coral transition-colors"
          >
            지원하기 →
          </button>
        </div>
      </div>
    </nav>
  );
}
