import React, { createContext, Dispatch, SetStateAction } from "react";

type ContextDefaultValues = {
  navbarBackgroundColor: string;
  setNavbarBackgroundColor: Dispatch<SetStateAction<string>>;
};

export const NavbarBackgroundContext = createContext<ContextDefaultValues>({
  navbarBackgroundColor: "#fff",
  setNavbarBackgroundColor: () => {},
});
