"use client";

import { useState } from "react";
import Link from "next/link";
import { FunnelTab } from "@/components/admin/funnel-tab";
import { OrgTab } from "@/components/admin/org-tab";
import { MissionTab } from "@/components/admin/mission-tab";

export default function AdminPage() {
  const [tab, setTab] = useState("funnel");

  return (
    <div className="min-h-screen bg-paper text-ink">
      <nav className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="font-serif text-2xl tracking-tight">
              ce<span className="text-coral">.</span>rizz
            </Link>
            <span className="text-xs tracking-widest uppercase text-ink/50 border-l border-line pl-6">
              Admin
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="hidden md:inline text-ink/60">
              3기 · <span className="font-mono">2026 Q3</span>
            </span>
            <span className="text-xs px-3 py-1 bg-coral-soft text-coral">
              운영자: 김소라
            </span>
          </div>
        </div>

        {/* 탭 */}
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <div className="flex gap-8 -mb-px">
            <AdminTabButton
              active={tab === "funnel"}
              onClick={() => setTab("funnel")}
              num="01"
              label="퍼널 & CRM"
            />
            <AdminTabButton
              active={tab === "org"}
              onClick={() => setTab("org")}
              num="02"
              label="조직 & 조교"
            />
            <AdminTabButton
              active={tab === "mission"}
              onClick={() => setTab("mission")}
              num="03"
              label="미션 & 피드백"
            />
          </div>
        </div>
      </nav>

      {/* 탭 콘텐츠 분기 */}
      {tab === "funnel" && <FunnelTab />}
      {tab === "org" && <OrgTab />}
      {tab === "mission" && <MissionTab />}

      <footer className="mt-16 border-t border-line">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10 py-8 flex items-center justify-between text-xs text-ink/50">
          <div>
            ce.rizz Admin · REQUIREMENTS §1 계층 / §5 역산 퍼널 / §6 CRM 인프라
          </div>
          <div className="font-mono">mock · 2026 Q3</div>
        </div>
      </footer>
    </div>
  );
}

function AdminTabButton({
  active,
  onClick,
  num,
  label,
}: {
  active: boolean;
  onClick: () => void;
  num: string;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`py-4 text-sm border-b-2 hover:text-ink transition-colors flex items-center gap-2 cursor-pointer outline-none ${
        active
          ? "border-coral text-ink font-medium"
          : "border-transparent text-ink/50"
      }`}
    >
      <span className="font-mono text-xs">{num}</span> {label}
    </button>
  );
}
