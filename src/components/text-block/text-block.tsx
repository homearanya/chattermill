import React, { cloneElement, ReactElement } from "react"
import { useInView } from "react-intersection-observer"

import { TextBlockData } from "../../types"
import {
  TinyHeading,
  BigHeading,
  MediumHeading,
  SmallHeading,
  Paragraph,
} from "../../styles/common.styled"

import {
  TextBlockWrapper,
  StyledImg,
  StyledImage,
  StyledParagraph,
  StyledLink,
  StyledA,
  StyledUnivButtonLink,
} from "./text-block.styled"

import EmailForm from "../email-form"

import UnivButtonLink from "../universal-button-link"
import captureImage from "../../images/capture.png"
import listenImage from "../../images/listen.png"
import transformImage from "../../images/transform-convo.png"
import analyseImage from "../../images/analyse.png"
import understandImage from "../../images/understand.png"
import progressImage from "../../images/progress.png"
import measureImage from "../../images/measure.png"
import unlockconvoImage from "../../images/unlock-convo.png"
import diagnoseImage from "../../images/diagnose.png"
import understandconvoImage from "../../images/understand-convo.png"
import improveImage from "../../images/improve.png"
import actImage from "../../images/act.png"
import optimiseImage from "../../images/optimise.png"
import dataInformedImage from "../../images/data-informed.png"
import shareFeedbackImage from "../../images/share-feedback.png"
import saveTimeImage from "../../images/save-time.png"
import uberLogoSmall from "../../images/uber-logo-small.png"
import transferwiseLogoSmall from "../../images/transferwise-logo-small.svg"
import deliverooLogoSmall from "../../images/deliveroo-logo-small.svg"
import zapposLogoSmall from "../../images/zappos-logo-small.svg"
import dataIntegrationsImage from "../../images/data-integrations.png"
import connectRealTimeImage from "../../images/connect-in-real-time.png"
import cxManagementImage from "../../images/cx-management.png"
import zeroOneImage from "../../images/zero-one.png"
import zeroTwoImage from "../../images/zero-two.png"
import zeroThreeImage from "../../images/zero-three.png"
import mooLogo from "../../images/moo-logo-small.svg"
import bloomwildLogo from "../../images/bloom-wild-logo-small.svg"
import askNicelyLogo from "../../images/ask-nicely.svg"
import usabillaLogo from "../../images/usabilla.svg"
import survicateLogo from "../../images/survicate.svg"
import zendeskLogo from "../../images/zendesk.svg"
import googleplayLogo from "../../images/google-play-badge.svg"
import appstoreLogo from "../../images/app-store.svg"
import salesforceLogo from "../../images/salesforce.svg"
import surveygizmoLogo from "../../images/surveygizmo.svg"
import slackLogo from "../../images/slack.svg"
import surveymonkeyLogo from "../../images/surveymonkey.svg"
import typeformLogo from "../../images/typeform.svg"
import delightedLogo from "../../images/delighted.svg"
import CleoLogo from "../../images/cleo-logo.svg"
import intercomLogo from "../../images/intercom.svg"
import sunshineLogo from "../../images/sunshine.svg"
import surveyGuideCover from "../../images/survey-guide-cover.png"
import shepHykenCover from "../../images/cult-of-customer-cover.png"
import feedbackAnalysisCover from "../../images/feedback-analysis-v2.png"
import csatGuideCover from "../../images/chattermill-csat-cover.png"
import churnGuideCover from "../../images/chattermill-churn-analysis-cover.png"
import scaleCXGuideCover from "../../images/scale-cx-playbook-cover.png"
import manomanoLogo from "../../images/manomano-logo-small.svg"
import dixaLogo from "../../images/dixa.svg"
import kustomerLogo from "../../images/Kustomer.svg"
import blueCircle from "../../images/Rectangle.svg"
import yellowCircle from "../../images/yellow-circle.svg"
import redCircle from "../../images/red-circle.svg"
import purpleCircle from "../../images/purple-circle.svg"
import freshWorks from "../../images/freshworks.svg"

import ContentfulRichText from "../contentful-richtext"

const importedImages = {
  "capture.png": captureImage,
  "listen.png": listenImage,
  "analyse.png": analyseImage,
  "transform-convo.png": transformImage,
  "understand.png": understandImage,
  "progress.png": progressImage,
  "measure.png": measureImage,
  "unlock-convo.png": unlockconvoImage,
  "diagnose.png": diagnoseImage,
  "understand-convo.png": understandconvoImage,
  "improve.png": improveImage,
  "act.png": actImage,
  "optimise.png": optimiseImage,
  "data-informed.png": dataInformedImage,
  "share-feedback.png": shareFeedbackImage,
  "save-time.png": saveTimeImage,
  "uber-logo-small.png": uberLogoSmall,
  "transferwise-logo-small.svg": transferwiseLogoSmall,
  "moo-logo-small.svg": mooLogo,
  "bloom-wild-logo-small.svg": bloomwildLogo,
  "cleo-logo.svg": CleoLogo,
  "deliveroo-logo-small.svg": deliverooLogoSmall,
  "zappos-logo-small.svg": zapposLogoSmall,
  "data-integrations.png": dataIntegrationsImage,
  "connect-in-real-time.png": connectRealTimeImage,
  "cx-management.png": cxManagementImage,
  "zero-one.png": zeroOneImage,
  "zero-two.png": zeroTwoImage,
  "zero-three.png": zeroThreeImage,
  "ask-nicely.svg": askNicelyLogo,
  "usabilla.svg": usabillaLogo,
  "survicate.svg": survicateLogo,
  "zendesk.svg": zendeskLogo,
  "google-play-badge.svg": googleplayLogo,
  "app-store.svg": appstoreLogo,
  "salesforce.svg": salesforceLogo,
  "surveygizmo.svg": surveygizmoLogo,
  "slack.svg": slackLogo,
  "surveymonkey.svg": surveymonkeyLogo,
  "typeform.svg": typeformLogo,
  "delighted.svg": delightedLogo,
  "intercom.svg": intercomLogo,
  "sunshine.svg": sunshineLogo,
  "suvey-guide-cover.png": surveyGuideCover,
  "cult-of-customer-cover.png": shepHykenCover,
  "feedback-analysis-v2.png": feedbackAnalysisCover,
  "chattermill-csat-cover.png": csatGuideCover,
  "chattermill-churn-analysis-cover.png": churnGuideCover,
  "scale-cx-playbook-cover.png": scaleCXGuideCover,
  "manomano-logo-small.svg": manomanoLogo,
  "dixa.svg": dixaLogo,
  "Kustomer.svg": kustomerLogo,
  "blueCircle.svg": blueCircle,
  "redCircle.svg": redCircle,
  "yellowCircle.svg": yellowCircle,
  "purpleCircle.svg": purpleCircle,
  "freshworks.svg": freshWorks,
}

type Elements = {
  element: ReactElement
  inView: boolean
  className: string
  observerRef?: ObserverRef
}[]

export interface TextBlockProps {
  textBlock: TextBlockData
  id?: string
  className?: string
  withObserver?: boolean
  onClick?: (e: React.MouseEvent) => string
  imageRef?: React.MutableRefObject<HTMLDivElement>
}

const TextBlock = ({
  textBlock: {
    imageName,
    image,
    alt,
    tagline,
    heading,
    subHeading,
    smallHeading,
    text,
    richText,
    html,
    button,
    button2,
    moreDetails,
    emailForm,
    childComponent,
  },
  id,
  className,
  withObserver,
  imageRef,
}: TextBlockProps) => {
  const elements: Elements = []

  imageName &&
    elements.push({
      element: (
        <StyledImg
          src={importedImages[imageName]}
          alt={alt || tagline || heading || subHeading || smallHeading}
        />
      ),
      className: "imageName",
      inView: false,
    })
  image &&
    elements.push({
      element: imageRef ? (
        <div ref={imageRef}>
          <StyledImage
            image={image}
            alt={alt || tagline || heading || subHeading || smallHeading}
          />
        </div>
      ) : (
        <StyledImage
          image={image}
          alt={alt || tagline || heading || subHeading || smallHeading}
        />
      ),
      className: "image",
      inView: false,
    })
  tagline &&
    elements.push({
      element: <TinyHeading dangerouslySetInnerHTML={{ __html: tagline }} />,
      className: "tagline",
      inView: false,
    })
  heading &&
    elements.push({
      element: <BigHeading dangerouslySetInnerHTML={{ __html: heading }} />,
      className: "heading",
      inView: false,
    })
  subHeading &&
    elements.push({
      element: (
        <MediumHeading dangerouslySetInnerHTML={{ __html: subHeading }} />
      ),
      className: "subHeading",
      inView: false,
    })
  smallHeading &&
    elements.push({
      element: (
        <SmallHeading dangerouslySetInnerHTML={{ __html: smallHeading }} />
      ),
      className: "smallHeading",
      inView: false,
    })
  text &&
    text.length > 0 &&
    text.forEach((paragraph, i) => {
      elements.push({
        element: <Paragraph dangerouslySetInnerHTML={{ __html: paragraph }} />,
        className: `text${
          i === 0 ? " first" : i === text.length - 1 ? " last" : ` text-${i}`
        }`,
        inView: false,
      })
    })
  html &&
    elements.push({
      element: <div dangerouslySetInnerHTML={{ __html: html }} />,
      className: `html`,
      inView: false,
    })
  richText &&
    elements.push({
      element: <ContentfulRichText content={richText} />,
      className: "richText",
      inView: false,
    })
  button &&
    elements.push({
      element: <UnivButtonLink button={button} />,
      className: "button",
      inView: false,
    })
  button2 &&
    elements.push({
      element: <StyledUnivButtonLink button={button2} />,
      className: "button2",
      inView: false,
    })
  childComponent &&
    elements.push({
      element: <StyledUnivButtonLink button={childComponent} />,
      className: "button2",
      inView: false,
    })
  moreDetails &&
    elements.push({
      element: (
        <StyledParagraph>
          {moreDetails.text}&nbsp;
          {moreDetails.button.link &&
          (moreDetails.button.link.indexOf("http://") !== -1 ||
            moreDetails.button.link.indexOf("https://") !== -1) ? (
            <StyledA
              href={moreDetails.button.link}
              onClick={(e) => {
                window.analytics &&
                  window.analytics.track("Clicked Integration Link", {
                    email: "dummy@dummy.com",
                    label: moreDetails.text,
                  })
              }}
            >
              {moreDetails.button.text}
              {moreDetails.button.arrow ? (
                <>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span>&rarr;</span>
                </>
              ) : null}
            </StyledA>
          ) : (
            <StyledLink
              to={moreDetails.button.link}
              onClick={(e) => {
                window.analytics &&
                  window.analytics.track("Learn More Click", {
                    email: "dummy@dummy.com",
                    label: moreDetails.button.link,
                  })
              }}
            >
              {moreDetails.button.text}
              {moreDetails.button.arrow ? (
                <>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span>&rarr;</span>
                </>
              ) : null}
            </StyledLink>
          )}
        </StyledParagraph>
      ),
      className: "moreDetails",
      inView: false,
    })

  emailForm &&
    elements.push({
      element: <EmailForm />,
      className: "emailForm",
      inView: false,
    })

  elements.forEach((element) => {
    const [ref, inView] = useInView({
      threshold: 0,
      triggerOnce: true,
      rootMargin: "-150px",
    })
    element.element = cloneElement(element.element, {
      className: element.className,
    })
    element.inView = inView
    element.observerRef = ref
  })

  return (
    <TextBlockWrapper
      id={id}
      className={`text-block ${className}`}
      withObserver={withObserver}
      classNames={elements.map((element) => {
        return element.className
      })}
    >
      {elements.map((element, index) => {
        return withObserver ? (
          <div ref={element.observerRef} key={index}>
            {element.inView
              ? cloneElement(element.element, {
                  className: `${element.className} animated`,
                })
              : element.element}
          </div>
        ) : (
          element.element
        )
      })}
    </TextBlockWrapper>
  )
}

export default TextBlock
