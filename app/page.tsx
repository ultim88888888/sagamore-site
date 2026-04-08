import { HeroSection } from "@/components/sections/Hero";
import { TrustMetrics } from "@/components/sections/TrustMetrics";
import { ValueProp } from "@/components/sections/ValueProp";
import { ServiceCategories } from "@/components/sections/ServiceCategories";
import { Process } from "@/components/sections/Process";
import { Qualifications } from "@/components/sections/Qualifications";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustMetrics />
      <ValueProp />
      <ServiceCategories />
      <Process />
      <Qualifications />
      <CtaBanner />
    </>
  );
}
