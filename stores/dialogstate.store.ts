import { create } from "zustand";
type DialogStateStore={
    isOpen:boolean,
    setIsOpen:(state:boolean)=>void,
    isMenuOpen:boolean,
    setIsMenuOpen:(state:boolean)=>void
}

export const useDialogStateStore = create<DialogStateStore>()(
  (set)=>({
    isOpen: false,
    isMenuOpen:false,
    setIsOpen:(newState)=>set({isOpen:newState}),
    setIsMenuOpen:(newState)=>set({isMenuOpen:newState})
  }),
);
