import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-orchard.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-secondary/60" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 font-serif">
          Welcome to Sunny Acres
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-medium">
          Experience the joy of picking fresh, crisp apples in our beautiful orchard
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" variant="default" className="text-lg px-8">
            Plan Your Visit
          </Button>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};
