import {
  createContext,
  ReactNode,
  RefObject,
  SetStateAction,
  Dispatch,
  useState,
  useEffect,
  useRef,
} from "react";

import { useMediaQuery } from "@mui/material";

interface IContext {
  children: ReactNode;
}

interface IContextType {
  scrollTo: (ref: RefObject<HTMLElement>, height: number) => void;
  menuItems: {
    id: number;
    name: string;
  }[];
  sectionRefs: React.RefObject<HTMLElement>[];
  setSectionRefs: Dispatch<SetStateAction<RefObject<HTMLElement>[]>>;
  height: number;
  headerRef: React.RefObject<HTMLElement>;
  matches: boolean;
}

const menuItems = [
  { id: 1, name: "Main" },
  { id: 2, name: "About" },
  { id: 3, name: "Electricity" },
  { id: 4, name: "Cases" },
  { id: 5, name: "Faq" },
  { id: 6, name: "ContactUs" },
];

export const AppContext = createContext<IContextType | null>(null);

export const AppProvider = ({ children }: IContext) => {
  const [sectionRefs, setSectionRefs] = useState<
    React.RefObject<HTMLElement>[]
  >([]);
  const [height, setHeight] = useState<number>(0);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight;
      setHeight(headerHeight);
    }
  }, []);

  const scrollTo = (ref: RefObject<HTMLElement>) => {
    if (ref.current) {
      // Calculate the desired distance below the top of the viewport
      const distanceBelowViewport = 20;

      ref.current.scrollIntoView({ block: "start", behavior: "smooth" });

      // Calculate the scroll position with the desired distance below the top
      const scrollPosition =
        ref.current.offsetTop - height - distanceBelowViewport;

      // Use Math.max to ensure the scroll position is not negative
      window.scrollTo({
        top: Math.max(0, scrollPosition),
        left: 0,
        behavior: "smooth",
      });
    }
  };

  const matches = useMediaQuery("(min-width:768px)");

  return (
    <AppContext.Provider
      value={{
        scrollTo,
        menuItems,
        sectionRefs,
        setSectionRefs,
        height,
        headerRef,
        matches,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
