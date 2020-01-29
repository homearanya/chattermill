declare const __PATH_PREFIX__: string
declare module "*.png"
declare module "*.jpg"
declare module "*.svg"
declare module "*.eot"
declare module "*.eot?#iefix"
declare module "*.ttf"
declare module "*.woff"
declare module "*.woff2"
declare module "lodash.kebabcase"
declare module "react-scroll-up"
declare module "react-loader-spinner"

type TextPosition = "left" | "right"

interface ButtonData {
  text: string
  link: string
  arrow?: boolean
}

type TextBlockAnimation = "trail" | "springs" | undefined

type ObserverRef = (node?: Element | null | undefined) => void
