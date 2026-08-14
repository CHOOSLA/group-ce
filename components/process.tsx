"use client";

import { useApply } from "@/lib/apply-context";

const steps = [
  {
    num: "01",
    title: "오픈채팅 참여",
    sub: "누구나 · 무료",
    desc: "DB 진입. 관심 카테고리 채팅방에 참여해 흐름을 봅니다.",
    highlight: false,
  },
  {
    num: "02",
    title: "원데이 클래스",
    sub: "소액 유료 · 회당 100명",
    desc: "월 구독 시뮬레이션. 여기서 니즈가 확인된 사람이 넘어옵니다.",
    highlight: false,
  },
  {
    num: "03",
    title: "3기 지원서",
    sub: "자가진단 · 니즈 검증",
    desc: "카테고리 선택, 채널 유무, 투자 가능 시간, 목표를 확인.",
    highlight: false,
  },
  {
    num: "04",
    title: "카테고리 총괄 면접",
    sub: "1:1 · 브랜딩 O/X 판정",
    desc: "해당 카테고리 총괄과 직접. 커리큘럼 관여 깊이가 결정됩니다.",
    highlight: false,
  },
  {
    num: "05",
    title: "3기 입과",
    sub: "월 구독 결제",
    desc: "조 배정, 사옥 안내, 첫 주 미션. 3~6개월 카운트 시작.",
    highlight: true,
  },
] as const;

export function Process() {
  const { openApply } = useApply();
  return (
    <section id="process" className="border-b border-line">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-10 py-24 lg:py-32">
        <div className="text-xs tracking-widest uppercase text-coral mb-4">
          지원 프로세스 · 5 STEPS
        </div>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight max-w-3xl">
          DB에서 조교까지,
          <br />
          <span className="italic">한 흐름</span>으로.
        </h2>
        <p className="mt-4 text-ink/60 max-w-2xl">
          누구나 오픈채팅으로 시작합니다. 원데이는 소액 유료로 진짜 니즈를 거르는 첫 관문.
        </p>

        <div className="mt-14 grid md:grid-cols-5 gap-px bg-line border border-line">
          {steps.map((s) => (
            <div
              key={s.num}
              className={s.highlight ? "bg-coral text-paper p-6" : "bg-paper p-6"}
            >
              <div
                className={`font-serif text-5xl ${
                  s.highlight ? "text-paper/40" : "text-ink/20"
                }`}
              >
                {s.num}
              </div>
              <div className="mt-4 font-serif text-lg">{s.title}</div>
              <div
                className={`mt-2 text-xs ${
                  s.highlight ? "text-paper/70" : "text-ink/60"
                }`}
              >
                {s.sub}
              </div>
              <div
                className={`mt-4 text-sm leading-relaxed ${
                  s.highlight ? "text-paper/85" : "text-ink/70"
                }`}
              >
                {s.desc}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <button
            onClick={() => openApply()}
            className="bg-ink text-paper px-6 py-3 hover:bg-coral transition-colors"
          >
            지금 지원서 시작 →
          </button>
          <a
            href="#faq"
            className="border border-ink/25 px-6 py-3 hover:border-ink transition-colors"
          >
            자주 묻는 질문
          </a>
        </div>
      </div>
    </section>
  );
}
