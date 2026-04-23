import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { PromoCarousel } from "@/components/promo-carousel";
import { OurStory } from "@/components/our-story";
import { FoodShowcase } from "@/components/food-showcase";
import { MenuSection } from "@/components/menu-section";
import { OurStores } from "@/components/our-stores";
import { AiAssistant } from "@/components/ai-assistant";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PromoCarousel />
        <OurStory />
        <FoodShowcase />
        <MenuSection />
        <OurStores />
        <AiAssistant />
      </main>
      <Footer />
    </>
  );
}
