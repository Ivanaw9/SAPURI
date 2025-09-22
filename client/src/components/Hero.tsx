import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@assets/generated_images/Industrial_printing_equipment_hero_66e655aa.png";

export default function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center bg-gradient-to-r from-background to-muted overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="SAPURI Industrial Printing Equipment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight" data-testid="text-hero-title">
            {t('hero.title').split(' ').map((word, index) => {
              if (word.toLowerCase().includes('printing') || word.toLowerCase().includes('mesin')) {
                return <span key={index} className="text-primary">{word} </span>;
              }
              return word + ' ';
            })}
          </h1>
          
          <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="text-hero-description">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="text-lg px-8 py-6" data-testid="button-hero-products">
              {t('hero.viewProducts')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" data-testid="button-hero-contact">
              {t('hero.contactUs')}
              <Play className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/30">
            <div className="text-center sm:text-left">
              <div className="text-2xl lg:text-3xl font-bold text-primary" data-testid="text-stat-products">500+</div>
              <div className="text-sm text-muted-foreground">{t('hero.stats.products')}</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-2xl lg:text-3xl font-bold text-primary" data-testid="text-stat-clients">1000+</div>
              <div className="text-sm text-muted-foreground">{t('hero.stats.clients')}</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-2xl lg:text-3xl font-bold text-primary" data-testid="text-stat-experience">15+</div>
              <div className="text-sm text-muted-foreground">{t('hero.stats.experience')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-sapuri-orange/20 rounded-full blur-xl animate-pulse hidden lg:block" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse hidden lg:block" />
    </section>
  );
}