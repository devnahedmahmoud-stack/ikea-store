import FavoritesList from "@/components/favorites/FavoritesList"
import ContainerProvider from "@/components/Providers/ContainerProvider"

type FavoritesListPageProps=
{
  params:{
    userId:string
  }
}
const FavoritesListPage =  async ({params}:FavoritesListPageProps) => {
  const {userId}=await params 

  return (
    
    <ContainerProvider>
     <FavoritesList userID={userId}/>
    </ContainerProvider>
  )
}

export default FavoritesListPage