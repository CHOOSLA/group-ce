export function Journey() {
  return (
    <section id="journey" className="border-b border-line bg-white">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-10 py-24 lg:py-32">
        <div className="text-xs tracking-widest uppercase text-coral mb-4">
          성장 여정
        </div>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight max-w-3xl">
          <span className="italic">아래에서 자라</span> 위로 갈라집니다.
        </h2>
        <p className="mt-4 text-ink/60 max-w-2xl">
          카테고리 총괄은 처음부터 여러 명이 아닙니다. 조교가 잘 되면 다음 카테고리 총괄로 분화합니다.
        </p>

        <div className="mt-14 grid lg:grid-cols-2 gap-16 items-start">
          {/* 계층 구조 */}
          <div className="border border-line p-8 bg-paper">
            <div className="text-xs tracking-widest uppercase text-ink/50 mb-6">
              계층 구조
            </div>
            <div className="space-y-6">
              <div className="p-4 border-2 border-ink/20 transition-colors hover:border-coral hover:bg-coral-soft">
                <div className="text-[10px] tracking-widest uppercase text-ink/50">
                  Layer 1
                </div>
                <div className="font-serif text-xl mt-1">
                  카테고리 총괄 <span className="text-coral">1명</span>
                </div>
                <div className="text-sm text-ink/60 mt-1">
                  브랜드이자 얼굴. 카테고리당 1명.
                </div>
              </div>
              <div className="text-center text-ink/30 text-xl">↓ 관리</div>
              <div className="p-4 border-2 border-ink/20 transition-colors hover:border-coral hover:bg-coral-soft">
                <div className="text-[10px] tracking-widest uppercase text-ink/50">
                  Layer 2
                </div>
                <div className="font-serif text-xl mt-1">
                  조교 <span className="text-ink/40 text-base">(TA)</span>
                </div>
                <div className="text-sm text-ink/60 mt-1">
                  미션 부여 · 숙제 검사 · 주 단위 관리{" "}
                  <span className="text-coral">↗ 다음 총괄로 분화</span>
                </div>
              </div>
              <div className="text-center text-ink/30 text-xl">↓ 관리</div>
              <div className="p-4 border-2 border-ink/20 transition-colors hover:border-coral hover:bg-coral-soft">
                <div className="text-[10px] tracking-widest uppercase text-ink/50">
                  Layer 3
                </div>
                <div className="font-serif text-xl mt-1">
                  팀원 = 월 구독 수강생
                </div>
                <div className="text-sm text-ink/60 mt-1">
                  조별 단톡방으로 관리. CE의 핵심 결제자.
                </div>
              </div>
            </div>
          </div>

          {/* 기수 확장 타임라인 */}
          <div>
            <div className="text-xs tracking-widest uppercase text-ink/50 mb-6">
              기수별 카테고리 확장
            </div>
            <div className="space-y-8">
              <GenRow
                gen="1기"
                count="3개"
                note="숏폼 · 패션 · 운동. 각 총괄 1명이 처음부터 함께."
              />
              <div className="border-l-2 border-line ml-10 h-4" />
              <GenRow
                gen="2기"
                count="5개"
                plus="+2"
                note="사진 · 요리 신설. 1기 조교 정민서 → 총괄로 분화."
              />
              <div className="border-l-2 border-line ml-10 h-4" />
              <GenRow
                gen="3기"
                count="8개"
                plus="+3 신설"
                note="AI · 뷰티 · 펫. 2기 조교 3명이 3기 총괄로 분화."
                current
              />
            </div>

            <div className="mt-10 border-l-2 border-coral pl-5 py-1">
              <p className="text-sm text-ink/70 leading-relaxed">
                3기 팀원이 4기 총괄이 되는 곳입니다. 위에서 영입하지 않고 아래에서 자라 갈라집니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GenRow({
  gen,
  count,
  plus,
  note,
  current,
}: {
  gen: string;
  count: string;
  plus?: string;
  note: string;
  current?: boolean;
}) {
  return (
    <div className="grid grid-cols-[80px_1fr] gap-6 items-start">
      <div
        className={`font-serif text-4xl ${current ? "text-coral" : "text-ink/30"}`}
      >
        {gen}
      </div>
      <div>
        <div className="font-medium">
          카테고리 <span className="text-coral font-serif text-xl">{count}</span>
          {plus && <span className="text-sm text-ink/50"> ({plus})</span>}
        </div>
        <div className="text-sm text-ink/60 mt-1">{note}</div>
      </div>
    </div>
  );
}
