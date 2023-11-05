import { useContext } from "react";
import { NavbarBackgroundContext } from "../contexts/navbar-background";

export const useLightNavLinks = () => {
  useContext(NavbarBackgroundContext).setNavbarBackgroundColor("#000");
};
