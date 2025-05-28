import { createContext, useContext, useState, ReactNode } from "react";

interface SliderContextProps {
  sliderValue: number;
  setSliderValue: (sliderValue: number) => void;
}

const SliderContext = createContext<SliderContextProps | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useSlider = () => {
  const context = useContext(SliderContext);
  if (!context) {
    throw new Error("useSlider must be used within a SliderProvider");
  }
  return context;
};

export const SliderProvider = ({ children }: { children: ReactNode }) => {
  const [sliderValue, setSliderValue] = useState<number>(50);

  return (
    <SliderContext.Provider value={{ sliderValue, setSliderValue }}>
      {children}
    </SliderContext.Provider>
  );
};