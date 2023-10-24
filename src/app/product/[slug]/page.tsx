import ProductList from "@/components/ui/product-list";
import SectionTitle from "@/components/ui/section-title";
import { computeProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/product-images";
import ProductInfo from "./components/product-info";

interface ProductDetailsPageProps {
  params: {
    slug: string;
  };
}

const ProductDetailsPage = async ({
  params: { slug },
}: ProductDetailsPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: slug,
              },
            },
          },
        },
      },
    },
  });

  if (!product) return null;

  return (
    <div className="flex flex-col gap-8 pb-8 sm:container sm:mx-auto sm:pt-8">
      <div className="flex-col gap-4 md:container sm:flex sm:justify-around md:flex-row">
        <div className="md:w-3/5">
          <ProductImages imageUrls={product.imageUrls} name={product.name} />
        </div>
        <div className="md:w-2/5">
          <ProductInfo product={computeProductTotalPrice(product)} />
        </div>
      </div>

      <div>
        <SectionTitle>Produtos Recomendados</SectionTitle>
        <ProductList products={product.category.products} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
