import FavoritesList from "@/components/favorites/FavoritesList"
import ContainerProvider from "@/components/Providers/ContainerProvider"
import { Button } from "@/components/ui/button"
import {  Back } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

type FavoritesListPageProps=
{
  params:{
    userId:string
  }
}
const FavoritesListPage =  async ({params}:FavoritesListPageProps) => {
  const {userId}=await params
  console.log(userId,params)
  return (
    
    <ContainerProvider>
     <FavoritesList userID={userId}/>
    </ContainerProvider>
  )
}

export default FavoritesListPage