declare const __PATH_PREFIX__: string
declare module "*.mp4"
declare module "*.webm"
declare module "*.gif"
declare module "*.png"
declare module "*.jpg"
declare module "*.svg"
declare module "*.webp"
declare module "*.eot"
declare module "*.eot?#iefix"
declare module "*.ttf"
declare module "*.woff"
declare module "*.woff2"
declare module "lodash"
declare module "react-loader-spinner"

type TextPosition = "left" | "right"

interface ButtonData {
  text: string
  link?: string
  newTab?: boolean
  wide?: boolean
  secondary?: boolean
  inverted?: boolean
  onClick?: () => void
  arrow?: boolean
}

type TextBlockAnimation = "trail" | "springs" | undefined

type ObserverRef = (node?: Element | null | undefined) => void

type HubspotFormId =
  | "churnGuide_formId"
  | "customerFeedbackGuide_formId"
  | "scalingCX_formId"
  | "csatGuide_formId"
  | "surveyGuide_formId"
  | "freeBook_formId"

type SubImageSharpFluid = Partial<
  GatsbyTypes.Maybe<
    Omit<
      GatsbyTypes.ImageSharpFluid,
      | "originalImg"
      | "originalName"
      | "presentationWidth"
      | "presentationHeight"
    >
  >
>

type SubImageSharpFixed = Partial<
  GatsbyTypes.Maybe<Omit<GatsbyTypes.ImageSharpFixed, "originalName">>
>

type SubImageSharp = {
  gatsbyImageData?: GatsbyTypes.Maybe<GatsbyTypes.Scalars["JSON"]>
}

type SubFile = {
  publicURL?: string
  childImageSharp?: SubImageSharp
}

type SubContentfulAsset = {
  readonly gatsbyImageData?: Partial<
    GatsbyTypes.Maybe<GatsbyTypes.Scalars["JSON"]>
  >
  readonly file?: Partial<GatsbyTypes.ContentfulAssetFile>
  readonly title?: Partial<string>
}
