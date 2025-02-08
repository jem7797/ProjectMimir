import { createContext, ReactNode, useContext, useState, Dispatch, SetStateAction } from "react";

interface HamburgerMenuContext {
  menuIsOpen: boolean;
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>;
}

const HamburgerMenuContext = createContext<HamburgerMenuContext | undefined>(undefined);

export const useHamburgerMenu = () => {
  const context = useContext(HamburgerMenuContext);
  if (!context) {
    throw new Error("useHamburgerMenu must be used within a HamburgerMenuProvider");
  }
  return context;
};

export const HamburgerMenuProvider = ({ children }: { children: ReactNode }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <HamburgerMenuContext.Provider value={{ menuIsOpen, setMenuIsOpen }}>
      {children}
    </HamburgerMenuContext.Provider>
  );
};
