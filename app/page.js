import Image from "next/image";
import { MarketplaceHeaderSection } from "./components/MarketplaceHeaderSection";
import { ProductDetailSection } from "./components/ProductDetailSection";
import { MarketplaceFooterSection } from "./components/MarketplaceFooterSection";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col overflow-x-hidden bg-white">
      <MarketplaceHeaderSection />
      <ProductDetailSection />
      <MarketplaceFooterSection />
    </main>
  );
}
