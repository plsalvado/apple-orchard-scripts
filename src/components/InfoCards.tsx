import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";
import applesClose from "@/assets/apples-close.jpg";
import basketApples from "@/assets/basket-apples.jpg";

export const InfoCards = () => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 font-serif text-foreground">
          Plan Your Visit
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="overflow-hidden">
            <CardHeader>
              <Calendar className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Season</CardTitle>
              <CardDescription>September - November</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Peak apple season runs from early September through late November. 
                Different varieties ripen at different times!
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardHeader>
              <Clock className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Hours</CardTitle>
              <CardDescription>Daily 9 AM - 6 PM</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Open seven days a week throughout the season. 
                Last entry is at 5:30 PM to ensure you have plenty of picking time.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardHeader>
              <MapPin className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Location</CardTitle>
              <CardDescription>Easy to Find</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Just 30 minutes from downtown. Free parking available. 
                See the map below for directions.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <img 
              src={applesClose} 
              alt="Close-up of fresh red apples on tree branch in autumn orchard"
              className="w-full h-80 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                  Premium Varieties
                </h3>
                <p className="text-primary-foreground/90">
                  Honeycrisp, Gala, Fuji, and more!
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <img 
              src={basketApples} 
              alt="Wooden basket filled with freshly picked red apples at farm"
              className="w-full h-80 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                  Family Friendly
                </h3>
                <p className="text-primary-foreground/90">
                  Perfect for all ages - bring the whole family!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
