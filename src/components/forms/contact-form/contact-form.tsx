import React, { useState, useRef, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"
import { useFormik } from "formik"
import * as Yup from "yup"
import Loader from "react-loader-spinner"
import { Transition } from "react-transition-group"
import axios from "axios"

import { $colorSecondary } from "../../../styles/variables"
import { getCookie } from "../../../utils/helpers"

import {
  FormWrapper,
  Form,
  ControlField,
  StyledLabel,
  StyledInput,
  CheckboxArea,
  StyledCheckbox,
  StyledBoxLabel,
  FieldMessage,
  ButtonWrapper,
  ButtonContainer,
  StyledButton,
  ResultWrapper,
  ResultMessage,
  StyledText,
  ControlFieldWrapper,
} from "./contact-form.styled"
import handleFormSubmit from "../../../utils/handle-submit-form"

const duration = 300
const defaultStyle = {
  transition: `color ${duration}ms cubic-bezier(0.325, 0.09, 0, 1.28)`,
  opacity: `${$colorSecondary}`,
}

const transitionStyles = {
  entering: { color: `${$colorSecondary}` },
  entered: { color: `${$colorSecondary}` },
  exiting: { color: "transparent" },
  exited: { color: "transparent" },
}
interface StaticQueryData {
  site: {
    siteMetadata: {
      siteUrl: string
      domainsExcluded: string[]
      hubspotConfig: {
        portalId: string
        newsletter_formId: string
        solution_demo_formId: string
        formId: string
      }
    }
  }
}

const fileDownload = (
  file: ContentfulAssetFile,
  downloadFileOnBrowser: boolean,
  downloadGaDataLayerEventName: string,
  actionOnSuccess: () => void
) => {
  if (downloadFileOnBrowser) {
    const link = document.createElement("a")
    link.target = "_blank"
    link.href = file.url
    document.body.appendChild(link)
    link.click()
    actionOnSuccess && setTimeout(actionOnSuccess, 400)
  } else {
    axios({
      url: `${file.url}`,
      method: "GET",
      responseType: "blob", // important
    })
      .then((response) => {
        const fileExtension = file.contentType.split("/")[1]
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement("a")
        link.href = url
        link.setAttribute("download", `${file.fileName}.${fileExtension}`)
        document.body.appendChild(link)
        link.click()

        actionOnSuccess && setTimeout(actionOnSuccess, 400)
      })
      .catch((error) => {
        console.log("catch", error)
      })
  }
  if (downloadGaDataLayerEventName) {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: downloadGaDataLayerEventName,
      file: file.url,
    })
  }
}

interface ContactFormProps {
  oneColumn?: boolean
  actionOnSuccess?: () => void
  downloadFile?: ContentfulAssetFile
  downloadFileOnBrowser?: boolean
  downloadGaDataLayerEventName?: string
  email?: string
  buttonText: string
  buttonPosition?: "left" | "center" | "right"
  buttonStyle?: React.CSSProperties
  sendNewsletterForm?: boolean
  sendSolutionDemoForm?: boolean
  sendForm?: boolean
  hubspotOptions: {
    portalId?: string
    formId?: string
    newsletterFormId?: string
    solutionDemoFormId?: string
  }
  analyticsOptions: {
    category: string
    event?: string
    label: string
  }
  optionalField?: {
    label: string
    placeHolder: string
    name: string
  }
}

const ContactForm = ({
  oneColumn = true,
  actionOnSuccess,
  downloadFile,
  downloadGaDataLayerEventName,
  downloadFileOnBrowser = true,
  email,
  buttonText,
  buttonPosition = "center",
  buttonStyle = {},
  sendNewsletterForm = true,
  sendSolutionDemoForm = true,
  sendForm = true,
  hubspotOptions,
  analyticsOptions,
  optionalField = undefined,
  ...props
}: ContactFormProps) => {
  const firstNameRef = useRef<HTMLInputElement>(null)

  const {
    isSubmitting,
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
    resultMessage
  } = handleFormSubmit({
    actionOnSuccess,
    email,
    optionalField,
    hubspotOptions,
    sendNewsletterForm,
    sendSolutionDemoForm,
    sendForm,
    downloadFile,
    analyticsOptions,
    downloadGaDataLayerEventName,
    downloadFileOnBrowser
  })

  return (
    <FormWrapper {...props} oneColumn={oneColumn}>
      <Form onSubmit={handleSubmit}>
        <ControlFieldWrapper oneColumn={oneColumn}>
          <ControlField>
            <StyledLabel htmlFor="firstname">First name*</StyledLabel>

            <StyledInput
              error={!!touched.firstname && !!errors.firstname}
              ref={firstNameRef}
              id="firstname"
              name="firstname"
              type="text"
              placeholder="First name"
              onChange={handleChange}
              value={values.firstname}
            />
            <FieldMessage show={!!touched.firstname && !!errors.firstname}>
              {errors.firstname}
            </FieldMessage>
          </ControlField>

          <ControlField>
            <StyledLabel htmlFor="lastname">Last name*</StyledLabel>

            <StyledInput
              error={!!touched.lastname && !!errors.lastname}
              id="lastname"
              name="lastname"
              type="text"
              placeholder="Last name"
              onChange={handleChange}
              value={values.lastname}
            />
            <FieldMessage show={!!touched.lastname && !!errors.lastname}>
              {errors.lastname}
            </FieldMessage>
          </ControlField>

          <ControlField>
            <StyledLabel htmlFor="company">Company name*</StyledLabel>

            <StyledInput
              error={!!touched.company && !!errors.company}
              id="company"
              name="company"
              type="text"
              placeholder="Company name"
              onChange={handleChange}
              value={values.company}
            />
            <FieldMessage show={!!touched.company && !!errors.company}>
              {errors.company}
            </FieldMessage>
          </ControlField>

          <ControlField>
            <StyledLabel htmlFor="email">Work email*</StyledLabel>

            <StyledInput
              error={!!touched.email && !!errors.email}
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
              placeholder="you@company.com"
              value={values.email}
            />
            <FieldMessage show={!!touched.email && !!errors.email}>
              {errors.email}
            </FieldMessage>
          </ControlField>
          {optionalField && (
            <ControlField>
              <StyledLabel htmlFor={optionalField.name}>
                {optionalField.label}
              </StyledLabel>

              <StyledInput
                error={
                  !!touched[optionalField.name] && !!errors[optionalField.name]
                }
                id={optionalField.name}
                name={optionalField.name}
                type="text"
                onChange={handleChange}
                placeholder={optionalField.placeHolder}
                value={values[optionalField.name]}
              />
              <FieldMessage
                show={
                  !!touched[optionalField.name] && !!errors[optionalField.name]
                }
              >
                {errors[optionalField.name]}
              </FieldMessage>
            </ControlField>
          )}
        </ControlFieldWrapper>

        <CheckboxArea>
          {/* {sendNewsletterForm && ( */}
          <ControlField className="checkbox">
            <StyledBoxLabel htmlFor="terms_checkbox">
              You agree to receiving communications from Chattermill in
              accordance with the terms of{" "}
              <a href="/privacy-policy/" target="_blank">
                Chattermill's Privacy Policy
              </a>
              . You can unsubscribe from communications at any time.
            </StyledBoxLabel>
            <StyledCheckbox
              type="checkbox"
              id="terms_checkbox"
              name="terms_checkbox"
              onChange={handleChange}
              checked={values.terms_checkbox}
            />
          </ControlField>
          {/* )} */}
          <FieldMessage
            show={!!touched.terms_checkbox && !!errors.terms_checkbox}
          >
            {errors.terms_checkbox}
          </FieldMessage>
        </CheckboxArea>
        <ButtonWrapper buttonPosition={buttonPosition}>
          <ButtonContainer submitting={isSubmitting}>
            {isSubmitting && (
              <Loader
                className="loader"
                type="ThreeDots"
                color="#ffffff"
                height={15}
                width={80}
              />
            )}
            <StyledButton
              as="input"
              type="submit"
              submitting={isSubmitting}
              disabled={isSubmitting}
              value={buttonText}
              style={buttonStyle}
            />
          </ButtonContainer>
        </ButtonWrapper>
      </Form>
      <ResultWrapper>
        <Transition in={!!resultMessage} timeout={duration}>
          {(state: "entering" | "entered" | "exiting" | "exited") => (
            <ResultMessage
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <StyledText>{resultMessage}</StyledText>
            </ResultMessage>
          )}
        </Transition>
      </ResultWrapper>
    </FormWrapper>
  )
}

export default ContactForm
