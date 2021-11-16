import React from "react"

import { StyledLink, StyledLink2, ButtonWrapper } from "./email-form.styled"

export const EmailForm = () => {
  const handleSalesClick = () => {
    window.analytics &&
      window.analytics.track("Clicked Button", {
        email: "dummy@dummy.com",
        label: "Clicked Request Demo Button",
      })
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: "Request Demo Click",
    })
  }

  const handleDemoClick = () => {
    window.analytics &&
      window.analytics.track("Clicked Button", {
        email: "dummy@dummy.com",
        label: "Clicked Try Free Demo Button",
      })
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: "Try for Free Click",
    })
  }

  return (
    <ButtonWrapper>
      <StyledLink
        href="https://app.chattermill.com/signup"
        onClick={handleDemoClick}
      >
        <div className="button-1">Try For Free</div>
      </StyledLink>
      <StyledLink2 href="/book-demo?ref=homepage/" onClick={handleSalesClick}>
        <div className="button-2">Request Demo</div>
      </StyledLink2>
    </ButtonWrapper>
  )
}

export default EmailForm
