export type Category = {
  name: string;
  lead: string;
  slug: string;
  gen: 1 | 2 | 3;
  brand: "O" | "X";
  desc: string;
  img: string;
};

export const categories: Category[] = [
  {
    name: "숏폼 · 릴스",
    lead: "박지원",
    slug: "shorts",
    gen: 1,
    brand: "O",
    desc: "릴스·틱톡·쇼츠 3축 운영",
    img: "https://picsum.photos/seed/ce-shorts/800/600",
  },
  {
    name: "패션 인플루언서",
    lead: "이서연",
    slug: "fashion",
    gen: 1,
    brand: "O",
    desc: "스타일링 화보·룩북·데일리",
    img: "https://picsum.photos/seed/ce-fashion/800/600",
  },
  {
    name: "운동 · 홈트",
    lead: "김태오",
    slug: "fitness",
    gen: 1,
    brand: "O",
    desc: "홈트 루틴·챌린지·식단",
    img: "https://picsum.photos/seed/ce-fitness/800/600",
  },
  {
    name: "사진 · 필름",
    lead: "정민서",
    slug: "photo",
    gen: 2,
    brand: "X",
    desc: "스마트폰·필름·야경 특화",
    img: "https://picsum.photos/seed/ce-photo/800/600",
  },
  {
    name: "요리 · 홈쿡",
    lead: "한유진",
    slug: "cook",
    gen: 2,
    brand: "O",
    desc: "자취 요리·베이킹·간편식",
    img: "https://picsum.photos/seed/ce-cook/800/600",
  },
  {
    name: "AI 크리에이터",
    lead: "조현우",
    slug: "ai",
    gen: 3,
    brand: "X",
    desc: "AI 활용 콘텐츠·자동화",
    img: "https://picsum.photos/seed/ce-ai/800/600",
  },
  {
    name: "뷰티 · 코스메틱",
    lead: "문세라",
    slug: "beauty",
    gen: 3,
    brand: "O",
    desc: "메이크업·스킨케어·리뷰",
    img: "https://picsum.photos/seed/ce-beauty/800/600",
  },
  {
    name: "펫 · 반려동물",
    lead: "오다현",
    slug: "pet",
    gen: 3,
    brand: "X",
    desc: "반려동물 브이로그·훈련",
    img: "https://picsum.photos/seed/ce-pet/800/600",
  },
];

export function findCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
