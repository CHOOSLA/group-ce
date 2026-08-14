"use client";

import { useApply } from "@/lib/apply-context";

export function FooterCTA({ dDay = 14 }: { dDay?: number }) {
  const { openApply } = useApply();
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-10 py-20 lg:py-24 text-center">
        <h2 className="font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
          3기 마감까지
          <br />
          <span className="text-coral">D-{dDay}</span>
        </h2>
        <p className="mt-8 text-paper/70 max-w-xl mx-auto">
          4기가 없다는 뜻은 아니지만, 3기 카테고리 정원은 총괄과 조교가 관리할 수 있는 인원만큼입니다.
        </p>
        <button
          onClick={() => openApply()}
          className="mt-10 bg-coral text-paper px-10 py-4 text-lg font-medium hover:bg-paper hover:text-ink transition-colors"
        >
          지금 지원서 시작 →
        </button>
      </div>
      <div className="border-t border-paper/10">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10 py-8 flex flex-wrap justify-between items-center text-xs text-paper/50">
          <div className="font-serif text-base text-paper">
            ce<span className="text-coral">.</span>rizz
          </div>
          <div>ⓒ 2026 CE Creating · 크리에이터 이코노미 3기</div>
        </div>
      </div>
    </section>
  );
}
