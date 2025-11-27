import { useEffect, useRef } from "react";

declare global {
  interface Window {
    L: any;
  }
}

export const MapSection = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Wait for Leaflet to be loaded
    const initMap = () => {
      if (window.L && mapRef.current && !mapInstanceRef.current) {
        // Initialize map centered on a sample location
        const map = window.L.map(mapRef.current).setView([42.3601, -71.0589], 13);

        // Add OpenStreetMap tiles
        window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Add a marker
        const marker = window.L.marker([42.3601, -71.0589]).addTo(map);
        marker.bindPopup('<b>Sunny Acres Apple Orchard</b><br>Come visit us!').openPopup();

        mapInstanceRef.current = map;
      }
    };

    // Check if Leaflet is already loaded
    if (window.L) {
      initMap();
    } else {
      // Wait for Leaflet to load
      const checkLeaflet = setInterval(() => {
        if (window.L) {
          clearInterval(checkLeaflet);
          initMap();
        }
      }, 100);

      return () => clearInterval(checkLeaflet);
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section className="py-16 px-6 bg-accent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 font-serif text-foreground">
          Find Us
        </h2>
        <p className="text-center text-muted-foreground mb-8 text-lg">
          123 Orchard Lane, Farmington, MA 01234
        </p>
        <div 
          ref={mapRef}
          className="w-full h-96 rounded-lg shadow-lg border border-border"
        />
        <p className="text-center text-sm text-muted-foreground mt-4">
          Map powered by OpenStreetMap & Leaflet
        </p>
      </div>
    </section>
  );
};
