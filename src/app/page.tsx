import InitiativesSection from "@/components/ui/LandingPage/sections/initiatives";
import NewsSection from "@/components/ui/LandingPage/sections/news";
import LayoutLanding from "@/layout/LandingLayout";
import { Separator } from "@/components/shadcn/separator";
import SocialSection from "@/components/ui/LandingPage/sections/social";
import PartnersSection from "@/components/ui/LandingPage/sections/partners";
import ContactSection from "@/components/ui/LandingPage/sections/contact";

export default function Home() {
  return (
    <LayoutLanding>
      <InitiativesSection />
      <div>
        <div className="grid grid-cols-12 gap-[24px] md:gap-[48px]">
          <NewsSection />
          <SocialSection />
        </div>
        <Separator className="bg-green-700 my-[45px]" />
      </div>
      <PartnersSection />
      <ContactSection />
    </LayoutLanding>
  );
}
