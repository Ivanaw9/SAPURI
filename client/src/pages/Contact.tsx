import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Users,
  Headphones,
  FileText,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t, language } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      title: language === 'id' ? "Alamat Kantor" : "Office Address",
      details: [
        "Grand Puri Niaga",
        "Jalan Puri Kencana Blok K6 no 2R-2T",
        "Kembangan Selatan, Kembangan",
        "Jakarta Barat 11610, Indonesia",
      ],
    },
    {
      icon: Phone,
      title: language === 'id' ? "Telepon" : "Phone",
      details: ["+62 21 1234 5678", "+62 21 1234 5679"],
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["+62 812 3456 7890"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@sapuri.co.id", "sales@sapuri.co.id"],
    },
    {
      icon: Clock,
      title: language === 'id' ? "Jam Operasional" : "Operating Hours",
      details: language === 'id' 
        ? ["Senin - Jumat: 08:00 - 17:00", "Sabtu: 08:00 - 12:00", "Minggu: Tutup"]
        : ["Monday - Friday: 08:00 - 17:00", "Saturday: 08:00 - 12:00", "Sunday: Closed"],
    },
  ];

  const departments = [
    {
      icon: Users,
      title: "Sales & Marketing",
      description: language === 'id' ? "Konsultasi produk dan penawaran harga" : "Product consultation and pricing",
      contact: "sales@sapuri.co.id",
      phone: "+62 812 3456 7890",
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: language === 'id' ? "Bantuan teknis dan perawatan mesin" : "Technical assistance and machine maintenance",
      contact: "support@sapuri.co.id",
      phone: "+62 812 3456 7891",
    },
    {
      icon: FileText,
      title: "Customer Service",
      description: language === 'id' ? "Informasi umum dan layanan pelanggan" : "General information and customer service",
      contact: "info@sapuri.co.id",
      phone: "+62 21 1234 5678",
    },
  ];

  const handleWhatsAppClick = () => {
    const phone = "6281234567890";
    const message = language === 'id' 
      ? "Halo, saya ingin bertanya tentang produk SAPURI." 
      : "Hello, I would like to inquire about SAPURI products.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleEmailClick = (email: string) => {
    window.open(`mailto:${email}`, '_blank');
  };

  const handlePhoneClick = (phone: string) => {
    window.open(`tel:${phone.replace(/\s/g, '')}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" data-testid="text-contact-title">
                {language === 'id' ? 'Hubungi Kami' : 'Contact Us'}
              </h1>
              <p className="text-lg sm:text-xl leading-relaxed" data-testid="text-contact-subtitle">
                {language === 'id' 
                  ? 'Tim profesional kami siap membantu kebutuhan bisnis Anda. Hubungi kami untuk konsultasi produk, penawaran harga, atau bantuan teknis.'
                  : 'Our professional team is ready to assist your business needs. Contact us for product consultation, pricing, or technical support.'}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="text-center hover-elevate" data-testid={`contact-info-${index}`}>
                    <CardContent className="p-4 sm:p-6">
                      <div className="bg-primary/10 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-foreground mb-3">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-sm sm:text-base text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Departments */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {departments.map((dept, index) => {
                const IconComponent = dept.icon;
                return (
                  <Card key={index} className="hover-elevate" data-testid={`department-${index}`}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 rounded-lg p-2">
                          <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                        </div>
                        <CardTitle className="text-base sm:text-lg">{dept.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm sm:text-base text-muted-foreground mb-4">
                        {dept.description}
                      </p>
                      <div className="space-y-2 text-sm">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start p-0 h-auto hover:bg-transparent"
                          onClick={() => handleEmailClick(dept.contact)}
                        >
                          <Mail className="h-4 w-4 mr-2" />
                          <span className="text-primary hover:underline">{dept.contact}</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start p-0 h-auto hover:bg-transparent"
                          onClick={() => handlePhoneClick(dept.phone)}
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          <span className="text-primary hover:underline">{dept.phone}</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Map & Quick Contact */}
        <section className="py-12 sm:py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Map */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">
                    {language === 'id' ? 'Lokasi Kami' : 'Our Location'}
                  </CardTitle>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {language === 'id' 
                      ? 'Kunjungi showroom kami untuk melihat langsung koleksi mesin printing terbaru.'
                      : 'Visit our showroom to see the latest printing machine collection in person.'}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video sm:aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground p-4">
                      <MapPin className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-4" />
                      <p className="font-medium">Grand Puri Niaga</p>
                      <p className="text-sm mt-2">Jl. Puri Kencana Blok K6 no 2R-2T</p>
                      <p className="text-sm">Jakarta Barat, Indonesia</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => window.open('https://maps.google.com/?q=Grand+Puri+Niaga+Jakarta', '_blank')}
                      data-testid="button-directions"
                    >
                      <MapPin className="mr-2 h-4 w-4" />
                      {language === 'id' ? 'Buka di Google Maps' : 'Open in Google Maps'}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">
                    {language === 'id' ? 'Hubungi Langsung' : 'Direct Contact'}
                  </CardTitle>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {language === 'id' 
                      ? 'Cara tercepat untuk menghubungi tim kami.'
                      : 'The fastest way to reach our team.'}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    size="lg"
                    onClick={handleWhatsAppClick}
                    data-testid="button-whatsapp-contact"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    {language === 'id' ? 'Chat via WhatsApp' : 'Chat via WhatsApp'}
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full"
                    size="lg"
                    onClick={() => handleEmailClick('info@sapuri.co.id')}
                    data-testid="button-email-contact"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    {language === 'id' ? 'Kirim Email' : 'Send Email'}
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full"
                    size="lg"
                    onClick={() => handlePhoneClick('+62 21 1234 5678')}
                    data-testid="button-phone-contact"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    {language === 'id' ? 'Telepon Sekarang' : 'Call Now'}
                  </Button>

                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground text-center">
                      {language === 'id' 
                        ? 'Kami akan merespons dalam waktu 1x24 jam kerja.'
                        : 'We will respond within 1x24 business hours.'}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}