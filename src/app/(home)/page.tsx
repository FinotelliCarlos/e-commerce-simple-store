import { prismaClient } from "@/lib/prisma";
import ProductList from "../../components/ui/product-list";
import SectionTitle from "../../components/ui/section-title";
import Categories from "./components/categories";
import PromoBanner from "./components/promo-banner";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return (
    <div className="flex flex-col gap-8 py-8">
      <div className="w-screen">
        <PromoBanner
          src="/banner-ofertas.png"
          alt="Ofertas imperdiveis, até 55% de desconto esse mês!"
          className="hidden w-full sm:block"
        />
      </div>

      <PromoBanner
        src="/banner-home-01.png"
        alt="Até 55% de desconto esse mês!"
        className="block w-full px-5 sm:hidden"
      />

      <div className="px-5">
        <Categories />
      </div>

      <div className="items-left container mx-auto flex w-full flex-col justify-center">
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <PromoBanner
        src="/banner-home-02.png"
        alt="Até 55% de desconto em teclados!"
        className="block w-full px-5 sm:hidden"
      />

      <div className="flex items-center justify-center gap-9">
        <PromoBanner
          src="/banner-home-02.png"
          alt="Até 55% de desconto em teclados!"
          className="hidden w-full max-w-[600px] sm:block"
        />
        <PromoBanner
          src="/banner-home-03.png"
          alt="Até 55% de desconto em teclados!"
          className="hidden w-full max-w-[600px] sm:block"
        />
      </div>

      <div className="items-left container mx-auto flex w-full flex-col justify-center">
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>

      <PromoBanner
        src="/banner-home-03.png"
        alt="Até 55% de desconto em mouses!"
        className="block w-full px-5 sm:hidden"
      />

      <PromoBanner
        src="/banner-fretegrátis.png"
        alt="Até 55% de desconto em teclados!"
        className="hidden w-full p-5 sm:block"
      />

      <div className="items-left container mx-auto flex w-full flex-col justify-center">
        <SectionTitle>Mouses</SectionTitle>
        <ProductList products={mouses} />
      </div>
    </div>
  );
}
