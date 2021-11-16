import * as React from 'react';
import { useFormik } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { getCookie } from "./helpers"
import { graphql, useStaticQuery } from 'gatsby';

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

interface HandleFormSubmitProps {
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
  actionOnSuccess?: () => void
  downloadFile?: ContentfulAssetFile
  downloadFileOnBrowser?: boolean
  downloadGaDataLayerEventName?: string
  email?: string
  sendNewsletterForm?: boolean
  sendSolutionDemoForm?: boolean
  sendForm?: boolean
  optionalField?: {
    label: string
    placeHolder: string
    name: string
  }
}
 
const handleFormSubmit = ({
  actionOnSuccess,
  downloadFile,
  downloadGaDataLayerEventName,
  downloadFileOnBrowser = true,
  email,
  sendNewsletterForm = true,
  sendSolutionDemoForm = true,
  sendForm = true,
  hubspotOptions,
  analyticsOptions,
  optionalField = undefined,
}: HandleFormSubmitProps) => {
  const [resultMessage, setMessage] = React.useState("")
  const {
    site: {
      siteMetadata: { siteUrl, domainsExcluded, hubspotConfig },
    },
  }: StaticQueryData = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            domainsExcluded
            hubspotConfig {
              portalId
              formId
              newsletter_formId
              solution_demo_formId
            }
          }
        }
      }
    `
  )
    const handleClick = (email) => {
    if (downloadFile && downloadFile.url && downloadFile.fileName) {
      fileDownload(
        downloadFile,
        downloadFileOnBrowser,
        downloadGaDataLayerEventName,
        actionOnSuccess
      )
    } else {
      actionOnSuccess && setTimeout(actionOnSuccess, 400)
    }
    window.analytics &&
      window.analytics.track("Clicked Button", {
        email,
        category: analyticsOptions.category,
        event: "Clicked Button",
        label: analyticsOptions.label,
      })
  }
    const handleGtm = (event: string) => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event,
    })
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
  const {
    isSubmitting,
    setSubmitting,
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      company: "",
      jobtitle: "",
      email: email ? email : "",
      ...(optionalField && {[optionalField.name]: '' }),
      terms_checkbox: false
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(50, "Must be 50 characters or less")
        .required("Required"),
      lastname: Yup.string()
        .max(50, "Must be 50 characters or less")
        .required("Required"),
      company: Yup.string()
        .max(50, "Must be 50 characters or less")
        .required("Required"),
      [optionalField ? optionalField.name : undefined]: Yup.string().max(
        50,
        "Must be 50 characters or less"
      ),
      email: Yup.string()
        .required("Required")
        .email("Invalid email address")
        .test("email", "Please enter a business email address", (value) => {
          if (value) {
            const domain = value.split("@")[1]
            if (domainsExcluded.indexOf(domain) === -1) {
              return true
            } else {
              return new Yup.ValidationError(
                "Please enter a business email address",
                value,
                "email"
              )
            }
          } else {
            return true
          }
        })
        .test("email", "Please enter a valid email address", function(value) {
          if (value && this.parent.terms_checkbox) {
            return fetch(
              `https://cm-website-functions.netlify.app/.netlify/functions/email-validation/`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: value }),
              }
            )
              .then((data) => data.json())
              .then((result) => {
                const { valid } = result
                return valid
              })
              .catch(() => false)
          } else {
            return true
          }
        }),

      terms_checkbox: Yup.bool().oneOf(
        [true],
        "Accept Terms & Conditions is required"
      ),
    }),
    onSubmit: (values: { [key: string]: any }, { resetForm }) => {
      setSubmitting(true)
      setMessage("")
      const fields: { name: string; value: string }[] = []
      Object.keys(values)
        .filter((e) => e !== "terms_checkbox" && e !== "undefined")
        .forEach((key) => {
          fields.push({ name: key, value: values[key] })
        })
      const context = {
        hutk: getCookie("hubspotutk"),
        pageUri: `${siteUrl}${location.pathname}`,
        pageName: `${siteUrl}${location.pathname}`,
      }
      const formData = { fields, context }
      const newsletterSubscriptionData = {
        fields: [{ name: "email", value: values.email }],
        context,
      }
      const solutionDemoData = {
        fields: [
          { name: "firstname", value: values.firstname },
          { name: "lastname", value: values.lastname },
          { name: "company", value: values.company },
          { name: "email", value: values.email },
          { name: "jobtitle", value: values.jobtitle },
        ],
        context,
      }
      // subscribe to sendNewsletterForm
      console.log(values.terms_checkbox);
      
      if (values.terms_checkbox && sendNewsletterForm) {
        axios
          .post(
            `https://api.hsforms.com/submissions/v3/integration/submit/${hubspotOptions.portalId ||
              hubspotConfig.portalId}/${hubspotOptions.newsletterFormId ||
              hubspotConfig.newsletter_formId}`,
            JSON.stringify(newsletterSubscriptionData, null, 2),
            { headers: { "content-type": "application/json" } }
          )
          .then((response) => {
            const {
              status,
              data: { inlineMessage },
            } = response
            if (status !== 200) {
              console.log(
                "sendNewsletterForm subscription failed: ",
                inlineMessage
              )
            } else {
              handleGtm("Newsletter Subscription")
            }
            if (!sendSolutionDemoForm && !sendForm) {
              setMessage(inlineMessage)
              setSubmitting(false)
              if (status === 200) {
                handleClick(values.email)
                resetForm()
              }
            }
          })
          .catch((error) => {
            console.log("catch - sendNewsletterForm subscription", error)
            if (!sendSolutionDemoForm && !sendForm) {
              setMessage("Error. Form hasn't been sent. Contact admin")
              setSubmitting(false)
            }
          })
      }
      // received solution demo
      if (values.terms_checkbox && sendSolutionDemoForm) {
        axios
          .post(
            `https://api.hsforms.com/submissions/v3/integration/submit/${hubspotOptions.portalId ||
              hubspotConfig.portalId}/${hubspotOptions.solutionDemoFormId ||
              hubspotConfig.solution_demo_formId}`,
            JSON.stringify(solutionDemoData, null, 2),
            { headers: { "content-type": "application/json" } }
          )
          .then((response) => {
            const {
              status,
              data: { inlineMessage },
            } = response
            if (status !== 200) {
              console.log("Solution demo request failed: ", inlineMessage)
            } else {
              handleGtm("Solution Demo Request")
            }
            if (!sendForm) {
              setMessage(inlineMessage)
              setSubmitting(false)
              if (status === 200) {
                handleClick(values.email)
                resetForm()
              }
            }
          })
          .catch((error) => {
            console.log("catch - solution demo request", error)
            if (!sendForm) {
              setMessage("Error. Form hasn't been sent. Contact admin")
              setSubmitting(false)
            }
          })
      }
      // sent info to form
      if (values.terms_checkbox && sendForm) {
        axios
          .post(
            `https://api.hsforms.com/submissions/v3/integration/submit/${hubspotOptions.portalId ||
              hubspotConfig.portalId}/${hubspotOptions.formId ||
              hubspotConfig.formId}`,
            JSON.stringify(formData, null, 2),
            { headers: { "content-type": "application/json" } }
          )
          .then((response) => {
            const {
              data: { inlineMessage },
            } = response
            const { status } = response
            setMessage(inlineMessage)
            setSubmitting(false)
            if (status === 200) {
              handleClick(values.email)
              resetForm()
            }
          })
          .catch((error) => {
            console.log({ error })
            setMessage("Error. Form hasn't been sent. Contact admin")
            setSubmitting(false)
          })
      }
    },
  })
  return {
    isSubmitting,
    setSubmitting,
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
    resultMessage
  }
}
 
export default handleFormSubmit;