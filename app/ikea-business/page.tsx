import HeaderSection from '@/components/home/HeaderSection'
import ContainerProvider from '@/components/Providers/ContainerProvider'
import Image from 'next/image'
import React from 'react'

const IkeaBusinessPage = () => {
  return (
    <ContainerProvider>
        <HeaderSection
        title='Welcome to IKEA for Business'
        subtitle='Whatever type of space you are planning to furnish, we can help'
        desc=''/>
        <section>
          <h2 className="md:text-2xl text-xl  font-bold">Join the IKEA for Business Network and discover all the benefits!</h2>
<div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-4'>
  <div className='w-full relative aspect-3/2 rounded-none'>
<Image src='/IKEABusiness/IKEABusiness-1.png' alt='IKEA for Business' 
fill className='w-full h-auto rounded-md'></Image>
</div>
<div>
  <h3 className='text-black/70 font-bold'>Businesses pay less
You can do everything yourself, or we can do it for you. IKEA services will make your life easier.</h3>
  <ul className='grid gap-2 mt-4 list-disc list-inside'>
    <li className='text-black/70 text-[15px]'>Interior Design</li>
    <li className='text-black/70 text-[15px]'>Project management and planning</li>
    <li className='text-black/70 text-[15px]'>After sale service</li>
    <li className='text-black/70 text-[15px]'>Delivery</li>
    <li className='text-black/70 text-[15px]'>Assembly</li>
    <li className='text-black/70 text-[15px]'>Kitchen Installation</li>
    <li className='text-black/70 text-[15px]'>Measuring</li>
    <li className='text-black/70 text-[15px]'>Finance options</li>
    <li className='text-black/70 text-[15px]'>Gift Card solutions (digital and physical)</li>
    <li className='text-black/70 text-[15px]'>Sustainable Corporate Gifting </li>
    <li className='text-black/70 text-[15px]'>Free coffee</li>

  </ul>
</div>
  </div>
        </section>
    </ContainerProvider>
  )
}

export default IkeaBusinessPage