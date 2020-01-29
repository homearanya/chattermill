import { FluidObject, FixedObject } from "gatsby-image"

interface ImageObject {
  readonly childImageSharp: {
    fluid?: FluidObject | undefined
    fixed?: FixedObject | undefined
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
  image?: ImageObject
  alt?: string
  tagline?: string
  heading?: string
  subHeading?: string
  smallHeading?: string
  text?: string[]
  button?: {
    text: string
    link: string
    secondary?: boolean
    inverted?: boolean
  }
  button2?: {
    text: string
    link: string
    secondary?: boolean
    inverted?: boolean
  }
  moreDetails?: {
    text?: string
    button: ButtonData
  }
  emailForm?: {
    textPlaceholder: string
    buttonText: string
  }
}
