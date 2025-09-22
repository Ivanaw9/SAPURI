import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Search, Phone, MessageCircle } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const productCategories = {
    "Screen Printing": [
      { name: "Kain Screen", href: "/products/kain-screen" },
      { name: "Obat Afdruk & Penguat", href: "/products/obat-afdruk" },
      { name: "Pencuci Kain Sablon", href: "/products/pencuci-kain" },
      { name: "Lem Tahan Minyak", href: "/products/lem-tahan-minyak" },
      { name: "Karet Rakel", href: "/products/karet-rakel" },
      { name: "Aksesoris Printing", href: "/products/aksesoris-printing" },
      { name: "Mesin Sablon", href: "/products/mesin-sablon" },
    ],
    "Digital Printing": [
      { name: "Mesin Digital", href: "/products/mesin-digital" },
      { name: "Eco Solvent Printer", href: "/products/eco-solvent" },
      { name: "Solvent Printer", href: "/products/solvent" },
      { name: "Sublimasi Printer", href: "/products/sublimasi" },
      { name: "Material", href: "/products/material" },
      { name: "Ink & Sparepart", href: "/products/ink-sparepart" },
      { name: "Accessories", href: "/products/accessories" },
    ],
    "Ceramic Division": [
      { name: "Glazing Line", href: "/products/glazing-line" },
      { name: "Kiln", href: "/products/kiln" },
      { name: "Silicon Cylinder", href: "/products/silicon-cylinder" },
      { name: "Horizontal Dryer", href: "/products/horizontal-dryer" },
    ],
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              +62 21 1234 5678
            </span>
            <span>Email: info@sapuri.co.id</span>
          </div>
          <Button
            size="sm"
            variant="outline"
            className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            data-testid="button-whatsapp"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            WhatsApp
          </Button>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3" data-testid="link-home">
          <div className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-bold text-xl">
            SAPURI
          </div>
          <div className="hidden md:block">
            <div className="font-bold text-lg text-foreground">SAPURI GROUP</div>
            <div className="text-sm text-muted-foreground">PT. Sumber Alam Putera Lestari</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" className={`px-4 py-2 rounded-md hover-elevate ${location === "/" ? "bg-accent" : ""}`} data-testid="nav-home">
                Beranda
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger data-testid="nav-products-trigger">Produk</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid grid-cols-3 gap-6 p-6 w-[800px]">
                  {Object.entries(productCategories).map(([division, categories]) => (
                    <div key={division} className="space-y-3">
                      <h4 className="font-semibold text-sm text-primary">{division}</h4>
                      <ul className="space-y-2">
                        {categories.map((category) => (
                          <li key={category.href}>
                            <Link
                              href={category.href}
                              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                              data-testid={`nav-${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              {category.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about" className={`px-4 py-2 rounded-md hover-elevate ${location === "/about" ? "bg-accent" : ""}`} data-testid="nav-about">
                Tentang Kami
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/articles" className={`px-4 py-2 rounded-md hover-elevate ${location === "/articles" ? "bg-accent" : ""}`} data-testid="nav-articles">
                Artikel
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" className={`px-4 py-2 rounded-md hover-elevate ${location === "/contact" ? "bg-accent" : ""}`} data-testid="nav-contact">
                Kontak
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Search and CTA */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" data-testid="button-search">
            <Search className="h-5 w-5" />
          </Button>
          <Button className="hidden md:flex" data-testid="button-quote">
            Minta Penawaran
          </Button>
          
          {/* Mobile menu trigger */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                <Link href="/" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-nav-home">
                  Beranda
                </Link>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Produk</h3>
                  {Object.entries(productCategories).map(([division, categories]) => (
                    <div key={division} className="ml-4 space-y-2">
                      <h4 className="font-medium text-primary">{division}</h4>
                      {categories.map((category) => (
                        <Link
                          key={category.href}
                          href={category.href}
                          className="block text-sm text-muted-foreground ml-4"
                          onClick={() => setMobileMenuOpen(false)}
                          data-testid={`mobile-nav-${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
                
                <Link href="/about" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-nav-about">
                  Tentang Kami
                </Link>
                <Link href="/articles" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-nav-articles">
                  Artikel
                </Link>
                <Link href="/contact" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-nav-contact">
                  Kontak
                </Link>
                
                <Button className="mt-4" data-testid="mobile-button-quote">
                  Minta Penawaran
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}