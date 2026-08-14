"use client";

import { useState } from "react";
import { categories, type Category } from "@/lib/categories";
import { CategoryModal } from "./category-modal";

export function Categories() {
  const [selected, setSelected] = useState<Category | null>(null);

  return (
    <>
      <section id="categories" className="border-b border-line">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10 py-24 lg:py-32">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div>
              <div className="text-xs tracking-widest uppercase text-coral mb-4">
                3기 카테고리 · 8개
              </div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight">
                지원할 카테고리를 고르세요.
              </h2>
              <p className="mt-4 text-ink/60 max-w-2xl">
                브랜딩 O/X에 따라 CE 관여 깊이가 다릅니다. 카드를 눌러 총괄과 커리큘럼을 확인하세요.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-coral-soft text-coral">
                ● 3기 신설
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 py-1 border border-line text-ink/60">
                ● 2기부터
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 py-1 border border-line text-ink/60">
                ● 1기부터
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
            {categories.map((c) => (
              <button
                key={c.slug}
                onClick={() => setSelected(c)}
                className="text-left bg-paper p-6 hover:bg-white transition-colors group flex flex-col"
              >
                <div className="aspect-[4/3] mb-5 relative overflow-hidden border border-line/60 bg-neutral-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.img}
                    alt={c.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-[10px] tracking-widest uppercase text-paper/85">
                    {c.slug}
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  {c.gen === 3 ? (
                    <span className="text-[10px] tracking-widest uppercase px-1.5 py-0.5 bg-coral-soft text-coral font-medium">
                      ● 3기 신설
                    </span>
                  ) : (
                    <span className="text-[10px] tracking-widest uppercase px-1.5 py-0.5 border border-line text-ink/50">
                      {c.gen}기부터
                    </span>
                  )}
                  <span className="text-[10px] tracking-widest uppercase px-1.5 py-0.5 border border-line text-ink/50">
                    브랜딩 {c.brand}
                  </span>
                </div>

                <div className="font-serif text-xl group-hover:text-coral transition-colors">
                  {c.name}
                </div>
                <div className="mt-1 text-sm text-ink/60">총괄 {c.lead}</div>
                <div className="mt-3 text-sm text-ink/70 flex-1">{c.desc}</div>
                <div className="mt-5 text-xs text-coral">상세 보기 →</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <CategoryModal category={selected} onClose={() => setSelected(null)} />
    </>
  );
}
