import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ApplyProvider } from "@/lib/apply-context";
import { ApplyModal } from "@/components/apply-modal";

const instrumentSerif = localFont({
  src: [
    { path: "../public/fonts/instrument-serif-400.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/instrument-serif-400i.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-serif-en",
  display: "swap",
});

const gowunBatang = localFont({
  src: "../public/fonts/gowun-batang-400.woff2",
  variable: "--font-serif-kr",
  weight: "400",
  display: "swap",
});

const pretendard = localFont({
  src: "../public/fonts/pretendard-variable.woff2",
  variable: "--font-sans-kr",
  weight: "45 920",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CE · 크리에이터 이코노미 3기 모집",
  description:
    "크리에이터가 되는 환경을 팝니다. 사옥·촬영·팀·업로드. 3~6개월 안에 협찬을 목표로 함께 굴러가는 크리에이터 이코노미.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${instrumentSerif.variable} ${gowunBatang.variable} ${pretendard.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <ApplyProvider>
          {children}
          <ApplyModal />
        </ApplyProvider>
      </body>
    </html>
  );
}
