import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Eye, Heart, Share2 } from "lucide-react";
import { Link } from "wouter";
import QuoteForm from "./QuoteForm";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price?: string;
  image: string;
  specs: string[];
  rating?: number;
  isFeatured?: boolean;
  badge?: string;
  slug: string;
}

export default function ProductCard({
  id,
  name,
  category,
  price,
  image,
  specs,
  rating,
  isFeatured,
  badge,
  slug,
}: ProductCardProps) {
  return (
    <Card className="group hover-elevate cursor-pointer overflow-hidden h-full flex flex-col" data-testid={`card-product-${id}`}>
      <div className="relative">
        <Link href={`/products/${slug}`}>
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isFeatured && (
            <Badge variant="secondary" className="bg-sapuri-orange text-white">
              Featured
            </Badge>
          )}
          {badge && (
            <Badge variant="outline" className="bg-white/90 backdrop-blur-sm">
              {badge}
            </Badge>
          )}
        </div>

        {/* Rating */}
        {rating && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
          </div>
        )}

        {/* Action buttons overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex gap-2">
            <Button variant="secondary" size="sm" data-testid={`button-product-view-${id}`}>
              <Eye className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="sm" data-testid={`button-product-favorite-${id}`}>
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="sm" data-testid={`button-product-share-${id}`}>
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <CardContent className="p-4 flex-1 flex flex-col">
        <div className="mb-2">
          <Badge variant="outline" className="text-xs">
            {category}
          </Badge>
        </div>
        
        <Link href={`/products/${slug}`} className="flex-1">
          <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 hover:text-primary transition-colors" data-testid={`text-product-name-${id}`}>
            {name}
          </h3>
        </Link>
        
        <div className="space-y-2 mb-4">
          {specs.slice(0, 3).map((spec, index) => (
            <div key={index} className="text-sm text-muted-foreground flex items-center gap-2">
              <div className="w-1 h-1 bg-primary rounded-full" />
              {spec}
            </div>
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-auto">
          {price ? (
            <div className="text-lg font-bold text-primary" data-testid={`text-product-price-${id}`}>
              {price}
            </div>
          ) : (
            <div className="text-sm text-muted-foreground">
              Hubungi untuk harga
            </div>
          )}
          
          <QuoteForm 
            productName={name}
            trigger={
              <Button size="sm" data-testid={`button-product-quote-${id}`}>
                Quote
              </Button>
            }
          />
        </div>
      </CardContent>
    </Card>
  );
}