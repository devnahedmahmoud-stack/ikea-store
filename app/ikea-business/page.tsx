import HeaderSection from '@/components/home/HeaderSection'
import ContainerProvider from '@/components/Providers/ContainerProvider'
import React from 'react'

const IkeaBusinessPage = () => {
  return (
    <ContainerProvider>
        <HeaderSection
        title='Welcome to IKEA for Business'
        subtitle='Whatever type of space you are planning to furnish, we can help'
        desc=''/>
    </ContainerProvider>
  )
}

export default IkeaBusinessPage