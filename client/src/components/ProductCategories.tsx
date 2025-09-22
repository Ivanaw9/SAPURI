import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Printer, Flame } from "lucide-react";
import { Link } from "wouter";
import screenPrintingImage from "@assets/generated_images/Screen_printing_machine_operation_1c048708.png";
import ceramicImage from "@assets/generated_images/Ceramic_manufacturing_equipment_5aad0aad.png";

export default function ProductCategories() {
  const categories = [
    {
      id: "screen-printing",
      title: "Screen Printing Division",
      description: "Kain screen, obat afdruk, mesin sablon otomatis dengan kapasitas produksi hingga 1000 garment/jam",
      icon: Monitor,
      image: screenPrintingImage,
      link: "/products/screen-printing",
      stats: "7 Kategori Produk",
      color: "bg-blue-500",
    },
    {
      id: "digital-printing", 
      title: "Digital Printing Division",
      description: "Mesin STARWIN dengan teknologi Konica Minolta, eco solvent, sublimasi untuk produksi 80 m²/jam",
      icon: Printer,
      image: "/api/placeholder/400/300",
      link: "/products/digital-printing", 
      stats: "4 Jenis Mesin",
      color: "bg-green-500",
    },
    {
      id: "ceramic",
      title: "Ceramic Division", 
      description: "Glazing line, kiln, silicon cylinder untuk produksi keramik industri dengan teknologi modern",
      icon: Flame,
      image: ceramicImage,
      link: "/products/ceramic",
      stats: "4 Peralatan Utama",
      color: "bg-orange-500",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-categories-title">
            Divisi Produk Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-categories-description">
            Tiga divisi utama yang menyediakan solusi lengkap untuk kebutuhan industri printing dan manufaktur
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.id} className="group hover-elevate cursor-pointer overflow-hidden" data-testid={`card-category-${category.id}`}>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className={`absolute top-4 left-4 p-2 rounded-lg ${category.color}`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium">{category.stats}</div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3" data-testid={`text-category-title-${category.id}`}>
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed" data-testid={`text-category-description-${category.id}`}>
                    {category.description}
                  </p>
                  <Link href={category.link}>
                    <Button variant="ghost" className="group/btn p-0 h-auto" data-testid={`button-category-${category.id}`}>
                      Lihat Produk
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}