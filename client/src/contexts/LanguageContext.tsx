import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    // Check localStorage first, default to Indonesian (Bahasa Indonesia)
    const stored = localStorage.getItem('sapuri-language') as Language;
    if (stored && ['id', 'en'].includes(stored)) {
      return stored;
    }
    return 'id'; // Default to Bahasa Indonesia
  });

  useEffect(() => {
    localStorage.setItem('sapuri-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string, fallback?: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return fallback || key;
      }
    }
    
    return typeof value === 'string' ? value : (fallback || key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Translation data
const translations = {
  id: {
    // Navigation
    nav: {
      home: 'Beranda',
      products: 'Produk',
      about: 'Tentang Kami',
      articles: 'Artikel',
      contact: 'Kontak',
      quote: 'Minta Penawaran'
    },
    
    // Hero Section
    hero: {
      title: 'Solusi Lengkap Mesin Printing Industri Indonesia',
      subtitle: 'SAPURI GROUP menyediakan mesin digital printing, screen printing, dan peralatan keramik berkualitas tinggi dengan teknologi terdepan untuk kebutuhan industri Anda.',
      viewProducts: 'Lihat Produk',
      contactUs: 'Hubungi Kami',
      stats: {
        products: 'Produk Berkualitas',
        clients: 'Klien Puas',
        experience: 'Tahun Pengalaman'
      }
    },
    
    // Product Categories
    categories: {
      title: 'Divisi Produk Kami',
      subtitle: 'Tiga divisi utama yang menyediakan solusi lengkap untuk kebutuhan industri printing dan manufaktur',
      screenPrinting: {
        title: 'Screen Printing Division',
        description: 'Kain screen, obat afdruk, mesin sablon otomatis dengan kapasitas produksi hingga 1000 garment/jam',
        stats: '7 Kategori Produk'
      },
      digitalPrinting: {
        title: 'Digital Printing Division', 
        description: 'Mesin STARWIN dengan teknologi Konica Minolta, eco solvent, sublimasi untuk produksi 80 m²/jam',
        stats: '4 Jenis Mesin'
      },
      ceramic: {
        title: 'Ceramic Division',
        description: 'Glazing line, kiln, silicon cylinder untuk produksi keramik industri dengan teknologi modern',
        stats: '4 Peralatan Utama'
      },
      viewProducts: 'Lihat Produk'
    },
    
    // Featured Products
    featured: {
      title: 'Produk Unggulan',
      subtitle: 'Mesin dan peralatan terbaik dengan teknologi terdepan untuk industri Anda',
      quote: 'Minta Penawaran'
    },
    
    // Articles
    articles: {
      title: 'Artikel & Tips Terbaru',
      subtitle: 'Insight industri, tips perawatan mesin, dan update teknologi terkini',
      viewAll: 'Lihat Semua',
      readMore: 'Baca',
      author: 'Penulis',
      readTime: 'menit'
    },
    
    // Contact
    contact: {
      phone: 'Telepon',
      email: 'Email',
      whatsapp: 'WhatsApp'
    },
    
    // Footer
    footer: {
      description: 'PT. Sumber Alam Putera Lestari adalah distributor terpercaya untuk mesin printing digital, screen printing, dan peralatan keramik industri di Indonesia.',
      quickLinks: 'Quick Links',
      featuredProducts: 'Produk Unggulan',
      contactUs: 'Kontak Kami',
      newsletter: {
        title: 'Newsletter',
        description: 'Dapatkan update produk dan artikel terbaru',
        placeholder: 'Email Anda',
        subscribe: 'Subscribe'
      },
      address: {
        line1: 'Jl. Industri Raya No. 123',
        line2: 'Kawasan Industri Pulogadung',
        line3: 'Jakarta Timur 13260, Indonesia'
      },
      schedule: {
        weekdays: 'Senin - Jumat: 08:00 - 17:00',
        saturday: 'Sabtu: 08:00 - 12:00',
        sunday: 'Minggu: Tutup'
      },
      rights: 'All rights reserved.'
    },
    
    // Quote Form
    quote: {
      title: 'Permintaan Penawaran',
      subtitle: 'Isi formulir di bawah ini untuk mendapatkan penawaran harga terbaik dari tim kami.',
      name: 'Nama Lengkap',
      company: 'Nama Perusahaan',
      email: 'Email',
      phone: 'Nomor Telepon/WhatsApp',
      product: 'Produk yang Diminati',
      quantity: 'Jumlah yang Dibutuhkan',
      message: 'Pesan Tambahan',
      submit: 'Kirim Permintaan',
      whatsappChat: 'Chat via WhatsApp',
      optional: '(opsional)',
      required: '*',
      success: {
        title: 'Permintaan Penawaran Berhasil!',
        message: 'Tim kami akan menghubungi Anda dalam 1x24 jam. Terima kasih!'
      },
      error: {
        title: 'Gagal Mengirim',
        message: 'Terjadi kesalahan. Silakan coba lagi atau hubungi kami langsung.'
      },
      validation: {
        nameMin: 'Nama minimal 2 karakter',
        emailInvalid: 'Email tidak valid',
        phoneMin: 'Nomor telepon minimal 10 digit',
        productRequired: 'Pilih produk',
        quantityRequired: 'Jumlah harus diisi'
      }
    },
    
    // Buttons
    buttons: {
      viewAll: 'Lihat Semua',
      viewProducts: 'Lihat Produk',
      readMore: 'Baca Selengkapnya',
      getQuote: 'Minta Penawaran',
      contactUs: 'Hubungi Kami',
      submit: 'Kirim',
      search: 'Cari'
    }
  },
  
  en: {
    // Navigation
    nav: {
      home: 'Home',
      products: 'Products',
      about: 'About Us',
      articles: 'Articles',
      contact: 'Contact',
      quote: 'Get Quote'
    },
    
    // Hero Section
    hero: {
      title: 'Complete Industrial Printing Solutions in Indonesia',
      subtitle: 'SAPURI GROUP provides high-quality digital printing machines, screen printing, and ceramic equipment with cutting-edge technology for your industrial needs.',
      viewProducts: 'View Products',
      contactUs: 'Contact Us',
      stats: {
        products: 'Quality Products',
        clients: 'Satisfied Clients',
        experience: 'Years Experience'
      }
    },
    
    // Product Categories
    categories: {
      title: 'Our Product Divisions',
      subtitle: 'Three main divisions providing complete solutions for printing and manufacturing industry needs',
      screenPrinting: {
        title: 'Screen Printing Division',
        description: 'Screen fabrics, photo emulsion chemicals, automatic screen printing machines with production capacity up to 1000 garments/hour',
        stats: '7 Product Categories'
      },
      digitalPrinting: {
        title: 'Digital Printing Division',
        description: 'STARWIN machines with Konica Minolta technology, eco solvent, sublimation for 80 m²/hour production',
        stats: '4 Machine Types'
      },
      ceramic: {
        title: 'Ceramic Division',
        description: 'Glazing lines, kilns, silicon cylinders for industrial ceramic production with modern technology',
        stats: '4 Main Equipment'
      },
      viewProducts: 'View Products'
    },
    
    // Featured Products
    featured: {
      title: 'Featured Products',
      subtitle: 'Best machines and equipment with cutting-edge technology for your industry',
      quote: 'Get Quote'
    },
    
    // Articles
    articles: {
      title: 'Latest Articles & Tips',
      subtitle: 'Industry insights, machine maintenance tips, and latest technology updates',
      viewAll: 'View All',
      readMore: 'Read',
      author: 'Author',
      readTime: 'minutes'
    },
    
    // Contact
    contact: {
      phone: 'Phone',
      email: 'Email',
      whatsapp: 'WhatsApp'
    },
    
    // Footer
    footer: {
      description: 'PT. Sumber Alam Putera Lestari is a trusted distributor of digital printing machines, screen printing, and industrial ceramic equipment in Indonesia.',
      quickLinks: 'Quick Links',
      featuredProducts: 'Featured Products',
      contactUs: 'Contact Us',
      newsletter: {
        title: 'Newsletter',
        description: 'Get latest product updates and articles',
        placeholder: 'Your Email',
        subscribe: 'Subscribe'
      },
      address: {
        line1: 'Jl. Industri Raya No. 123',
        line2: 'Pulogadung Industrial Area',
        line3: 'East Jakarta 13260, Indonesia'
      },
      schedule: {
        weekdays: 'Monday - Friday: 08:00 - 17:00',
        saturday: 'Saturday: 08:00 - 12:00',
        sunday: 'Sunday: Closed'
      },
      rights: 'All rights reserved.'
    },
    
    // Quote Form
    quote: {
      title: 'Request Quote',
      subtitle: 'Fill out the form below to get the best price quote from our team.',
      name: 'Full Name',
      company: 'Company Name',
      email: 'Email',
      phone: 'Phone/WhatsApp Number',
      product: 'Product of Interest',
      quantity: 'Quantity Needed',
      message: 'Additional Message',
      submit: 'Send Request',
      whatsappChat: 'Chat via WhatsApp',
      optional: '(optional)',
      required: '*',
      success: {
        title: 'Quote Request Successful!',
        message: 'Our team will contact you within 24 hours. Thank you!'
      },
      error: {
        title: 'Send Failed',
        message: 'An error occurred. Please try again or contact us directly.'
      },
      validation: {
        nameMin: 'Name minimum 2 characters',
        emailInvalid: 'Invalid email',
        phoneMin: 'Phone number minimum 10 digits',
        productRequired: 'Select product',
        quantityRequired: 'Quantity must be filled'
      }
    },
    
    // Buttons
    buttons: {
      viewAll: 'View All',
      viewProducts: 'View Products',
      readMore: 'Read More',
      getQuote: 'Get Quote',
      contactUs: 'Contact Us',
      submit: 'Submit',
      search: 'Search'
    }
  }
};

export { translations };