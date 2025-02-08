import { createContext, useContext, useState, ReactNode } from "react";

interface SettingsContextProps {
  settingsIsOpen: boolean;
  setSettingsIsOpen: (isOpen: boolean) => void;
}

const SettingsContext = createContext<SettingsContextProps | undefined>(undefined);

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settingsIsOpen, setSettingsIsOpen] = useState(false);

  return (
    <SettingsContext.Provider value={{ settingsIsOpen, setSettingsIsOpen }}>
      {children}
    </SettingsContext.Provider>
  );
};