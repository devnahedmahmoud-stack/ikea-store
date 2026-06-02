import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

type HeaderSectionProps={
    title:string,
    subtitle?:string,
    desc:string,
    more?:ReactNode,
    className?:string
}
const HeaderSection = ({title,subtitle,desc,more,className}:HeaderSectionProps) => {
  return (
    <div className='md:mt-15 mt-12  mb-4 space-y-2 '>
        <h1 className='xl:text-4xl md:text-3xl text-2xl  font-bold md:mb-15 mb-12'>{title}</h1>
        <h2 className='md:text-2xl text-xl  font-bold'>{subtitle}</h2>
        <div className='flex justify-between items-center '>
        <p className={cn(' text-black/70',className)}>{desc}</p>
        {more}
        </div>
    </div>
  )
}

export default HeaderSection