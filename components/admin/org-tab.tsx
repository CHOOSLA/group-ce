"use client";

import { useState } from "react";
import { orgTree } from "@/lib/mock-admin";

export function OrgTab() {
  const [selectedTA, setSelectedTA] = useState(orgTree.tas[0].id);
  const currentTA = orgTree.tas.find((t) => t.id === selectedTA);

  return (
    <section className="mx-auto max-w-[88rem] px-6 lg:px-10 py-12">
      <div className="text-xs tracking-widest uppercase text-coral mb-3">
        02 · Organization
      </div>
      <h1 className="font-serif text-4xl md:text-5xl tracking-tight">
        카테고리 <span className="italic">계층</span>과 조 배정
      </h1>
      <p className="mt-4 text-ink/60 max-w-2xl">
        카테고리는 총괄 1명에서 시작해 조교가 성장하면 다음 총괄로 분화합니다. 조교 노드를 눌러 담당 팀원을 확인·재배정하세요.
      </p>

      <div className="mt-12 grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 border border-line bg-paper p-6">
          <div className="text-xs tracking-widest uppercase text-ink/50 mb-4">
            카테고리: {orgTree.category}
          </div>

          <div className="border border-ink bg-ink text-paper p-4">
            <div className="text-xs text-coral">카테고리 총괄</div>
            <div className="mt-1 font-serif text-2xl">{orgTree.lead.name}</div>
            <div className="text-xs text-paper/60 mt-1">브랜드 · 얼굴</div>
          </div>

          <div className="ml-6 mt-3 border-l border-line pl-6 space-y-3">
            {orgTree.tas.map((ta) => (
              <div key={ta.id}>
                <button
                  onClick={() => setSelectedTA(ta.id)}
                  className={`w-full text-left border p-4 transition-colors ${
                    selectedTA === ta.id
                      ? "border-coral bg-coral-soft"
                      : "border-line bg-paper hover:border-ink/40"
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="text-xs text-ink/50">
                        조교 · {ta.level}
                      </div>
                      <div className="font-serif text-xl mt-0.5">{ta.name}</div>
                    </div>
                    <div className="text-xs font-mono text-ink/60">
                      팀원 {ta.members.length}
                    </div>
                  </div>
                </button>

                {ta.level === "L2" && (
                  <div className="mt-2 ml-4 text-xs text-ink/50 flex items-center gap-2">
                    <span className="text-coral">↳</span>
                    다음 총괄로 분화 준비 완료
                    <button className="ml-auto text-coral hover:underline">
                      분화 →
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 border border-line bg-paper p-6">
          {currentTA && (
            <>
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-xs tracking-widest uppercase text-ink/50">
                    담당 팀원
                  </div>
                  <div className="mt-1 font-serif text-2xl">
                    {currentTA.name} 조교의 조
                  </div>
                </div>
                <button className="text-sm border border-ink/25 px-4 py-2 hover:border-ink transition-colors">
                  + 팀원 추가
                </button>
              </div>

              <table className="mt-6 w-full text-sm">
                <thead className="text-xs text-ink/50 uppercase tracking-wider border-b border-line">
                  <tr>
                    <th className="text-left py-3 font-medium">이름</th>
                    <th className="text-left py-3 font-medium">브랜딩</th>
                    <th className="text-left py-3 font-medium">
                      이번 주 이행률
                    </th>
                    <th className="text-right py-3 font-medium">조 이동</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {currentTA.members.map((m) => (
                    <tr key={m.name}>
                      <td className="py-4">{m.name}</td>
                      <td className="py-4">
                        <span
                          className={`text-xs px-2 py-0.5 font-mono ${
                            m.branding === "O"
                              ? "bg-coral text-paper"
                              : "bg-line text-ink"
                          }`}
                        >
                          {m.branding}
                        </span>
                      </td>
                      <td className="py-4">
                        <div className="flex items-center gap-3 w-48">
                          <div className="flex-1 h-1.5 bg-line">
                            <div
                              className="h-full bg-ink"
                              style={{ width: `${m.missionRate}%` }}
                            />
                          </div>
                          <span className="text-xs font-mono w-10 text-right tabular-nums">
                            {m.missionRate}%
                          </span>
                        </div>
                      </td>
                      <td className="py-4 text-right">
                        <select className="text-xs border border-line px-2 py-1 bg-paper">
                          <option>1조</option>
                          <option>2조</option>
                          <option>3조</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
