export type FunnelLayer = {
  label: string;
  current: number;
  target: number;
  rate: number;
};

export const funnel: {
  db: FunnelLayer;
  oneday: FunnelLayer;
  subscription: FunnelLayer;
} = {
  db: {
    label: "Layer 01 · DB (일반 단톡방)",
    current: 18420,
    target: 20000,
    rate: 92,
  },
  oneday: {
    label: "Layer 02 · 원데이 클래스 참가자",
    current: 1806,
    target: 2000,
    rate: 90,
  },
  subscription: {
    label: "Layer 03 · 월 구독 (핵심 결제자)",
    current: 202,
    target: 200,
    rate: 101,
  },
};

export const conversions = {
  dbToOneday: { rate: 9.8, target: 10, below: true },
  onedayToSub: { rate: 11.2, target: 10, below: false },
};

export type ChatRoomStage = "db" | "oneday" | "group";

export const chatRooms: {
  name: string;
  stage: ChatRoomStage;
  count: number;
  lastActivity: string;
}[] = [
  { name: "CE · 사진 크리에이터 오픈방", stage: "db", count: 1842, lastActivity: "3분 전" },
  { name: "CE · 뷰티 크리에이터 오픈방", stage: "db", count: 2104, lastActivity: "12분 전" },
  { name: "CE · AI 크리에이터 오픈방", stage: "db", count: 987, lastActivity: "25분 전" },
  { name: "사진 원데이 · 8/23 회차", stage: "oneday", count: 87, lastActivity: "1시간 전" },
  { name: "뷰티 원데이 · 8/30 회차", stage: "oneday", count: 42, lastActivity: "2시간 전" },
  { name: "사진 3기 · 1조", stage: "group", count: 8, lastActivity: "방금" },
  { name: "사진 3기 · 2조", stage: "group", count: 8, lastActivity: "5분 전" },
];

export const stageLabels: Record<ChatRoomStage, { label: string; classes: string }> = {
  db: { label: "일반 DB", classes: "bg-line text-ink" },
  oneday: { label: "원데이", classes: "bg-coral-soft text-coral" },
  group: { label: "조별", classes: "bg-ink text-paper" },
};

export const nextOneday = {
  date: "8/23 (토)",
  focus: "사진 특화",
  reserved: 87,
  capacity: 100,
  paid: 82,
  unpaid: 5,
  noShowExpected: 7,
};

export type TALevel = "L1" | "L2";
export type Branding = "O" | "X";

export type OrgMember = {
  name: string;
  missionRate: number;
  branding: Branding;
};

export type TA = {
  id: string;
  name: string;
  level: TALevel;
  members: OrgMember[];
};

export const orgTree: {
  category: string;
  lead: { name: string; role: string };
  tas: TA[];
} = {
  category: "사진",
  lead: { name: "김소라", role: "카테고리 총괄" },
  tas: [
    {
      id: "ta-1",
      name: "박도윤",
      level: "L2",
      members: [
        { name: "이서준", missionRate: 100, branding: "O" },
        { name: "정하은", missionRate: 75, branding: "X" },
        { name: "최민아", missionRate: 50, branding: "O" },
        { name: "홍지후", missionRate: 25, branding: "X" },
      ],
    },
    {
      id: "ta-2",
      name: "윤채원",
      level: "L1",
      members: [
        { name: "강태오", missionRate: 100, branding: "O" },
        { name: "문시아", missionRate: 100, branding: "O" },
        { name: "노아린", missionRate: 50, branding: "X" },
        { name: "배건우", missionRate: 0, branding: "X" },
      ],
    },
  ],
};

export type Feedback = {
  by: string;
  at: string;
  msg: string;
};

export type MissionMember = {
  name: string;
  ta: string;
  branding: Branding;
  rate: number;
  missionTitle: string;
  feedback: Feedback[];
};

export const missionMembers: MissionMember[] = [
  {
    name: "이서준",
    ta: "박도윤",
    branding: "O",
    rate: 100,
    missionTitle: "카페 인테리어 숏폼 3편",
    feedback: [
      { by: "TA 박도윤", at: "수 · 21:14", msg: "레퍼런스 A/B 중 A가 훨씬 정돈됐어요. 이 톤으로 3편 갑시다." },
      { by: "이서준", at: "수 · 22:02", msg: "네, A로 잡고 목요일 촬영합니다." },
    ],
  },
  {
    name: "정하은",
    ta: "박도윤",
    branding: "X",
    rate: 75,
    missionTitle: "(본인 설계) 주 1회 릴스 업로드",
    feedback: [
      { by: "TA 박도윤", at: "월 · 10:30", msg: "이번 주 3/4 이행. 목요일 편 업로드 링크 남겨주세요." },
    ],
  },
  {
    name: "최민아",
    ta: "박도윤",
    branding: "O",
    rate: 50,
    missionTitle: "뷰티 튜토리얼 롱폼 1편",
    feedback: [
      { by: "TA 박도윤", at: "화 · 14:00", msg: "스크립트 초안 확인. 인트로 15초가 길어요. 3초로 압축 부탁." },
    ],
  },
  {
    name: "홍지후",
    ta: "박도윤",
    branding: "X",
    rate: 25,
    missionTitle: "(본인 설계) 주 2회 브이로그",
    feedback: [
      { by: "TA 박도윤", at: "월 · 09:00", msg: "이번 주 1/2. 이행률 낮음. 오프라인 상담 필요." },
    ],
  },
  {
    name: "강태오",
    ta: "윤채원",
    branding: "O",
    rate: 100,
    missionTitle: "푸드 레시피 숏폼 3편",
    feedback: [
      { by: "TA 윤채원", at: "금 · 18:20", msg: "3편 모두 좋음. 다음 주는 협찬 문의 온 것 중심으로 갑시다." },
    ],
  },
];
