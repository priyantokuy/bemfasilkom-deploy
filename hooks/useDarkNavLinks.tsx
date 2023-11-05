import { useContext } from "react";
import { NavbarBackgroundContext } from "../contexts/navbar-background";

export const useDarkNavLinks = () => {
  useContext(NavbarBackgroundContext).setNavbarBackgroundColor("#fff");
};
