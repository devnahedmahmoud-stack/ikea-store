import ShoppingCart from '@/components/cart/ShoppingCart'
import CardsSlider from '@/components/favorites/CardsSlider'
import ContainerProvider from '@/components/Providers/ContainerProvider'
import { productCards } from "@/data/data"


const CartPage = () => {
  return (
    <ContainerProvider>
        <ShoppingCart/>
        <CardsSlider products={productCards} />
    </ContainerProvider>
  )
}

export default CartPage