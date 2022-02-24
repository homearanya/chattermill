import {} from "gatsby-plugin-segment-js"

declare global {
  interface Window {
    analytics: any
    dataLayer: any
  }
}

export type Maybe<T> = T | null

interface ImageObject {
  readonly childImageSharp: {
    gatsbyImageData?: GatsbyTypes.Scalars["JSON"] | undefined | null
  }
  readonly publicURL?: string
}

interface TextBlockData {
  imageName?:
    | "capture.png"
    | "listen.png"
    | "analyse.png"
    | "understand.png"
    | "progress.png"
    | "measure.png"
    | "diagnose.png"
    | "improve.png"
    | "act.png"
    | "optimise.png"
    | "data-informed.png"
    | "share-feedback.png"
    | "save-time.png"
    | "uber-logo-small.png"
    | "transferwise-logo-small.svg"
    | "moo-logo-small.svg"
    | "bloom-wild-logo-small.svg"
    | "cleo-logo.svg"
    | "deliveroo-logo-small.svg"
    | "zappos-logo-small.svg"
    | "data-integrations.png"
    | "connect-in-real-time.png"
    | "cx-management.png"
    | "zero-one.png"
    | "zero-two.png"
    | "zero-three.png"
    | "salesforce.svg"
    | "slack.svg"
    | "surveymonkey.svg"
    | "survicate.svg"
    | "typeform.svg"
    | "usabilla.svg"
    | "zendesk.svg"
    | "google-play-badge.svg"
    | "ask-nicely.svg"
    | "app-store.svg"
  image?: SubFile
  alt?: string
  tagline?: string
  heading?: string
  subHeading?: string
  smallHeading?: string
  text?: string[]
  richText?: GatsbyTypes.ContentfulBodyBody
  html?: string
  button?: ButtonData
  button2?: ButtonData
  moreDetails?: {
    text?: string
    button: ButtonData
  }
  emailForm?: {
    textPlaceholder: string
    buttonText: string
  }
  childComponent?: ButtonData
}

interface BlogPageContext {
  mainPost: GatsbyTypes.ContentfulPost
  frontPosts?: string[]
  posts?: GatsbyTypes.ContentfulPost[]
  numPages: number
  currentPage: number
  limit?: number
  skip?: number
  category?: string
  tag?: string
  totalCount?: number
  arrayOfPageNumbers: number[]
}

type CssObjectFit = "fill" | "contain" | "cover" | "none" | "scale-down"
