const items = [
  {
    num: "01",
    title: "사옥(공유오피스) 사용",
    body: "언제든 와서 촬영·편집·기획. 자리를 받고 서로 얼굴 보며 굴러가는 공간.",
  },
  {
    num: "02",
    title: "다 같이 촬영, 다 같이 편집",
    body: "혼자면 안 찍는 걸 함께라서 찍습니다. 서로의 카메라와 편집이 됩니다.",
  },
  {
    num: "03",
    title: "크리에이터 채널 직접 출연",
    body: "잘 찍으면 카테고리 총괄의 채널에 출연. 노출이 곧 초기 팬입니다.",
  },
  {
    num: "04",
    title: "주 단위 미션 부여",
    body: "최소 주 1회 영상 업로드. 조교가 이행 여부를 매주 관리.",
  },
  {
    num: "05",
    title: "콘텐츠 레퍼런스 분석 · 피드백",
    body: "잘 되는 콘텐츠를 CE가 분석해 가이드. 제작물 피드백까지 업로드 직전에 붙습니다.",
  },
  {
    num: "06",
    title: "수익화 모델 지원",
    body: "협찬 · 팀 매칭 · 기업 계약까지. 채널이 서면 우리가 수요를 붙입니다.",
  },
];

export function Benefits() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-10 py-24 lg:py-32">
        <div className="text-xs tracking-widest uppercase text-coral mb-4">
          3기 입과 시
        </div>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight max-w-3xl">
          월 30~50만 원으로
          <br />당신이 받는 것.
        </h2>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {items.map((it) => (
            <div key={it.num}>
              <div className="font-serif text-5xl text-coral">{it.num}</div>
              <div className="mt-4 font-serif text-xl">{it.title}</div>
              <p className="mt-2 text-sm text-ink/70 leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
