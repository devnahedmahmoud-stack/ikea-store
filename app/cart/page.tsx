import ShoppingCart from '@/components/cart/ShoppingCart'
import ContainerProvider from '@/components/Providers/ContainerProvider'

const CartPage = () => {
  return (
    <ContainerProvider>
        <ShoppingCart/>
    </ContainerProvider>
  )
}

export default CartPage