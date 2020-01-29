import React from "react"
import { Link } from "gatsby"
import { Container } from "react-awesome-styled-grid"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BrandsSection2 from "../components/brands-section-2"

import "../styles/scss/styles.scss"

const Security = () => (
  <Layout className="security-page">
    <SEO
      title="Security"
      description="Next Generation Customer Experience Analytics"
    />
    <section
      className="security-section"
      style={{ maxWidth: "100rem", margin: "0 auto" }}
    >
      <Container>
        <h1 style={{ textAlign: "center", margin: "4rem 0" }}>
          Chattermill Security
        </h1>
        <h3 id="introduction">Introduction</h3>
        <p>
          Chattermill is, at the heart of it, a data company. Protecting the
          data our customers have entrusted us with is is our primary concern
          from day one. While it is not a good practice to provide a detailed
          overview of specific security measures taken, we believe it is
          important for our customers to be aware of some of the general steps
          we take to protect their data. If you have specific security concerns,
          please reach out to{" "}
          <a
            href="/cdn-cgi/l/email-protection"
            className="__cf_email__"
            data-cfemail="7b081e180e09120f023b18131a0f0f1e091612171755121455"
            target="_blank"
          >
            [email&#160;protected]
          </a>
        </p>
        <p>
          This document is intended to complement our{" "}
          <Link to="/terms/">Terms</Link>,{" "}
          <Link to="/terms#privacy">Privacy Policy</Link> and{" "}
          <Link to="/vulnerability-disclosure-policy/">
            Vulnerability Disclosure Policy
          </Link>
          .
        </p>
        <h3 id="data-centre-security">Data Centre Security</h3>
        <ul>
          <li>
            All Chattermill servers and data are stored on the infrastructure
            provided by the leading cloud companies including{" "}
            <a
              href="https://aws.amazon.com/security"
              target="_blank"
              rel="noopener noreferrer"
            >
              Amazon
            </a>
            ,{" "}
            <a
              href="https://www.digitalocean.com/security/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Digital Ocean
            </a>{" "}
            and{" "}
            <a
              href="https://cloud.google.com/security/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google
            </a>
            .
          </li>
          <li>
            We therefore benefit from significant investment these companies
            have made into security.
          </li>
          <li>All data is always stored exclusively within EU.</li>
          <li>
            We have multiple levels of back up processes to minimise data loss
            in case of an attack or system failure.
          </li>
          <li>
            All backups are encrypted and stored in secure cloud locations
            within EU.
          </li>
          <li>
            All traffic to and from our data servers is conducted over HTTPS and
            is thus encrypted.
          </li>
        </ul>
        <h3 id="application-level-security">Application Level Security</h3>
        <ul>
          <li>
            Chattermill account passwords are hashed. Our own staff can&apos;t
            even view them. If you lose your password, it can&apos;t be
            retrieved—it must be reset.
          </li>
          <li>
            All login pages (from our website and mobile website) pass data via
            TLS.
          </li>
          <li>The entire Chattermill application is encrypted with TLS.</li>
          <li>
            We utilise Auth0 for Login and session management functionality and
            thus benefit from their extensive{" "}
            <a
              href="https://auth0.com/security"
              target="_blank"
              rel="noopener noreferrer"
            >
              security measures
            </a>
            .
          </li>
          <li>
            We perform regular security penetration tests, using different
            vendors. The tests involve high-level server penetration tests,
            in-depth testing for vulnerabilities inside the application, and
            social engineering drills.
          </li>
          <li>
            Where possible we minimise the amount of personally identifiable
            data we collect about from our customers’ users. Chattermill system
            can fully function without any personally identifiable data being
            passed to us, however, some companies may prefer to do so anyway.
          </li>
          <li>
            Where possible, we rely on well-established open source software to
            avoid any potential for malware.
          </li>
        </ul>
        <h3 id="internal-it-security">Internal IT Security</h3>
        <ul>
          <li>The Chattermill office is secured by keycard access.</li>
          <li>
            We mandate usage of secure passwords across all third party software
            in use by the Chattermill team. Additionally, where offered we
            employ 2-factor authentication.
          </li>
          <li>
            We perform security audits on any third party software in use by the
            Chattermill team.
          </li>
          <li>
            We mandate full disk encryption and latest versions of anti-virus
            and firewall software across every computer used by the Chattermill
            team to access client data.
          </li>
          <li>
            We protect every computer in use within Chattermill with a secure
            password and additional security measures where possible.
          </li>
          <li>
            Every employee undergoes security training to understand the
            importance of protecting customer data.
          </li>
        </ul>
      </Container>
    </section>
    <BrandsSection2 borderBottom withObserver />
  </Layout>
)

export default Security
