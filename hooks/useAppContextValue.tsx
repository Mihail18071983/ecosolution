import { AppContext } from "../utils/AppContex";
import { useContext } from "react";

export const useAppContextValue = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("Context error");
  }
  return context;
};