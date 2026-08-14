import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FunnelTab } from "@/components/admin/funnel-tab";
import { OrgTab } from "@/components/admin/org-tab";
import { MissionTab } from "@/components/admin/mission-tab";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Tabs defaultValue="funnel" className="gap-0">
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

          <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
            <TabsList className="justify-start gap-8 rounded-none bg-transparent p-0 h-auto -mb-px w-auto">
              <AdminTabTrigger value="funnel" num="01" label="퍼널 & CRM" />
              <AdminTabTrigger value="org" num="02" label="조직 & 조교" />
              <AdminTabTrigger value="mission" num="03" label="미션 & 피드백" />
            </TabsList>
          </div>
        </nav>

        <TabsContent value="funnel" className="mt-0">
          <FunnelTab />
        </TabsContent>
        <TabsContent value="org" className="mt-0">
          <OrgTab />
        </TabsContent>
        <TabsContent value="mission" className="mt-0">
          <MissionTab />
        </TabsContent>
      </Tabs>

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

function AdminTabTrigger({
  value,
  num,
  label,
}: {
  value: string;
  num: string;
  label: string;
}) {
  return (
    <TabsTrigger
      value={value}
      className="rounded-none border-b-2 border-transparent bg-transparent px-0 py-4 text-sm text-ink/50 shadow-none transition-colors hover:text-ink data-[state=active]:border-coral data-[state=active]:bg-transparent data-[state=active]:text-ink data-[state=active]:shadow-none flex items-center gap-2"
    >
      <span className="font-mono text-xs">{num}</span> {label}
    </TabsTrigger>
  );
}
