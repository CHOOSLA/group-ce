"use client";

import { useState } from "react";
import { missionMembers } from "@/lib/mock-admin";

type Filter = "all" | "O" | "X";

export function MissionTab() {
  const [filter, setFilter] = useState<Filter>("all");
  const [selectedIdx, setSelectedIdx] = useState(0);

  const filtered = missionMembers.filter(
    (m) => filter === "all" || m.branding === filter,
  );
  const selected = missionMembers[selectedIdx];

  return (
    <section className="mx-auto max-w-[88rem] px-6 lg:px-10 py-12">
      <div className="text-xs tracking-widest uppercase text-coral mb-3">
        03 · Missions & Feedback
      </div>
      <h1 className="font-serif text-4xl md:text-5xl tracking-tight">
        미션 이행 검수와 <span className="italic">1:1 피드백</span>
      </h1>
      <p className="mt-4 text-ink/60 max-w-2xl">
        브랜딩 O는 CE가 미션을 설계하고, 브랜딩 X는 본인 설계 미션의 이행 여부만 관리합니다. 좌측에서 팀원을 골라 피드백 스레드를 확인하세요.
      </p>

      <div className="mt-8 flex items-center gap-2 flex-wrap">
        <span className="text-xs text-ink/50 mr-2">브랜딩 필터</span>
        <FilterButton
          active={filter === "all"}
          onClick={() => setFilter("all")}
          label="전체"
          variant="ink"
        />
        <FilterButton
          active={filter === "O"}
          onClick={() => setFilter("O")}
          label="O (CE 설계)"
          variant="coral"
        />
        <FilterButton
          active={filter === "X"}
          onClick={() => setFilter("X")}
          label="X (본인 설계)"
          variant="ink"
        />
      </div>

      <div className="mt-6 grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 border border-line bg-paper">
          <div className="border-b border-line px-6 py-4">
            <div className="font-serif text-xl">팀원 · 이번 주</div>
            <div className="text-xs text-ink/50 mt-1 font-mono">
              주 1회 영상 업로드가 기본 미션
            </div>
          </div>
          <div className="divide-y divide-line">
            {filtered.map((m) => {
              const originalIdx = missionMembers.findIndex(
                (x) => x.name === m.name,
              );
              const active = selectedIdx === originalIdx;
              return (
                <button
                  key={m.name}
                  onClick={() => setSelectedIdx(originalIdx)}
                  className={`w-full text-left px-6 py-4 block transition-colors ${
                    active ? "bg-coral-soft" : "hover:bg-line/30"
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-3">
                      <span className="font-serif text-lg">{m.name}</span>
                      <span
                        className={`text-xs px-1.5 py-0.5 font-mono ${
                          m.branding === "O"
                            ? "bg-coral text-paper"
                            : "bg-line text-ink"
                        }`}
                      >
                        {m.branding}
                      </span>
                      <span className="text-xs text-ink/50">TA {m.ta}</span>
                    </div>
                    <span
                      className={`text-xs font-mono tabular-nums ${
                        m.rate < 50 ? "text-coral" : "text-ink/60"
                      }`}
                    >
                      {m.rate}%
                    </span>
                  </div>
                  <div className="mt-2 text-xs text-ink/60">
                    {m.missionTitle}
                  </div>
                  <div className="mt-2 h-1 bg-line">
                    <div
                      className={`h-full ${
                        m.rate < 50 ? "bg-coral" : "bg-ink"
                      }`}
                      style={{ width: `${m.rate}%` }}
                    />
                  </div>
                </button>
              );
            })}
            {filtered.length === 0 && (
              <div className="px-6 py-10 text-center text-neutral-400 text-sm">
                조건에 맞는 팀원이 없습니다.
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-7 border border-line bg-paper flex flex-col">
          {selected && (
            <>
              <div className="border-b border-line px-6 py-5">
                <div className="flex items-baseline justify-between">
                  <div>
                    <div className="text-xs tracking-widest uppercase text-ink/50">
                      이번 주 미션
                    </div>
                    <div className="mt-1 font-serif text-2xl">
                      {selected.name} · {selected.missionTitle}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-ink/50">이행률</div>
                    <div
                      className={`font-mono text-2xl tabular-nums ${
                        selected.rate < 50 ? "text-coral" : "text-ink"
                      }`}
                    >
                      {selected.rate}%
                    </div>
                  </div>
                </div>

                {selected.branding === "O" ? (
                  <div className="mt-6">
                    <div className="text-xs text-ink/50 mb-2">
                      미션 본문 (CE 설계 · 편집 가능)
                    </div>
                    <textarea
                      className="w-full border border-line bg-paper p-3 text-sm font-mono h-20 focus:outline-none focus:border-coral"
                      defaultValue={`${selected.missionTitle}\n- 레퍼런스 A: youtu.be/xxx\n- 레퍼런스 B: youtu.be/yyy\n- 업로드 마감: 일요일 23:59`}
                    />
                  </div>
                ) : (
                  <div className="mt-6">
                    <div className="text-xs text-ink/50 mb-2">
                      미션 본문 (본인 설계 · 읽기 전용)
                    </div>
                    <div className="w-full border border-line bg-line/20 p-3 text-sm font-mono h-20 text-ink/70">
                      {selected.missionTitle}
                    </div>
                    <label className="mt-3 flex items-center gap-2 text-sm">
                      <input
                        type="checkbox"
                        defaultChecked={selected.rate === 100}
                        className="accent-coral"
                      />
                      <span>이번 주 이행 완료로 표시</span>
                    </label>
                  </div>
                )}
              </div>

              <div className="flex-1 px-6 py-5 space-y-4 min-h-0 overflow-auto">
                <div className="text-xs tracking-widest uppercase text-ink/50">
                  1:1 피드백
                </div>
                {selected.feedback.map((f, i) => (
                  <div key={i} className="border-l-2 border-coral pl-4">
                    <div className="flex items-baseline gap-2 text-xs">
                      <span className="font-medium">{f.by}</span>
                      <span className="text-ink/40 font-mono">{f.at}</span>
                    </div>
                    <p className="mt-1 text-sm text-ink/80">{f.msg}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-line p-4 flex gap-2">
                <input
                  type="text"
                  placeholder="피드백을 남기세요…"
                  className="flex-1 border border-line bg-paper px-3 py-2 text-sm focus:outline-none focus:border-coral"
                />
                <button className="bg-ink text-paper text-sm px-4 hover:bg-coral transition-colors">
                  보내기
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function FilterButton({
  active,
  onClick,
  label,
  variant,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  variant: "ink" | "coral";
}) {
  const activeClasses =
    variant === "coral" ? "bg-coral text-paper" : "bg-ink text-paper";
  return (
    <button
      onClick={onClick}
      className={`text-xs px-3 py-1.5 transition-colors ${
        active
          ? activeClasses
          : "bg-paper border border-line text-ink/60 hover:border-ink/40"
      }`}
    >
      {label}
    </button>
  );
}
