import React, { useState, useRef, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Transition } from "react-transition-group";
import Loader from "react-loader-spinner";

import { $colorSecondary } from "../../styles/variables";

import {
  StyledForm,
  ControlField,
  StyledInput,
  FieldMessage,
  ButtonWrapper,
  StyledButton,
  StyledLabel,
  ResultWrapper,
  ResultMessage,
  StyledText
} from "./contact-form.styled";

const duration = 300;
const defaultStyle = {
  transition: `color ${duration}ms cubic-bezier(0.325, 0.09, 0, 1.28)`,
  opacity: `${$colorSecondary}`
};

const transitionStyles = {
  entering: { color: `${$colorSecondary}` },
  entered: { color: `${$colorSecondary}` },
  exiting: { color: "transparent" },
  exited: { color: "transparent" }
};

interface StaticQueryData {
  site: {
    siteMetadata: {
      hubspotConfig: {
        portalId: string;
        formId: string;
        domainsExcluded: string[];
      };
    };
  };
}

interface ContactFormProps {
  email?: string;
}
const ContactForm = ({ email }: ContactFormProps) => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const [resultMessage, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (firstNameRef.current !== null) {
      firstNameRef.current.focus();
    }
  }, []);

  const {
    site: {
      siteMetadata: {
        hubspotConfig: { portalId, formId, domainsExcluded }
      }
    }
  }: StaticQueryData = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            hubspotConfig {
              portalId
              formId
              domainsExcluded
            }
          }
        }
      }
    `
  );

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      company: "",
      email: email ? email : ""
    },
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
      email: Yup.string()
        .email("Invalid email address")
        .test("email", "Please enter a business email address", value => {
          if (value) {
            const domain = value.split("@")[1];
            const domainName = domain.split(".")[0];
            if (domainsExcluded.indexOf(domainName) === -1) {
              return true;
            } else {
              throw new Yup.ValidationError(
                "Please enter a business email address",
                value,
                "email"
              );
            }
          } else {
            return true;
          }
        })
        .required("Required")
    }),
    onSubmit: (values: { [key: string]: any }, { resetForm }) => {
      setMessage("");
      setLoading(true);
      const fields: { name: string; value: string }[] = [];
      Object.keys(values).forEach(key => {
        fields.push({ name: key, value: values[key] });
      });
      const data = { fields };
      axios
        .post(
          `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`, // GetForm, Hubspot API endpoint isn't working.
          JSON.stringify(data, null, 2),
          { headers: { "content-type": "application/json" } }
        )
        .then(response => {
          const {
            data: { inlineMessage }
          } = response;
          const { status } = response;
          setMessage(inlineMessage);
          setLoading(false);
          if (status === 200) {
            // The form submission was successful
            resetForm({});
            // Wrap the require in check for window
            // if (typeof window !== `undefined`) {
            //   window.open(
            //     "https://app.hubspot.com/meetings/jack123/30-minute-intro-to-chattermill",
            //     "_self"
            //   )
            // }
          }
        })
        .catch(error => {
          console.log("catch", error);
          setMessage("Error. Form hasn't been sent. Contact administrator");
          setLoading(false);
        });
    }
  });
  return (
    <>
      <StyledForm onSubmit={formik.handleSubmit}>
        <ControlField>
          <StyledLabel htmlFor="firstname">First name*</StyledLabel>
          <StyledInput
            error={!!formik.touched.firstname && !!formik.errors.firstname}
            ref={firstNameRef}
            id="firstname"
            name="firstname"
            type="text"
            placeholder="First name"
            onChange={formik.handleChange}
            value={formik.values.firstname}
          />
          <FieldMessage
            show={!!formik.touched.firstname && !!formik.errors.firstname}
          >
            {formik.errors.firstname}
          </FieldMessage>
        </ControlField>

        <ControlField>
          <StyledLabel htmlFor="lastname">Last name*</StyledLabel>
          <StyledInput
            error={!!formik.touched.lastname && !!formik.errors.lastname}
            id="lastname"
            name="lastname"
            type="text"
            placeholder="Last name"
            onChange={formik.handleChange}
            value={formik.values.lastname}
          />
          <FieldMessage
            show={!!formik.touched.lastname && !!formik.errors.lastname}
          >
            {formik.errors.lastname}
          </FieldMessage>
        </ControlField>

        <ControlField>
          <StyledLabel htmlFor="company">Company name*</StyledLabel>
          <StyledInput
            error={!!formik.touched.company && !!formik.errors.company}
            id="company"
            name="company"
            type="text"
            placeholder="Company name"
            onChange={formik.handleChange}
            value={formik.values.company}
          />
          <FieldMessage
            show={!!formik.touched.company && !!formik.errors.company}
          >
            {formik.errors.company}
          </FieldMessage>
        </ControlField>

        <ControlField>
          <StyledLabel htmlFor="email">Work email*</StyledLabel>
          <StyledInput
            error={!!formik.touched.email && !!formik.errors.email}
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            placeholder="you@company.com"
            value={formik.values.email}
          />
          <FieldMessage show={!!formik.touched.email && !!formik.errors.email}>
            {formik.errors.email}
          </FieldMessage>
        </ControlField>

        <ButtonWrapper submitting={loading}>
          {loading && (
            <Loader
              className="loader"
              type="ThreeDots"
              color="#ffffff"
              height={15}
              width={80}
            />
          )}
          <StyledButton
            submitting={loading}
            as="input"
            type="submit"
            value="Request demo"
            wide
            disabled={loading}
          />
        </ButtonWrapper>
      </StyledForm>
      <ResultWrapper>
        <Transition in={!!resultMessage} timeout={duration}>
          {(state: "entering" | "entered" | "exiting" | "exited") => (
            <ResultMessage
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
            >
              <StyledText>{resultMessage}</StyledText>
            </ResultMessage>
          )}
        </Transition>
      </ResultWrapper>
    </>
  );
};

export default ContactForm;
