export type ApplicantStatus =
  | "pending"
  | "review"
  | "interview"
  | "accepted"
  | "rejected";

export type Applicant = {
  id: string;
  name: string;
  cat1: string;
  cat2?: string;
  hours: string;
  oneday: "참석함" | "아직 참석 안 함";
  motive: string;
  followers: string;
  status: ApplicantStatus;
  appliedAt: string;
};

export const initialApplicants: Applicant[] = [
  {
    id: "A001",
    name: "김지수",
    cat1: "shorts",
    cat2: "ai",
    hours: "10~15시간",
    oneday: "참석함",
    motive:
      "숏폼 만드는 게 재미있어서 본격적으로 채널을 키우고 싶습니다. 6개월 안에 협찬받는 것이 목표입니다.",
    followers: "1천 ~ 1만",
    status: "interview",
    appliedAt: "2026-08-12",
  },
  {
    id: "A002",
    name: "박서준",
    cat1: "fashion",
    hours: "15시간 이상",
    oneday: "참석함",
    motive:
      "이미 인스타 팔로워가 8천명 있고, 스타일링 콘텐츠로 확장하고 싶습니다. 브랜딩된 상태에서 시작합니다.",
    followers: "1천 ~ 1만",
    status: "accepted",
    appliedAt: "2026-08-10",
  },
  {
    id: "A003",
    name: "이하은",
    cat1: "fitness",
    hours: "10~15시간",
    oneday: "참석함",
    motive:
      "홈트 크리에이터가 되고 싶습니다. 개인 채널 운영 중이며 CE 환경에서 성장하고 싶습니다.",
    followers: "1천 미만",
    status: "review",
    appliedAt: "2026-08-13",
  },
  {
    id: "A004",
    name: "최민혁",
    cat1: "ai",
    hours: "15시간 이상",
    oneday: "참석함",
    motive:
      "AI 콘텐츠 자동화에 관심이 많습니다. 3기 신설 카테고리라 첫 기수로 참여하고 싶습니다.",
    followers: "없음",
    status: "interview",
    appliedAt: "2026-08-11",
  },
  {
    id: "A005",
    name: "정유진",
    cat1: "beauty",
    cat2: "fashion",
    hours: "10~15시간",
    oneday: "아직 참석 안 함",
    motive:
      "뷰티 크리에이터 지망생입니다. 원데이는 이번 주 주말에 참석 예정입니다.",
    followers: "1천 미만",
    status: "pending",
    appliedAt: "2026-08-13",
  },
  {
    id: "A006",
    name: "한도현",
    cat1: "photo",
    hours: "5~10시간",
    oneday: "아직 참석 안 함",
    motive:
      "필름 사진 관련 콘텐츠를 만들어왔습니다. 브랜딩은 안 되어 있고 커리큘럼을 짜서 왔습니다.",
    followers: "없음",
    status: "rejected",
    appliedAt: "2026-08-09",
  },
  {
    id: "A007",
    name: "오세아",
    cat1: "cook",
    hours: "10~15시간",
    oneday: "참석함",
    motive:
      "베이킹 위주 홈쿡 콘텐츠를 만들고 싶습니다. 2기 사진 카테고리 사례를 보고 지원했습니다.",
    followers: "1천 ~ 1만",
    status: "accepted",
    appliedAt: "2026-08-08",
  },
  {
    id: "A008",
    name: "강태우",
    cat1: "pet",
    cat2: "shorts",
    hours: "15시간 이상",
    oneday: "참석함",
    motive:
      "반려견 두 마리와 함께하는 브이로그를 만들고 싶습니다. 6개월 안에 관련 브랜드 협찬을 목표합니다.",
    followers: "1천 미만",
    status: "review",
    appliedAt: "2026-08-12",
  },
  {
    id: "A009",
    name: "윤나래",
    cat1: "shorts",
    hours: "5~10시간",
    oneday: "참석함",
    motive:
      "숏폼 시대에 크리에이터로 자리잡고 싶습니다. 시간이 부족해도 미션 이행하겠습니다.",
    followers: "없음",
    status: "pending",
    appliedAt: "2026-08-14",
  },
  {
    id: "A010",
    name: "신지호",
    cat1: "ai",
    hours: "10~15시간",
    oneday: "참석함",
    motive:
      "AI 도구를 활용한 콘텐츠 제작에 3년째 관심 갖고 있습니다. 총괄과 함께 배우고 싶습니다.",
    followers: "1만 ~ 10만",
    status: "interview",
    appliedAt: "2026-08-11",
  },
  {
    id: "A011",
    name: "조은채",
    cat1: "beauty",
    hours: "15시간 이상",
    oneday: "참석함",
    motive:
      "메이크업 유튜브를 5만 구독자까지 키운 경험이 있습니다. CE에서 확장 시도합니다.",
    followers: "1만 ~ 10만",
    status: "accepted",
    appliedAt: "2026-08-07",
  },
  {
    id: "A012",
    name: "배지훈",
    cat1: "fitness",
    hours: "10~15시간",
    oneday: "아직 참석 안 함",
    motive:
      "헬스 트레이너 자격증 보유. 콘텐츠 크리에이터로 확장하고 싶습니다.",
    followers: "1천 미만",
    status: "pending",
    appliedAt: "2026-08-14",
  },
  {
    id: "A013",
    name: "임서율",
    cat1: "fashion",
    hours: "15시간 이상",
    oneday: "참석함",
    motive:
      "이미 브랜딩된 상태이며 자체 커리큘럼도 있습니다. CE의 환경만 필요합니다.",
    followers: "10만 이상",
    status: "interview",
    appliedAt: "2026-08-10",
  },
  {
    id: "A014",
    name: "문가온",
    cat1: "cook",
    hours: "5~10시간",
    oneday: "아직 참석 안 함",
    motive:
      "요리 초보이지만 크리에이터가 되고 싶습니다. 시간이 부족한 부분은 CE에서 관리해주시면 감사하겠습니다.",
    followers: "없음",
    status: "rejected",
    appliedAt: "2026-08-11",
  },
  {
    id: "A015",
    name: "고은지",
    cat1: "pet",
    hours: "10~15시간",
    oneday: "참석함",
    motive:
      "고양이 3마리와 함께합니다. 3기 신설 펫 카테고리에 첫 기수로 참여하고 싶습니다.",
    followers: "1천 ~ 1만",
    status: "review",
    appliedAt: "2026-08-13",
  },
];

export const statusLabels: Record<ApplicantStatus, string> = {
  pending: "접수",
  review: "검토중",
  interview: "면접",
  accepted: "합격",
  rejected: "거절",
};

export const statusColors: Record<ApplicantStatus, string> = {
  pending: "bg-neutral-100 text-neutral-700",
  review: "bg-blue-100 text-blue-700",
  interview: "bg-amber-100 text-amber-800",
  accepted: "bg-emerald-100 text-emerald-700",
  rejected: "bg-red-100 text-red-700",
};
