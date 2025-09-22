import ProductCard from '../ProductCard'

export default function ProductCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ProductCard
        id="starwin-3200"
        name="STARWIN Large Format Printer 3200"
        category="Digital Printing"
        price="Rp 250.000.000"
        image="/api/placeholder/400/300"
        specs={["80 m²/jam", "Konica Minolta Head", "Eco Solvent"]}
        rating={4.8}
        isFeatured={true}
        badge="Best Seller"
        slug="starwin-large-format-printer-3200"
      />
    </div>
  )
}