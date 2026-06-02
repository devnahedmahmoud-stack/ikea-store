"use client"
import React from 'react'
import { Input } from '../ui/input'
import { Controller} from 'react-hook-form'
import {  ViewIcon, ViewOffSlashIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { cn } from '@/lib/utils'

type FieldPasswordProps = {
  control:any,
  name:string,
  className?:string
}
const FieldPassword = ({control,name,className}:FieldPasswordProps) => {
  const [visible, setVisible] = React.useState<boolean>(false)
  return (
    <Controller
        name={name}
        control={control}
        render={({ field }) => (
        <div className={cn('relative',className)}>
          <Input id={field.name} {...field} type={visible?"text":"password"} className={className} />
          <button type='button' className='absolute right-2 top-1/2 -translate-y-1/2 focus:outline-none  
          w-8 h-8 rounded-full cursor-pointer flex items-center justify-center hover:bg-black/20' onClick={() => setVisible(!visible)}>
          <HugeiconsIcon icon={visible ? ViewOffSlashIcon : ViewIcon} strokeWidth={2} />                     
          </button>
        </div>)}
      />

  )
}

export default FieldPassword