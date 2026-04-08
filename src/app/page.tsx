import { HeroSection } from "@/components/sections/Hero";
import { TrustMetrics } from "@/components/sections/TrustMetrics";
import { Calculator } from "@/components/sections/Calculator";
import { ServiceCategories } from "@/components/sections/ServiceCategories";
import { Process } from "@/components/sections/Process";
import { Qualifications } from "@/components/sections/Qualifications";
import { HomeCTA } from "@/components/sections/HomeCTA";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustMetrics />
      <Calculator />
      <ServiceCategories />
      <Process />
      <Qualifications />
      <HomeCTA />
    </main>
  );
}
