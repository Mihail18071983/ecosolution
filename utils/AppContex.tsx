import {
  createContext,
  ReactNode,
  RefObject,
  SetStateAction,
  Dispatch,
  useState,
} from "react";

interface IContext {
  children: ReactNode;
}

interface IContextType {
  scrollTo: (ref: RefObject<HTMLElement>) => void;
  menuItems: {
    id: number;
    name: string;
  }[];
  sectionRefs: React.RefObject<HTMLElement>[];
  setSectionRefs: Dispatch<SetStateAction<RefObject<HTMLElement>[]>>;
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

  const scrollTo = (ref: RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppContext.Provider
      value={{ scrollTo, menuItems, sectionRefs, setSectionRefs }}
    >
      {children}
    </AppContext.Provider>
  );
};
