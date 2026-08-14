const cards = [
  {
    num: "01 · 공간",
    title: "자리",
    body: "혼자면 안 열던 노트북이, 사옥 자리 앞에 앉으면 열립니다.",
    img: "https://picsum.photos/seed/ce-space/800/600",
    alt: "자리",
  },
  {
    num: "02 · 리듬",
    title: "미션",
    body: null,
    highlight: "이행",
    prefix: "매주 한 편이 걸립니다. 조교가 ",
    suffix: "을 확인합니다.",
    img: "https://picsum.photos/seed/ce-mission/800/600",
    alt: "미션",
  },
  {
    num: "03 · 강제",
    title: "컨펌",
    body: null,
    highlight: "컨펌",
    prefix: "저녁마다 총괄의 ",
    suffix: "을 통과해야 하루가 닫힙니다.",
    img: "https://picsum.photos/seed/ce-confirm/800/600",
    alt: "컨펌",
  },
] as const;

export function WhySection() {
  return (
    <section id="why" className="border-b border-line">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="text-xs tracking-widest uppercase text-coral mb-4">
              왜 CE인가
            </div>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.02] tracking-tight">
              사옥. 카메라.
              <br />팀. <span className="italic text-coral">업로드.</span>
            </h2>
            <p className="mt-6 text-ink/70 leading-relaxed">
              매주 업로드가 돌아가게 만드는 네 가지. 강의가 아닙니다 — 크리에이터가 되는{" "}
              <span className="text-ink">환경</span>입니다.
            </p>
          </div>

          <div className="lg:col-span-8 grid md:grid-cols-3 gap-px bg-line border border-line">
            {cards.map((c) => (
              <div key={c.title} className="bg-paper flex flex-col">
                <div className="aspect-[4/3] overflow-hidden bg-neutral-100 relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.img}
                    alt={c.alt}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <div className="text-xs tracking-widest uppercase text-ink/50">
                    {c.num}
                  </div>
                  <div className="mt-4 font-serif text-2xl">{c.title}</div>
                  <p className="mt-3 text-sm text-ink/70 leading-relaxed">
                    {c.body ?? (
                      <>
                        {c.prefix}
                        <span className="text-coral">{c.highlight}</span>
                        {c.suffix}
                      </>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-l-2 border-coral pl-6 max-w-3xl">
          <p className="font-serif text-2xl md:text-3xl leading-snug">
            혼자서는 안 되던 일이,
            <br />매주 <span className="italic text-coral">함께</span>라서 됩니다.
          </p>
          <p className="mt-3 text-sm text-ink/60">
            자리 · 미션 · 컨펌. 세 가지가 매주 반복될 때 채널이 자랍니다.
          </p>
        </div>
      </div>
    </section>
  );
}
