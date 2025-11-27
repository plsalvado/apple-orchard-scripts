import { useEffect } from "react";

export const SocialShare = () => {
  useEffect(() => {
    // Reinitialize AddThis when component mounts
    if ((window as any).addthis) {
      (window as any).addthis.layers.refresh();
    }
  }, []);

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 font-serif text-foreground">
          Share Your Experience
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Had a great time at Sunny Acres? Share your photos and tag us on social media!
        </p>
        
        {/* AddThis Social Sharing Buttons */}
        <div className="addthis_inline_share_toolbox"></div>
        
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a 
            href="https://twitter.com/share?url=https://example.com&text=Just%20visited%20Sunny%20Acres%20Apple%20Orchard!" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#1DA1F2] text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            Share on Twitter
          </a>
          <a 
            href="https://www.facebook.com/sharer/sharer.php?u=https://example.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#4267B2] text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            Share on Facebook
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            Follow us: <span className="text-primary font-semibold">@SunnyAcresOrchard</span>
          </p>
        </div>
      </div>
    </section>
  );
};
