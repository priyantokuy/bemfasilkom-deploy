'use client';
import "react-tabs/style/react-tabs.css";
import "../styles/globals.css";
import { useEffect, useRef } from 'react';
import type { AppProps } from "next/app";
import { Navbar } from "../components/Navbar";
import { Provider as StoreProvider  } from 'react-redux'
import store from '../store/store'
import { Provider } from "next-auth/client";
import { NavbarBackgroundContext } from "../contexts/navbar-background";
import { useMemo, useState } from "react";
import { Footer } from "../components/Footer";

function MyApp({ Component, pageProps, router }: AppProps) {
  const useRefScroll: any = useRef()
  const [navbarBackgroundColor, setNavbarBackgroundColor] = useState("#fff");
  const value = useMemo(
    () => ({ navbarBackgroundColor, setNavbarBackgroundColor }),
    [navbarBackgroundColor]
  );

  return (
    <Provider session={pageProps.session}>
      <StoreProvider store={store}>
        <NavbarBackgroundContext.Provider value={value}>
          <Navbar />
          <div ref={useRefScroll} id="root" className="page-content">
              <Component {...pageProps} />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </NavbarBackgroundContext.Provider>
      </StoreProvider>
    </Provider>
  );
}
export default MyApp;
