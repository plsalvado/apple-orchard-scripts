import { Hero } from "@/components/Hero";
import { InfoCards } from "@/components/InfoCards";
import { MapSection } from "@/components/MapSection";
import { SocialShare } from "@/components/SocialShare";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Track page view with Google Analytics
    if ((window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_path: window.location.pathname,
      });
    }

    // Track page view with Facebook Pixel
    if ((window as any).fbq) {
      (window as any).fbq('track', 'PageView');
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <InfoCards />
      <MapSection />
      <SocialShare />
      <Footer />
    </main>
  );
};

export default Index;
