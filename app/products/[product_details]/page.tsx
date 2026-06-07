import ProductDetails from "@/components/products/ProductDetails";
import ProductImageSlider from "@/components/products/ProductImageSlider";
import ProductImagesSlider from "@/components/products/ProductImagesSlider";
import ContainerProvider from "@/components/Providers/ContainerProvider";
import {
  AccessoriesProducts,
  FurnitureProducts,
  productCards,
} from "@/data/data";
import { ProductCard } from "@/types/types";
import Image from "next/image";
import { cache, Suspense } from "react";

import type { Metadata, ResolvingMetadata } from "next";
import ProductGallery from "@/components/products/ProductGallery";
type Props = {
  params: Promise<{ product_details: string }>;
};

const getProductDetails = cache(async (productId: number) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  let product: ProductCard | undefined;
  product =
    productCards.find((product) => product.id === productId) ??
    AccessoriesProducts.find((product) => product.id === productId) ??
    FurnitureProducts.find((product) => product.id === productId);

  return product;
});

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const { product_details } = await params;

  const product =
    (await getProductDetails(Number(product_details))) || undefined;

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product?.title ?? "Product Not Found",
    description: product?.description,
    openGraph: {
      title: product?.title,
      description: product?.description,
      images: [
        product?.images?.[0] || "",
        ...previousImages,
      ],
    },
  };
}

const ProductDetailsPage = async ({ params }: Props) => {
  //await new Promise((resolve) => setTimeout(resolve, 2000));
  const { product_details } = await params;
  console.log(product_details);
  // const productParam: string[] = product_details.split("-");

  const product =
    (await getProductDetails(Number(product_details))) || undefined;
  console.log(product);
  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-2xl font-bold">Product not found</h2>
      </div>
    );
  }
  
  return (
    <ContainerProvider className="">
      {/* <Suspense>
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm">
          <div className="h-14 w-14 animate-spin rounded-full border-4 border-white border-t-transparent" />
        </div>        
      </Suspense> */}
      <section className="flex flex-col gap-10 p-10">
        <h2 className="">{product?.title}</h2>
        <div className="flex gap-8">
<ProductGallery images={product.images} topSeller={product.topSeller} />          
          <div className="w-1/3">
            <ProductDetails productData={product} />
          </div>
        </div>
        <div className="">
          <p className="text-lg max-w-xl">{product.description}</p>
        </div>
      </section>
    </ContainerProvider>
  );
};

export default ProductDetailsPage;
