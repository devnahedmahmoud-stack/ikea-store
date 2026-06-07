"use client"
import  { useState } from 'react'
import ProductImagesSlider from './ProductImagesSlider'

type ProductGalleryProps = {
  images: string[];
  topSeller?:boolean;
  className?: string;
};

const ProductGallery = ({images,topSeller}:ProductGalleryProps) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    
          <div className="flex py gap-6 w-2/3 ">
            <ProductImagesSlider
              images={images}
              isThumbnail={true}
              onImageSelectIndex={setSelectedImageIndex}
              selectedImageIndex={selectedImageIndex}
            />
            <div className=" relative w-full  min-w-0">
              {topSeller && (
                <div className="h-4 w-fit z-20  bg-red-600 text-white font-semibold flex items-center px-2 py-3 absolute top-0 left-0">
                  Top seller
                </div>
              )}
              <ProductImagesSlider
                images={images}
                isThumbnail={false}
                onImageSelectIndex={setSelectedImageIndex}
                selectedImageIndex={selectedImageIndex}                
              />
            </div>
          </div>
          
        
  )
}

export default ProductGallery