import React from "react"
import { isSafari } from "react-device-detect"

import GlobalStyles from "../styles/global.styled"
import { DefaultTheme, ThemeProvider } from "styled-components"
import { $maxWidth } from "../styles/variables"
import { $breakpoints } from "../styles/media"
import Navigation from "./navigation"
import Footer from "./footer"
import "../styles/scss/styles.scss"
import "../styles/slick.css"

interface LayoutProps {
  readonly children?: React.ReactNode | readonly React.ReactNode[]
  readonly className?: string
  readonly blog?: boolean
  readonly templates?: boolean
  readonly path?: string
}

const Layout = ({
  children,
  className,
  blog,
  templates,
  path,
}: LayoutProps) => {
  const baseTheme: DefaultTheme = {
    awesomegrid: {
      mediaQuery: "only screen",
      columns: {
        xs: 4,
        sm: 8,
        md: 12,
        lg: 12,
        xl: 12,
      },
      // 1 rem: 10px (changed by global styles)
      gutterWidth: {
        xs: 1.5,
        sm: 1.5,
        md: 3,
        lg: 3,
        xl: 3,
      },
      // 1 rem: 10px (changed by global styles)
      paddingWidth: {
        xs: 1.5,
        sm: 1.5,
        md: 2,
        lg: 2,
        xl: 3,
      },
      // 1 rem: 10px (changed by global styles)
      container: {
        xs: "full", // 'full' = max-width: 100%
        sm: "full", // 'full' = max-width: 100%
        md: "full", // 'full' = max-width: 100%
        lg: $maxWidth / 10, // max-width: 1440px
        xl: $maxWidth / 10, // max-width: 1440px
      },
      // 1 rem: 16px
      // In Safari 1 rem according to html element = 10px
      breakpoints: {
        xs: $breakpoints.xs * (isSafari ? 1.6 : 1),
        sm: $breakpoints.sm * (isSafari ? 1.6 : 1),
        md: $breakpoints.md * (isSafari ? 1.6 : 1),
        lg: $breakpoints.lg * (isSafari ? 1.6 : 1),
        xl: $breakpoints.xl * (isSafari ? 1.6 : 1),
      },
    },
  }
  const mainTheme: DefaultTheme = JSON.parse(JSON.stringify(baseTheme))
  mainTheme.awesomegrid.paddingWidth = {
    xs: blog ? 3 : templates ? 1.5 : 1.5,
    sm: blog ? 6 : templates ? 1.5 : 6.5,
    md: blog ? 6 : templates ? 1.5 : 13,
    lg: blog ? 6 : templates ? 1.5 : 13,
    xl: blog ? 6 : templates ? 1.5 : 13,
  }
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={baseTheme}>
        <Navigation blog={blog} path={path} />
        <ThemeProvider theme={mainTheme}>
          <main className={className} role="main">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </ThemeProvider>
    </>
  )
}

export default Layout
