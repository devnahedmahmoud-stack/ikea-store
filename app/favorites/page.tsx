import Favorites from '@/components/favorites/Favorites'
import ContainerProvider from '@/components/Providers/ContainerProvider'

export async function generateMetadata()
{
  return {
    title: "IKEA Favorites",
    metadataBase:new URL("https://ikea-store.vercel.app/"),
    keywords:["Next.ts"]
      };
}
const FavoritesPage = () => {
  return (
    <ContainerProvider>
        <Favorites/>
    </ContainerProvider>
  )
}

export default FavoritesPage