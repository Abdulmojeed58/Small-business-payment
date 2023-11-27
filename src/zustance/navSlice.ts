import { create } from "zustand";

interface INav {
  isNavOpen: boolean;
  isModalOpen: boolean;
  setToggleNav: (value: boolean) => void;
  isSidebar: boolean;
  setSidebar: (value: boolean) => void;
}

const useNav = create<INav>((set, get) => ({
  isNavOpen: false,
  isModalOpen: false,
  setToggleNav: (value: boolean) =>
    set((state: any) => ({
      ...state,
      isNavOpen: value,
    })),
  isSidebar: false,
  setSidebar: (value: boolean) =>
    set((state: any) => ({
      ...state,
      isSidebar: value,
    })),
}));

export default useNav;
