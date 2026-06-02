import { cn } from "@/lib/utils"
import { ReactNode } from "react"
type props={
  children:ReactNode,
  className?:string
}
const ContainerProvider = ({children ,className}:props) => {
  return (
    <main className={cn('lg:p-12 p-6 ',className)}>{children}</main>
  )
}

export default ContainerProvider