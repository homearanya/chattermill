import React from "react"
import Helmet from "react-helmet"

import {
  StyledContainer,
  Heading,
  StyledButton,
  SignIn,
  MeetingContainer,
} from "./sign-up-cta.styled"
interface SignUpMeetingProps {
  hasSignedUp: boolean
  showMeeting: boolean
}
export const SignUpMeeting = ({
  hasSignedUp,
  showMeeting,
  ...props
}: SignUpMeetingProps) => {
  const heading = hasSignedUp
    ? "Easy cowboy, save some comments for the trial!  Book your onboarding call to get started "
    : "Sign up for free to analyse more feedback"
  let meetingStyles = {}
  if (!hasSignedUp || !showMeeting) {
    meetingStyles = {
      width: 0,
      height: 0,
      overflow: "hidden",
    }
  }
  let buttonStyles = {}
  if (hasSignedUp) {
    buttonStyles = {
      width: 0,
      height: 0,
      overflow: "hidden",
      transform: "scale(0)",
    }
  }
  return (
    <>
      {/* Hubspot meeting */}
      {/* <Helmet>
        <script
          defer
          type="text/javascript"
          src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
        ></script>
      </Helmet> */}
      <StyledContainer {...props} hasSignedUp={hasSignedUp}>
        <Heading>{heading}</Heading>
        <MeetingContainer
          className="meetings-iframe-container"
          data-src="https://meetings.chattermill.com/meetings/jack123/chattermill-onboarding-demo?embed=true"
          style={{ ...meetingStyles }}
        />
        <StyledButton
          as="a"
          href="https://app.chattermill.com/signup?ref=try-text-analytics"
          style={{ ...buttonStyles }}
        >
          Sign Up
        </StyledButton>
        <SignIn hasSignedUp={hasSignedUp}>
          Already have an account?{" "}
          <a href="https://app.chattermill.io/">Sign in</a>.
        </SignIn>
      </StyledContainer>
    </>
  )
}

export default SignUpMeeting
