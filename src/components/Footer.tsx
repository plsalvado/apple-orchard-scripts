export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sunny Acres Orchard</h3>
            <p className="text-secondary-foreground/80">
              Family-owned and operated since 1985. 
              Growing the finest apples with love and care.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@sunnyacres.com</li>
              <li>123 Orchard Lane</li>
              <li>Farmington, MA 01234</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>Monday - Sunday</li>
              <li>9:00 AM - 6:00 PM</li>
              <li>September - November</li>
              <li>Closed major holidays</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-secondary-foreground/20 text-center text-secondary-foreground/60">
          <p>&copy; 2024 Sunny Acres Apple Orchard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
