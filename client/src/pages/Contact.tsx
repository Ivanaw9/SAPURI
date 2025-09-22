import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Send,
  Users,
  Headphones,
  FileText 
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Email tidak valid"),
  phone: z.string().min(10, "Nomor telepon minimal 10 digit"),
  subject: z.string().min(5, "Subjek minimal 5 karakter"),
  message: z.string().min(10, "Pesan minimal 10 karakter"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // todo: remove mock functionality - integrate with real API
      console.log("Contact form submitted:", data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Pesan Berhasil Dikirim!",
        description: "Terima kasih telah menghubungi kami. Tim kami akan merespons dalam 1x24 jam.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Gagal Mengirim",
        description: "Terjadi kesalahan. Silakan coba lagi atau hubungi kami langsung.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat Kantor",
      details: [
        "Jl. Industri Raya No. 123",
        "Kawasan Industri Pulogadung",
        "Jakarta Timur 13260, Indonesia"
      ],
    },
    {
      icon: Phone,
      title: "Telepon",
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
      title: "Jam Operasional",
      details: [
        "Senin - Jumat: 08:00 - 17:00",
        "Sabtu: 08:00 - 12:00",
        "Minggu: Tutup"
      ],
    },
  ];

  const departments = [
    {
      icon: Users,
      title: "Sales & Marketing",
      description: "Konsultasi produk dan penawaran harga",
      contact: "sales@sapuri.co.id",
      phone: "+62 812 3456 7890",
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Bantuan teknis dan perawatan mesin",
      contact: "support@sapuri.co.id", 
      phone: "+62 812 3456 7891",
    },
    {
      icon: FileText,
      title: "Customer Service",
      description: "Informasi umum dan layanan pelanggan",
      contact: "info@sapuri.co.id",
      phone: "+62 21 1234 5678",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="text-contact-title">
                Hubungi Kami
              </h1>
              <p className="text-xl leading-relaxed" data-testid="text-contact-subtitle">
                Tim profesional kami siap membantu kebutuhan bisnis Anda. 
                Hubungi kami untuk konsultasi produk, penawaran harga, atau bantuan teknis.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="text-center hover-elevate" data-testid={`contact-info-${index}`}>
                    <CardContent className="p-6">
                      <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-3">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {departments.map((dept, index) => {
                const IconComponent = dept.icon;
                return (
                  <Card key={index} className="hover-elevate" data-testid={`department-${index}`}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 rounded-lg p-2">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{dept.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{dept.description}</p>
                      <div className="space-y-2 text-sm">
                        <p className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          {dept.contact}
                        </p>
                        <p className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          {dept.phone}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl" data-testid="text-form-title">
                    Kirim Pesan
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Isi formulir di bawah ini dan kami akan merespons segera.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nama Lengkap *</Label>
                        <Input
                          id="name"
                          {...form.register("name")}
                          placeholder="Nama lengkap Anda"
                          data-testid="input-contact-name"
                        />
                        {form.formState.errors.name && (
                          <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Nomor Telepon *</Label>
                        <Input
                          id="phone"
                          {...form.register("phone")}
                          placeholder="08xxxxxxxxxx"
                          data-testid="input-contact-phone"
                        />
                        {form.formState.errors.phone && (
                          <p className="text-sm text-destructive">{form.formState.errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...form.register("email")}
                        placeholder="email@example.com"
                        data-testid="input-contact-email"
                      />
                      {form.formState.errors.email && (
                        <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subjek *</Label>
                      <Input
                        id="subject"
                        {...form.register("subject")}
                        placeholder="Subjek pesan Anda"
                        data-testid="input-contact-subject"
                      />
                      {form.formState.errors.subject && (
                        <p className="text-sm text-destructive">{form.formState.errors.subject.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Pesan *</Label>
                      <Textarea
                        id="message"
                        {...form.register("message")}
                        placeholder="Tulis pesan Anda di sini..."
                        className="min-h-[120px]"
                        data-testid="textarea-contact-message"
                      />
                      {form.formState.errors.message && (
                        <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full"
                      data-testid="button-contact-submit"
                    >
                      {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Map */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Lokasi Kami</CardTitle>
                  <p className="text-muted-foreground">
                    Kunjungi showroom kami untuk melihat langsung koleksi mesin printing terbaru.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                    {/* todo: remove mock functionality - integrate with real map */}
                    <div className="text-center text-muted-foreground">
                      <MapPin className="h-12 w-12 mx-auto mb-4" />
                      <p>Google Maps akan dimuat di sini</p>
                      <p className="text-sm mt-2">Jakarta Timur, Indonesia</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button variant="outline" className="w-full" data-testid="button-directions">
                      <MapPin className="mr-2 h-4 w-4" />
                      Dapatkan Petunjuk Arah
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="text-cta-emergency">
              Butuh Bantuan Segera?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Tim support kami siap membantu 24/7 untuk kebutuhan darurat dan support teknis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" data-testid="button-emergency-call">
                <Phone className="mr-2 h-5 w-5" />
                Telepon Sekarang
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" data-testid="button-emergency-whatsapp">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat WhatsApp
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}