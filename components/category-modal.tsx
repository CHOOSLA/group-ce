"use client";

import { type Category } from "@/lib/categories";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useApply } from "@/lib/apply-context";

export function CategoryModal({
  category,
  onClose,
}: {
  category: Category | null;
  onClose: () => void;
}) {
  const { openApply } = useApply();

  return (
    <Dialog open={category !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl w-full max-h-[90vh] overflow-y-auto p-0 gap-0 bg-paper">
        {category && (
          <>
            <DialogTitle className="sr-only">{category.name}</DialogTitle>
            <div className="aspect-[16/7] relative overflow-hidden bg-neutral-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={category.img}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent" />
              <div className="absolute inset-0 p-8 flex items-end">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    {category.gen === 3 ? (
                      <span className="text-[10px] tracking-widest uppercase px-2 py-1 bg-coral text-paper font-medium">
                        ● 3기 신설
                      </span>
                    ) : (
                      <span className="text-[10px] tracking-widest uppercase px-2 py-1 bg-paper border border-line text-ink/60">
                        {category.gen}기부터
                      </span>
                    )}
                    <span className="text-[10px] tracking-widest uppercase px-2 py-1 bg-paper border border-line text-ink/60">
                      브랜딩 {category.brand}
                    </span>
                  </div>
                  <div className="font-serif text-4xl text-paper">
                    {category.name}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="text-xs tracking-widest uppercase text-ink/50">
                    카테고리 총괄
                  </div>
                  <div className="mt-2 font-serif text-2xl">{category.lead}</div>
                  <div className="text-sm text-ink/60 mt-1">
                    {category.gen === 3
                      ? "2기 조교 → 3기 총괄로 분화"
                      : `${category.gen}기부터 총괄 · 채널 운영자`}
                  </div>

                  <div className="mt-6 text-xs tracking-widest uppercase text-ink/50">
                    브랜딩 여부
                  </div>
                  <div className="mt-2 text-sm text-ink/80 leading-relaxed">
                    {category.brand === "O"
                      ? "브랜딩 O — CE가 커리큘럼·미션을 직접 짜고 콘텐츠 레퍼런스 분석부터 업로드까지 관여합니다."
                      : "브랜딩 X — 총괄이 커리큘럼을 직접 짜고, CE는 이행 여부와 피드백만 관리합니다."}
                  </div>
                </div>

                <div>
                  <div className="text-xs tracking-widest uppercase text-ink/50">
                    이번 기 커리큘럼 요약
                  </div>
                  <ul className="mt-2 space-y-2 text-sm text-ink/80">
                    <li className="flex gap-2">
                      <span className="text-coral">→</span> 첫 4주 · 채널 셋업 + 첫 3편 업로드
                    </li>
                    <li className="flex gap-2">
                      <span className="text-coral">→</span> 5–8주 · 레퍼런스 분석 + 시리즈 기획
                    </li>
                    <li className="flex gap-2">
                      <span className="text-coral">→</span> 9–16주 · 협찬 획득 사이클 진입
                    </li>
                    <li className="flex gap-2">
                      <span className="text-coral">→</span> 이후 · 채널 출연 + 팀 매칭 검토
                    </li>
                  </ul>

                  <div className="mt-6 text-xs tracking-widest uppercase text-ink/50">
                    모집 인원
                  </div>
                  <div className="mt-2 font-serif text-xl">
                    3기 · <span className="text-coral">12명</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    openApply(category.slug);
                    onClose();
                  }}
                  className="bg-coral text-paper px-6 py-3 hover:bg-ink transition-colors"
                >
                  이 카테고리로 지원하기 →
                </button>
                <button
                  onClick={onClose}
                  className="border border-ink/25 px-6 py-3 hover:border-ink transition-colors"
                >
                  닫기
                </button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
