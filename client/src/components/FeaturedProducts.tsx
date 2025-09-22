import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Star, Zap, Clock } from "lucide-react";

export default function FeaturedProducts() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // todo: remove mock functionality - replace with real data
  const featuredProducts = [
    {
      id: "starwin-3200",
      name: "STARWIN Large Format Printer 3200",
      category: "Digital Printing",
      price: "Rp 250.000.000",
      image: "/api/placeholder/400/300",
      specs: ["80 m²/jam", "Konica Minolta Head", "Eco Solvent"],
      featured: true,
      rating: 4.8,
      badge: "Best Seller",
    },
    {
      id: "falcon-m-series",
      name: "Falcon M-Series Automatic Press",
      category: "Screen Printing", 
      price: "Rp 180.000.000",
      image: "/api/placeholder/400/300",
      specs: ["900-1000 pcs/jam", "Servo Driven", "Multi Shift"],
      featured: true,
      rating: 4.9,
      badge: "Premium",
    },
    {
      id: "glazing-line-2000",
      name: "Glazing Line Industrial 2000",
      category: "Ceramic",
      price: "Rp 500.000.000", 
      image: "/api/placeholder/400/300",
      specs: ["Continuous Process", "High Temperature", "Auto Control"],
      featured: true,
      rating: 4.7,
      badge: "Industrial",
    },
    {
      id: "sublimation-printer",
      name: "Sublimation Printer Pro 1800",
      category: "Digital Printing",
      price: "Rp 120.000.000",
      image: "/api/placeholder/400/300", 
      specs: ["1800mm Width", "High Resolution", "Fast Drying"],
      featured: true,
      rating: 4.6,
      badge: "New",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(featuredProducts.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(featuredProducts.length / 3)) % Math.ceil(featuredProducts.length / 3));
  };

  const getVisibleProducts = () => {
    const start = currentSlide * 3;
    return featuredProducts.slice(start, start + 3);
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-featured-title">
              Produk Unggulan
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-featured-description">
              Mesin dan peralatan terbaik dengan teknologi terdepan untuk industri Anda
            </p>
          </div>
          
          <div className="hidden md:flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              data-testid="button-carousel-prev"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              data-testid="button-carousel-next"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getVisibleProducts().map((product) => (
            <Card key={product.id} className="group hover-elevate cursor-pointer overflow-hidden" data-testid={`card-product-${product.id}`}>
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-sapuri-orange text-white">
                    {product.badge}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs">
                    {product.category}
                  </Badge>
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2" data-testid={`text-product-name-${product.id}`}>
                  {product.name}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.specs.map((spec, index) => (
                    <div key={index} className="flex items-center gap-1 text-sm text-muted-foreground">
                      {index === 0 && <Zap className="h-3 w-3" />}
                      {index === 1 && <Star className="h-3 w-3" />}
                      {index === 2 && <Clock className="h-3 w-3" />}
                      {spec}
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-xl font-bold text-primary" data-testid={`text-product-price-${product.id}`}>
                    {product.price}
                  </div>
                  <Button size="sm" data-testid={`button-product-quote-${product.id}`}>
                    Minta Penawaran
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex justify-center gap-2 mt-8 md:hidden">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            data-testid="button-mobile-carousel-prev"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            data-testid="button-mobile-carousel-next"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: Math.ceil(featuredProducts.length / 3) }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? "bg-primary" : "bg-muted-foreground/30"
              }`}
              onClick={() => setCurrentSlide(index)}
              data-testid={`button-carousel-dot-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}