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
import { Suspense } from "react";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ product_details: string }>;
}) => {
  //await new Promise((resolve) => setTimeout(resolve, 2000));
  const { product_details } = await params;
  console.log(product_details);
  // const productParam: string[] = product_details.split("-");

  async function getProductDetails(productId: number) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    let product: ProductCard | undefined;
    product = productCards.find((product) => product.id === productId);
    if (!product) {
      product = AccessoriesProducts.find((product) => product.id === productId);
      if (!product) {
        product = FurnitureProducts.find((product) => product.id === productId);
      }
    }

    return product;
  }
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
        <div className="flex gap-8  bg-amber-800">
          <div className="flex py gap-6 w-2/3 ">
            <ProductImagesSlider images={product.images} isThumbnail={true} />
            <div className=" relative w-full  min-w-0">
              {product.topSeller && (
                <div
                  className="h-4 w-fit z-20  bg-red-600 text-white font-semibold flex items-center px-2 py-3 absolute top-0 left-0"
                >
                  Top seller
                </div>
              )}
              <ProductImagesSlider images={product.images}  isThumbnail={false}/>
            </div>
          </div>
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
