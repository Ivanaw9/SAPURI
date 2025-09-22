import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Youtube, 
  Linkedin,
  MessageCircle 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-primary-foreground text-primary px-3 py-2 rounded-md font-bold text-xl">
                SAPURI
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              PT. Sumber Alam Putera Lestari adalah distributor terpercaya untuk mesin printing digital, 
              screen printing, dan peralatan keramik industri di Indonesia.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10" data-testid="social-facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10" data-testid="social-instagram">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10" data-testid="social-youtube">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10" data-testid="social-linkedin">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="footer-about">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="footer-products">
                  Semua Produk
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="footer-articles">
                  Artikel & News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="footer-contact">
                  Hubungi Kami
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="footer-faq">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Produk Unggulan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/screen-printing" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="footer-screen-printing">
                  Screen Printing
                </Link>
              </li>
              <li>
                <Link href="/products/digital-printing" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="footer-digital-printing">
                  Digital Printing
                </Link>
              </li>
              <li>
                <Link href="/products/ceramic" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="footer-ceramic">
                  Ceramic Division
                </Link>
              </li>
              <li>
                <Link href="/products/starwin" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="footer-starwin">
                  Mesin STARWIN
                </Link>
              </li>
              <li>
                <Link href="/products/falcon" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="footer-falcon">
                  Falcon M-Series
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Kontak Kami</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">
                    Jl. Industri Raya No. 123<br />
                    Kawasan Industri Pulogadung<br />
                    Jakarta Timur 13260, Indonesia
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <span className="text-primary-foreground/80">+62 21 1234 5678</span>
              </div>
              
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5" />
                <span className="text-primary-foreground/80">+62 812 3456 7890</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <span className="text-primary-foreground/80">info@sapuri.co.id</span>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-1" />
                <div className="text-primary-foreground/80">
                  <p>Senin - Jumat: 08:00 - 17:00</p>
                  <p>Sabtu: 08:00 - 12:00</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-4">
              <h4 className="font-semibold mb-2">Newsletter</h4>
              <p className="text-sm text-primary-foreground/80 mb-3">
                Dapatkan update produk dan artikel terbaru
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Email Anda"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                  data-testid="input-newsletter"
                />
                <Button variant="secondary" data-testid="button-newsletter">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 SAPURI GROUP - PT. Sumber Alam Putera Lestari. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground" data-testid="footer-privacy">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-primary-foreground/80 hover:text-primary-foreground" data-testid="footer-terms">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-primary-foreground/80 hover:text-primary-foreground" data-testid="footer-sitemap">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}