import {
  funnel,
  conversions,
  chatRooms,
  stageLabels,
  nextOneday,
  type FunnelLayer,
} from "@/lib/mock-admin";

export function FunnelTab() {
  return (
    <section className="mx-auto max-w-[88rem] px-6 lg:px-10 py-12">
      <div className="text-xs tracking-widest uppercase text-coral mb-3">
        01 · Funnel & CRM
      </div>
      <h1 className="font-serif text-4xl md:text-5xl tracking-tight">
        DB · 원데이 · 월구독 <span className="italic">역산 퍼널</span>
      </h1>
      <p className="mt-4 text-ink/60 max-w-2xl">
        월 구독 200명을 만들려면 원데이 2,000명, DB 20,000명이 필요합니다. 각 층 사이 전환율이 목표(10%)를 밑돌면 상위 층부터 조여야 합니다.
      </p>

      <div className="mt-12 space-y-3">
        <FunnelRow layer={funnel.db} />
        <ConversionBadge
          rate={conversions.dbToOneday.rate}
          target={conversions.dbToOneday.target}
          below={conversions.dbToOneday.below}
        />
        <FunnelRow layer={funnel.oneday} className="mx-8" />
        <ConversionBadge
          rate={conversions.onedayToSub.rate}
          target={conversions.onedayToSub.target}
          below={conversions.onedayToSub.below}
        />
        <FunnelRow layer={funnel.subscription} className="mx-16" dark />
      </div>

      <div className="mt-14 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 border border-line bg-paper">
          <div className="border-b border-line px-6 py-4 flex items-center justify-between">
            <div className="font-serif text-xl">단톡방 파이프라인</div>
            <span className="text-xs text-ink/50 font-mono">
              일반 → 원데이 → 조별
            </span>
          </div>
          <table className="w-full text-sm">
            <thead className="text-xs text-ink/50 uppercase tracking-wider border-b border-line">
              <tr>
                <th className="text-left px-6 py-3 font-medium">단톡방</th>
                <th className="text-left px-6 py-3 font-medium">단계</th>
                <th className="text-right px-6 py-3 font-medium">인원</th>
                <th className="text-right px-6 py-3 font-medium">마지막 활동</th>
                <th className="text-right px-6 py-3 font-medium">링크</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {chatRooms.map((r) => {
                const stage = stageLabels[r.stage];
                return (
                  <tr key={r.name}>
                    <td className="px-6 py-4">{r.name}</td>
                    <td className="px-6 py-4">
                      <span className={`text-xs px-2 py-0.5 ${stage.classes}`}>
                        {stage.label}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right font-mono tabular-nums">
                      {r.count.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-right text-ink/60">
                      {r.lastActivity}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <a className="text-coral hover:underline cursor-pointer">
                        열기 →
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="border border-line bg-paper p-6">
          <div className="font-serif text-xl">이번 주 원데이 회차</div>
          <div className="mt-1 text-xs text-ink/50">
            {nextOneday.date} · {nextOneday.focus}
          </div>

          <div className="mt-6">
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-ink/60">예약</span>
              <span className="font-mono text-lg tabular-nums">
                {nextOneday.reserved}{" "}
                <span className="text-ink/40 text-sm">
                  / {nextOneday.capacity}
                </span>
              </span>
            </div>
            <div className="mt-2 h-1.5 bg-line">
              <div
                className="h-full bg-coral"
                style={{
                  width: `${(nextOneday.reserved / nextOneday.capacity) * 100}%`,
                }}
              />
            </div>
          </div>

          <div className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-ink/60">결제 완료</span>
              <span className="font-mono tabular-nums">{nextOneday.paid}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-ink/60">미결제</span>
              <span className="font-mono text-coral tabular-nums">
                {nextOneday.unpaid}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-ink/60">노쇼 예상</span>
              <span className="font-mono tabular-nums">
                ~{nextOneday.noShowExpected}
              </span>
            </div>
          </div>

          <button className="mt-8 w-full bg-ink text-paper text-sm py-3 hover:bg-coral transition-colors">
            미결제 {nextOneday.unpaid}명 리마인드 발송 →
          </button>
        </div>
      </div>
    </section>
  );
}

function FunnelRow({
  layer,
  className = "",
  dark,
}: {
  layer: FunnelLayer;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`border p-8 ${
        dark ? "border-ink bg-ink text-paper" : "border-line bg-paper"
      } ${className}`}
    >
      <div className="flex items-baseline justify-between">
        <div>
          <div
            className={`text-xs tracking-widest uppercase ${
              dark ? "text-coral" : "text-ink/50"
            }`}
          >
            {layer.label}
          </div>
          <div className="mt-2 font-serif text-5xl tabular-nums">
            {layer.current.toLocaleString()}
            <span
              className={
                dark ? "text-paper/30 text-2xl" : "text-ink/30 text-2xl"
              }
            >
              {" "}
              / {layer.target.toLocaleString()}
            </span>
          </div>
        </div>
        <div className="text-right">
          <div className={`text-xs ${dark ? "text-paper/60" : "text-ink/50"}`}>
            목표 대비
          </div>
          <div className="font-mono text-2xl text-coral tabular-nums">
            {layer.rate}
            <span className="text-sm">%</span>
          </div>
        </div>
      </div>
      <div className={`mt-4 h-1.5 ${dark ? "bg-paper/20" : "bg-line"}`}>
        <div
          className={`h-full ${dark ? "bg-coral" : "bg-ink"}`}
          style={{ width: `${Math.min(100, layer.rate)}%` }}
        />
      </div>
    </div>
  );
}

function ConversionBadge({
  rate,
  target,
  below,
}: {
  rate: number;
  target: number;
  below: boolean;
}) {
  return (
    <div className="flex items-center justify-center py-1">
      <div className="text-xs text-ink/50 font-mono">↓ 전환율</div>
      <div
        className={`ml-3 text-sm font-mono px-3 py-1 tabular-nums ${
          below ? "bg-coral-soft text-coral" : "bg-coral text-paper"
        }`}
      >
        {rate}%{" "}
        <span className={below ? "text-ink/40" : "text-paper/70"}>
          / 목표 {target}%
        </span>
      </div>
    </div>
  );
}
