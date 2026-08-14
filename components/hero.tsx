"use client";

import { useApply } from "@/lib/apply-context";

export function Hero({ dDay = 14 }: { dDay?: number }) {
  const { openApply } = useApply();
  return (
    <section id="top" className="border-b border-line">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-10 pt-20 pb-24 lg:pt-32 lg:pb-32">
        <div className="text-xs tracking-widest uppercase text-ink/60 mb-8">
          CE · Creating <span className="text-coral">3기</span> 모집중 · D-{dDay}
        </div>

        <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight max-w-5xl">
          크리에이터가 되는<br />
          <span className="coral-underline italic">환경</span>을 팝니다.
        </h1>

        <p className="mt-10 max-w-2xl text-lg md:text-xl text-ink/70 leading-relaxed">
          강의가 아닙니다. 사옥·촬영·편집·채널 출연·수익화 지원이 묶인{" "}
          <span className="text-ink font-medium">월 구독</span>입니다.
          3~6개월 안에{" "}
          <span className="text-ink font-medium">협찬 획득</span>을 목표로 함께 굴러가는{" "}
          <span className="text-ink font-medium">크리에이터 이코노미</span>.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <button
            onClick={() => openApply()}
            className="bg-coral text-paper text-base px-8 py-4 font-medium hover:bg-ink transition-colors"
          >
            3기 지원하기 →
          </button>
          <a
            href="#process"
            className="border border-ink/25 text-base px-8 py-4 hover:border-ink transition-colors"
          >
            원데이 클래스 알아보기
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 border-t border-line pt-10">
          <KPI value="3" suffix="기" caption="2026 하반기 모집" />
          <KPI value="8" suffix="개" caption="운영 카테고리 (신설 3)" />
          <KPI value="3–6" suffix="개월" caption="협찬 획득 목표" />
          <KPI value="주 1" suffix="회" caption="최소 영상 업로드 미션" />
        </div>
      </div>
    </section>
  );
}

function KPI({ value, suffix, caption }: { value: string; suffix: string; caption: string }) {
  return (
    <div>
      <div className="font-serif text-4xl md:text-5xl">
        {value}
        <span className="text-coral">{suffix}</span>
      </div>
      <div className="mt-2 text-sm text-ink/60">{caption}</div>
    </div>
  );
}
