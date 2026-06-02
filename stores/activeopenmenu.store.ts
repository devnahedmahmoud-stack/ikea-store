import { HomeSection } from "@/types/types";
import { create } from "zustand";

type UseActiveOpenMenuProps = {
  mainMenu: HomeSection[];
  catTitle: string;
  menuLinksCol: number;
    setMainMenu: (mainMenu: HomeSection[]) => void;
  setCatTitle: (title: string) => void;
  setMenuLinksCol: (index: number) => void;
};
export const useActiveOpenMenu = create<UseActiveOpenMenuProps>()((set) => ({
  mainMenu: [],
  catTitle: "",
  menuLinksCol: 0,
  setMainMenu: (mainM) => set({ mainMenu: mainM }),
  setCatTitle: (title) => set({ catTitle: title }),
  setMenuLinksCol: (index) => set({ menuLinksCol: index }),
}));
