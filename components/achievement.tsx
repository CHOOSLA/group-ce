const stats = [
  { val: "3~6M", cap: "협찬 획득" },
  { val: "₩30–50만", cap: "월 구독료" },
  { val: "주 1회+", cap: "업로드 리듬" },
  { val: "끝없음", cap: "직업이 바뀌는 일" },
];

export function Achievement() {
  return (
    <section className="border-b border-line bg-ink text-paper">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-10 py-24 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="text-xs tracking-widest uppercase text-coral mb-4">
              성과 약속
            </div>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.02] tracking-tight">
              3~6개월 안에
              <br />
              <span className="text-coral">협찬</span>을 갖는다.
            </h2>
            <p className="mt-8 text-paper/70 text-lg leading-relaxed max-w-2xl">
              마케팅 문구가 아니라 실측 목표입니다. 짧으면 3개월, 늦어도 6개월 안에
              첫 협찬 획득이 나오도록 총괄과 조교가 함께 굴러갑니다.
            </p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-px bg-paper/10 border border-paper/10">
            {stats.map((s) => (
              <div key={s.cap} className="bg-ink p-6">
                <div className="font-serif text-4xl text-coral">{s.val}</div>
                <div className="mt-2 text-sm text-paper/60">{s.cap}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
