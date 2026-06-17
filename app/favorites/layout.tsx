import CardsSlider from '@/components/favorites/CardsSlider'
import { productCards } from '@/data/data'
import React from 'react'

const FavoritesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>{children}  
    <CardsSlider products={productCards} favorites={true} />
    </>
  )
}

export default FavoritesLayout