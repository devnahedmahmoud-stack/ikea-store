import { create } from "zustand";
type DialogStateStore={
    isOpen:boolean,
    setIsOpen:(state:boolean)=>void
}

export const useDialogStateStore = create<DialogStateStore>()(
  (set)=>({
    isOpen: false,
    setIsOpen:(newState)=>set({isOpen:newState})
  }),
);
