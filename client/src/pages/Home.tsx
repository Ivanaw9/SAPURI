import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import ArticlesPreview from "@/components/ArticlesPreview";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProductCategories />
        <FeaturedProducts />
        <ArticlesPreview />
      </main>
      <Footer />
    </div>
  );
}