"use client"
type MenuItemButtonProps={
  id:number,
  title:string,
  onClick:()=>void
}
const MenuItemButton = ({id,title,onClick}:MenuItemButtonProps) => {
  return (
    <button className=' border border-gray-200 w-57 rounded-sm font-bold px-5 py-3 cursor-pointer hover:border-black/40 
    focus:border-[#0058a3] focus:border-2'  
    
    onClick={onClick}>{title}</button>
  )
}

export default MenuItemButton