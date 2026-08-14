"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "월 30~50만 원이면 강의치고 비싼 거 아닌가요?",
    a: "강의 값이 아닙니다. 사옥, 함께 촬영·편집, 채널 출연, 수익화 지원까지가 묶인 월 구독입니다. 크리에이터가 된다는 건 직업이 바뀌는 일이라, 이 환경이 유지비입니다.",
  },
  {
    q: "왜 원데이 클래스는 유료인가요?",
    a: "무분별한 유입을 막기 위해서입니다. 니즈 없는 사람이 대거 들어오면 단톡방과 원데이 모두 신호가 흐려집니다. 소액 유료가 첫 필터입니다.",
  },
  {
    q: "월 구독은 언제 끝나나요?",
    a: "끝이 없습니다. 크리에이터가 됐다는 건 콘텐츠를 계속 찍는다는 뜻이고, 다 같이 계속 찍는 게 이 서비스의 본체입니다.",
  },
  {
    q: "이미 채널이 있는데도 지원 가능한가요?",
    a: "가능합니다. 브랜딩이 되어 있으면 CE가 커리큘럼과 미션을 직접 짜서 붙습니다. 브랜딩 O 그룹으로 분류됩니다.",
  },
  {
    q: "3~6개월 안에 협찬은 정말인가요?",
    a: "실제 목표입니다. 마케팅 문구가 아니라 총괄과 조교가 6개월(짧으면 3개월) 안에 협찬 획득이 되도록 함께 굴러갑니다.",
  },
  {
    q: "팀원에서 조교, 총괄까지 갈 수 있나요?",
    a: "그것이 CE의 성장 메커니즘입니다. 2기 조교 3명이 3기 총괄로 분화했습니다. 위에서 영입하지 않고 아래에서 자라 갈라집니다.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="border-b border-line bg-white">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="text-xs tracking-widest uppercase text-coral mb-4">
              FAQ
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight">
              자주 묻는 <span className="italic">진짜</span> 질문.
            </h2>
            <p className="mt-4 text-ink/60">
              추가 문의는 오픈채팅 또는 지원서 마지막 자유서술란에 남겨주세요.
            </p>
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="border-t border-line">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-b border-line"
                >
                  <AccordionTrigger className="text-left py-6 font-serif text-lg md:text-xl hover:text-coral hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-ink/70 leading-relaxed max-w-2xl text-base">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
