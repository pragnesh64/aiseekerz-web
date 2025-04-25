
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroCard } from "@/components/home/IntroCard";
import { TechStackGrid } from "@/components/home/TechStackGrid";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { MiniServices } from "@/components/home/MiniServices";
import { CallToAction } from "@/components/home/CallToAction";
import { CookieConsent } from "@/components/CookieConsent";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Set page metadata
    document.title = "AISEEKERZ - Digital Alchemist Portfolio";
  }, []);

  return (
    <Layout>
      <HeroSection />
      <IntroCard />
      <TechStackGrid />
      <FeaturedProjects />
      <MiniServices />
      <CallToAction />
      <CookieConsent />
    </Layout>
  );
};

export default Index;
