import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { WhySection } from "@/components/why-section";
import { Benefits } from "@/components/benefits";
import { Achievement } from "@/components/achievement";
import { Categories } from "@/components/categories";
import { Journey } from "@/components/journey";
import { Process } from "@/components/process";
import { FAQ } from "@/components/faq";
import { FooterCTA } from "@/components/footer-cta";

const D_DAY = 14;

export default function Home() {
  return (
    <>
      <Nav dDay={D_DAY} />
      <Hero dDay={D_DAY} />
      <WhySection />
      <Benefits />
      <Achievement />
      <Categories />
      <Journey />
      <Process />
      <FAQ />
      <FooterCTA dDay={D_DAY} />
    </>
  );
}
