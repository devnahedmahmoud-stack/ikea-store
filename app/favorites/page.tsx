import Favorites from '@/components/favorites/Favorites'
import ContainerProvider from '@/components/Providers/ContainerProvider'
import React from 'react'

const FavoritesPage = () => {
  return (
    <ContainerProvider>
        <Favorites/>
    </ContainerProvider>
  )
}

export default FavoritesPage