"use client"

import { productCards } from "@/data/data"
import CardsSlider from "../favorites/CardsSlider"

const ShoppingCart = () => {
  return (
    <section>    
    <div>ShoppingCart</div>
    <CardsSlider products={productCards} />
    </section>
  )
}

export default ShoppingCart