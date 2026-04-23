import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { PromoCarousel } from "@/components/promo-carousel";
import { OurStory } from "@/components/our-story";
import { FoodShowcase } from "@/components/food-showcase";
import { MenuSection } from "@/components/menu-section";
import { OurStores } from "@/components/our-stores";
import { GuestReviews } from "@/components/guest-reviews";
import { AiAssistant } from "@/components/ai-assistant";
import { OrderButton } from "@/components/order-button";
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
        <GuestReviews />
        <AiAssistant />
      </main>
      <Footer />
      <OrderButton />
    </>
  );
}
