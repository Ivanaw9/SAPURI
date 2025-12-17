import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ArticlesPreview() {
  const { t } = useLanguage();
  
  // todo: remove mock functionality - replace with real data
  const articles = [
    {
      id: "mesin-press-kaos-guide",
      title: "Panduan Lengkap Memilih Mesin Press Kaos untuk UMKM",
      excerpt: "Tips memilih mesin press kaos yang tepat untuk bisnis sablon Anda. Mulai dari kapasitas produksi hingga budget yang sesuai.",
      author: "Agus Setiawan",
      publishedAt: "2024-01-15",
      readTime: "5 menit",
      category: "Screen Printing",
      image: "/api/placeholder/400/250",
      tags: ["Mesin Press", "UMKM", "Sablon"],
    },
    {
      id: "perawatan-mesin-digital-printing",
      title: "Cara Merawat Mesin Digital Printing agar Awet dan Optimal",
      excerpt: "Panduan perawatan rutin untuk mesin digital printing STARWIN. Mulai dari cleaning printhead hingga maintenance berkala.",
      author: "Sari Wijaya",
      publishedAt: "2024-01-10",
      readTime: "7 menit",
      category: "Digital Printing",
      image: "/api/placeholder/400/250",
      tags: ["Maintenance", "Digital Printing", "STARWIN"],
    },
    {
      id: "tren-industri-keramik-2024",
      title: "Tren Industri Keramik 2024: Teknologi dan Peluang Bisnis",
      excerpt: "Perkembangan terbaru dalam industri keramik Indonesia. Teknologi glazing modern dan peluang ekspor yang menjanjikan.",
      author: "Dr. Rahman Ceramics",
      publishedAt: "2024-01-08",
      readTime: "8 menit", 
      category: "Ceramic",
      image: "/api/placeholder/400/250",
      tags: ["Industri Keramik", "Teknologi", "Bisnis"],
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Screen Printing": return "bg-blue-100 text-blue-800";
      case "Digital Printing": return "bg-green-100 text-green-800";
      case "Ceramic": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-articles-title">
              {t('articles.title')}
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-articles-description">
              {t('articles.subtitle')}
            </p>
          </div>
          
          <Link href="/articles">
            <Button variant="outline" data-testid="button-articles-all">
              {t('articles.viewAll')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="group hover-elevate cursor-pointer overflow-hidden" data-testid={`card-article-${article.id}`}>
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(article.category)}>
                    {article.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(article.publishedAt).toLocaleDateString('id-ID', { 
                      day: 'numeric', 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {article.readTime.replace('menit', t('articles.readTime'))}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2" data-testid={`text-article-title-${article.id}`}>
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3" data-testid={`text-article-excerpt-${article.id}`}>
                  {article.excerpt}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    {article.author}
                  </div>
                  <Link href={`/articles/${article.id}`}>
                    <Button variant="ghost" size="sm" className="group/btn" data-testid={`button-article-read-${article.id}`}>
                      {t('articles.readMore')}
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}