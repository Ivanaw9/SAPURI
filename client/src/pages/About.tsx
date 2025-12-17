import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Award, 
  Globe, 
  CheckCircle, 
  Target, 
  Heart, 
  Lightbulb,
  TrendingUp 
} from "lucide-react";

export default function About() {
  const milestones = [
    { year: "2009", title: "Pendirian Perusahaan", description: "PT. Sumber Alam Putera Lestari didirikan dengan fokus distribusi mesin printing" },
    { year: "2012", title: "Partnership STARWIN", description: "Menjadi distributor resmi mesin STARWIN untuk Indonesia" },
    { year: "2015", title: "Ekspansi Ceramic Division", description: "Membuka divisi peralatan keramik industri" },
    { year: "2018", title: "Sertifikasi ISO", description: "Meraih sertifikasi ISO 9001:2015 untuk sistem manajemen mutu" },
    { year: "2021", title: "Digital Transformation", description: "Launching platform digital dan layanan online" },
    { year: "2024", title: "Market Leader", description: "Menjadi distributor terdepan dengan 1000+ klien" },
  ];

  const values = [
    {
      icon: Target,
      title: "Profesional",
      description: "Berkomitmen memberikan produk dan layanan berkualitas tinggi dengan standar internasional."
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Mengutamakan kepuasan pelanggan dengan pelayanan prima dan solusi terbaik."
    },
    {
      icon: Lightbulb,
      title: "Inovasi",
      description: "Selalu menghadirkan teknologi terdepan untuk kemajuan industri Indonesia."
    },
    {
      icon: CheckCircle,
      title: "Integritas",
      description: "Menjunjung tinggi kejujuran dan transparansi dalam setiap aspek bisnis."
    },
  ];

  const stats = [
    { number: "15+", label: "Tahun Pengalaman", icon: Award },
    { number: "1000+", label: "Klien Puas", icon: Users },
    { number: "500+", label: "Produk Berkualitas", icon: Globe },
    { number: "50+", label: "Kota Terjangkau", icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="text-about-title">
                Tentang SAPURI GROUP
              </h1>
              <p className="text-xl leading-relaxed mb-8" data-testid="text-about-subtitle">
                PT. Sumber Alam Putera Lestari telah menjadi mitra terpercaya dalam menyediakan 
                solusi lengkap mesin printing dan peralatan industri untuk kemajuan bisnis Indonesia.
              </p>
              <Badge variant="secondary" className="bg-sapuri-orange text-white px-4 py-2">
                Established 2009
              </Badge>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center" data-testid={`stat-${index}`}>
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6" data-testid="text-story-title">
                  Cerita Kami
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Berawal dari visi untuk memajukan industri printing Indonesia, SAPURI GROUP didirikan 
                    pada tahun 2009 dengan komitmen menyediakan mesin dan peralatan berkualitas tinggi.
                  </p>
                  <p>
                    Selama lebih dari 15 tahun, kami telah berkembang menjadi distributor terpercaya 
                    dengan tiga divisi utama: Screen Printing, Digital Printing, dan Ceramic Division.
                  </p>
                  <p>
                    Kepercayaan lebih dari 1000 klien di seluruh Indonesia menjadi motivasi kami untuk 
                    terus berinovasi dan memberikan yang terbaik.
                  </p>
                </div>
                <Button className="mt-6" data-testid="button-contact-story">
                  Hubungi Kami
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/api/placeholder/600/400"
                  alt="SAPURI GROUP Office"
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-12" data-testid="text-timeline-title">
              Perjalanan Kami
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-6" data-testid={`milestone-${index}`}>
                    <div className="flex flex-col items-center">
                      <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">
                        {milestone.year}
                      </div>
                      {index < milestones.length - 1 && (
                        <div className="w-0.5 h-16 bg-border mt-4" />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-12" data-testid="text-values-title">
              Nilai-Nilai Kami
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="text-center hover-elevate" data-testid={`value-${index}`}>
                    <CardContent className="p-6">
                      <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="text-cta-title">
              Mari Berkembang Bersama
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan klien yang telah mempercayai SAPURI GROUP 
              sebagai partner bisnis mereka.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" data-testid="button-cta-products">
                Lihat Produk Kami
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" data-testid="button-cta-contact">
                Hubungi Kami
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}