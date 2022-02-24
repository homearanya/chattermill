import { graphql, useStaticQuery, navigate } from "gatsby"
import * as React from "react"
import handleFormSubmit from "../../utils/handle-submit-form"
import {
  Container,
  Form,
  Fields,
  Agreement,
  Checkbox,
} from "./book-demo-form.styled"
import Loader from "react-loader-spinner"

interface BookDemoFormProps {
  data: {
    background: {
      publicURL: string
    }
    title: string
    subTitle: string
    button: {
      text: string
    }
    fields: {
      label: string
      type: string
      id: string
    }[]
  }
}
interface PageQueryData {
  site: {
    siteMetadata: {
      hubspotConfig: {
        portalId: string
        chattermill_classic_formId: string
        newsletter_formId: string
      }
    }
  }
}

const BookDemoForm: React.FC<BookDemoFormProps> = ({ data }) => {
  const { background, title, fields, button } = data
  const staticData: PageQueryData = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            hubspotConfig {
              portalId
              newsletter_formId
              chattermill_classic_formId
            }
          }
        }
      }
    `
  )
  const {
    site: {
      siteMetadata: {
        hubspotConfig: {
          portalId,
          chattermill_classic_formId,
          newsletter_formId,
        },
      },
    },
  } = staticData

  const hubspotOptions = {
    portalId,
    newsletterFormId: newsletter_formId,
    formId: chattermill_classic_formId,
  }
  const analyticsOptions = {
    category: "All",
    label: "Demo Button Click (book-demo)",
  }
  const onSuccess = () => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: "Request Demo Click",
    })
    navigate("/thank-you-get-a-demo/")
  }

  const {
    isSubmitting,
    handleSubmit,
    handleChange,
    values,
    errors,
  } = handleFormSubmit({
    hubspotOptions,
    analyticsOptions,
    actionOnSuccess: onSuccess,
  })

  return (
    <Container style={{ background: `url(${background.publicURL})` }}>
      {/* <Helmet>
        {!Object.values(values).some(value => !value) &&
          <script>
            {`
              function q(a) { return function () { ChiliPiper[a].q = (ChiliPiper[a].q || []).concat([arguments]) } }window.ChiliPiper=window.ChiliPiper||"submit scheduling showCalendar submit widget bookMeeting".split(" ").reduce(function(a,b){a[b] = q(b);return a},{ });
              ChiliPiper.scheduling("chattermill", "request-demo-router", {title: "Thanks! What time works best for a quick call?"})
            `}
          </script>}
      </Helmet> */}
      <Form
        onSubmit={!Object.values(values).some(value => !value) && handleSubmit}
      >
        <h1>{title}</h1>
        <Fields>
          {fields.map(field => (
            <div>
              <input
                className={values[field.id] && "filled"}
                value={values[field.id]}
                id={field.id}
                type={field.type}
                name={field.id}
                onChange={handleChange}
              />
              <label>{field.label}</label>
              <span>{errors[field.id]}</span>
            </div>
          ))}
        </Fields>
        <Agreement>
          <Checkbox>
            <input
              id="terms_checkbox"
              name="terms_checkbox"
              type="checkbox"
              checked={values.terms_checkbox}
              onChange={handleChange}
            />
            <span className="check"></span>
          </Checkbox>
          <label htmlFor="terms_checkbox">
            <p>
              I agree to receiving comms in line with Chattermill’s Privacy and
              Cookies Policy.
            </p>
            <span>{errors.terms_checkbox}</span>
          </label>
        </Agreement>
        <button
          type="submit"
          className={Object.values(values).some(v => !v) && "disabled"}
        >
          {isSubmitting ? (
            <Loader
              className="loader"
              type="ThreeDots"
              color="inherit"
              height={15}
              width={80}
            />
          ) : (
            button.text
          )}
        </button>
      </Form>
    </Container>
  )
}

export default BookDemoForm
