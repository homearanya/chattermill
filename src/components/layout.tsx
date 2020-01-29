import React from "react";

import GlobalStyles from "../styles/global.styled";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { $maxWidth } from "../styles/variables";
import { $breakpoints } from "../styles/media";
import Navigation from "./navigation";
import Footer from "./footer";
import ScrollUp from "./scroll-to-top";

interface LayoutProps {
  readonly children?: React.ReactNode | readonly React.ReactNode[];
  readonly className?: string;
}

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}

const Layout = ({ children, className }: LayoutProps) => {
  const baseTheme: DefaultTheme = {
    awesomegrid: {
      mediaQuery: "only screen",
      columns: {
        xs: 4,
        sm: 8,
        md: 12,
        lg: 12,
        xl: 12
      },
      // 1 rem: 10px (changed by global styles)
      gutterWidth: {
        xs: 1.5,
        sm: 1.5,
        md: 3,
        lg: 3,
        xl: 3
      },
      // 1 rem: 10px (changed by global styles)
      paddingWidth: {
        xs: 1.5,
        sm: 1.5,
        md: 3,
        lg: 3,
        xl: 3
      },
      // 1 rem: 10px (changed by global styles)
      container: {
        xs: "full", // 'full' = max-width: 100%
        sm: "full", // 'full' = max-width: 100%
        md: "full", // 'full' = max-width: 100%
        lg: $maxWidth / 10, // max-width: 1440px
        xl: $maxWidth / 10 // max-width: 1440px
      },
      // 1 rem: 16px
      breakpoints: {
        xs: $breakpoints.xs,
        sm: $breakpoints.sm,
        md: $breakpoints.md,
        lg: $breakpoints.lg,
        xl: $breakpoints.xl
      }
    }
  };
  const mainTheme: DefaultTheme = JSON.parse(JSON.stringify(baseTheme));
  mainTheme.awesomegrid.paddingWidth = {
    xs: 1.5,
    sm: 6.5,
    md: 13,
    lg: 13,
    xl: 13
  };
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={baseTheme}>
        <Navigation />
        <ThemeProvider theme={mainTheme}>
          <main className={className} role="main" style={{ marginTop: "9rem" }}>
            {children}
          </main>
          <Footer />
          <ScrollUp />
        </ThemeProvider>
      </ThemeProvider>
    </>
  );
};

export default Layout;
