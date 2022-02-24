import React, { useState, useEffect } from "react";
import { navigate } from "gatsby";
import { Transition } from "react-transition-group";
import { useCookies } from "react-cookie";
import { useLocation } from "@reach/router";
import queryString from "query-string";

import { addDays } from "../../../utils/helpers";

import { StyledContainer, Heading } from "../../sign-up-cta/sign-up-cta.styled";
import animationWebm from "./logo-animation.webm";
import animationMp4 from "./logo-animation.mp4";
import SentimentCard from "./sentiment-card";
import { $colorSecondary } from "../../../styles/variables";
import {
  FormWrapper,
  StyledHeading,
  StyledForm,
  StyledTextArea,
  ControlField,
  ButtonWrapper,
  StyledButton,
  ResultWrapper,
  ResultMessage,
  StyledText,
  StyledAnimation,
  SentimentCardsWrapper,
  StyledModal,
  StyledSignUpCTA,
  Info
} from "./try-text-analytics-form.styled";

const duration = 300;
const defaultStyle = {
  transition: `color ${duration}ms cubic-bezier(0.325, 0.09, 0, 1.28)`,
  opacity: `${$colorSecondary}`
};

const loaderTransitionStyles = {
  entering: { opacity: 1, transform: "scale(1) translate(-50%, -50%)" },
  entered: { opacity: 1, transform: "scale(1) translate(-50%, -50%)" },
  exiting: { opacity: 0, transform: "scale(0) translate(-50%, -50%)" },
  exited: { opacity: 0, transform: "scale(0) translate(-50%, -50%)" }
};
const transitionStyles = {
  entering: { color: `${$colorSecondary}` },
  entered: { color: `${$colorSecondary}` },
  exiting: { color: "transparent" },
  exited: { color: "transparent" }
};

const cookiesConfig = { name: "ttaaleft", maxAttempts: 5, extraAttempts: 15 };

interface TryTextAnalyticsFormProps {
  pathname: string;
}

const TryTextAnalyticsForm = ({ pathname }: TryTextAnalyticsFormProps) => {
  // check if called with url query params
  const location = useLocation();
  let queryParams;
  if (location.search) {
    queryParams = queryString.parse(location.search);
  }

  const [cookies, setCookie] = useCookies([cookiesConfig.name]);
  const [
    { attemptsLeft, hasSignedUp, meetingShown },
    setAttemptsLeft
  ] = useState({
    attemptsLeft: null,
    hasSignedUp: false,
    meetingShown: false
  });
  const [resultMessage, setResultMessage] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState("");
  const [openForm, setOpenForm] = useState(false);
  const [successSignup, setSuccessSignup] = useState(false);
  const [showMeeting, setShowMeeting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.persist();
    setResults([]);
    setResultMessage("");
    setComment(e.target.value);
  };

  const handleFocus = () => {
    if (results.length > 0) {
      setResults([]);
      setResultMessage("");
      setComment("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (meetingShown) {
      setOpenForm(true);
    }
    if (attemptsLeft === 0 && hasSignedUp && !meetingShown) {
      setCookie(
        cookiesConfig.name,
        JSON.stringify({
          attemptsLeft: cookiesConfig.extraAttempts,
          hasSignedUp: true,
          meetingShown: true
        }),
        {
          path: pathname,
          expires: addDays(new Date(), 180)
        }
      );
      setAttemptsLeft({
        attemptsLeft: attemptsLeft,
        hasSignedUp: hasSignedUp,
        meetingShown: true
      });
      setShowMeeting(true);
      return setOpenForm(true);
    }
    if (attemptsLeft === 0 && !hasSignedUp) {
      return setOpenForm(true);
    }
    setResultMessage("");
    setLoading(true);
    // validate email to be a company email
    if (comment.length < 10) {
      setResultMessage("Please enter a longer comment");
      setLoading(false);
      return;
    }

    fetch(`https://core-api-01.staging.cloud.chattermill.xyz/absa`, {
      method: "POST",
      body: JSON.stringify({ comment }, null, 2),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GATSBY_CHATTERMILL_CORE_API_TOKEN}`
      }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data) {
          setResults(data.result);
          setCookie(
            cookiesConfig.name,
            JSON.stringify({
              attemptsLeft: attemptsLeft - 1,
              hasSignedUp,
              meetingShown
            }),
            {
              path: pathname,
              expires: addDays(new Date(), 180)
            }
          );
          setAttemptsLeft({
            attemptsLeft: attemptsLeft - 1,
            hasSignedUp,
            meetingShown
          });
          setLoading(false);

          fetch(`https://hooks.zapier.com/hooks/catch/1948336/o0sh1tw,b9nywic/`, {
            method: "POST",
            body: JSON.stringify(
              {
                comment: comment,
                tags: data.result
              },
              null,
              2
            )
          });
        }
      })
      .catch(error => {
        console.log("catch", error);
        setResultMessage(
          "Error. Form hasn't been sent. Template administrator"
        );
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!cookies[cookiesConfig.name]) {
      setCookie(
        cookiesConfig.name,
        JSON.stringify({
          attemptsLeft: cookiesConfig.maxAttempts,
          hasSignedUp: false,
          meetingShown: false
        }),
        {
          path: pathname,
          expires: addDays(new Date(), 180)
        }
      );
      setAttemptsLeft({
        attemptsLeft: cookiesConfig.maxAttempts,
        hasSignedUp: false,
        meetingShown: false
      });
      navigate(pathname);
      return;
    }
    const cookieObject = cookies[cookiesConfig.name];
    setAttemptsLeft({
      attemptsLeft: cookieObject.attemptsLeft,
      hasSignedUp: cookieObject.hasSignedUp,
      meetingShown: cookieObject.meetingShown
    });
    if (
      queryParams &&
      queryParams.ref &&
      queryParams.signup &&
      queryParams.ref === "signup-app" &&
      queryParams.signup === "yes"
    ) {
      if (cookieObject.hasSignedUp) {
        navigate(pathname);
        return;
      }
      setCookie(
        cookiesConfig.name,
        JSON.stringify({
          attemptsLeft: cookiesConfig.extraAttempts,
          hasSignedUp: true,
          meetingShown: false
        }),
        {
          path: pathname,
          expires: addDays(new Date(), 180)
        }
      );
      setOpenForm(true);
      setSuccessSignup(true);
      setAttemptsLeft({
        attemptsLeft: cookiesConfig.extraAttempts,
        hasSignedUp: true,
        meetingShown
      });
      navigate(pathname);
    }
  }, []);

  let heading;
  if (loading) {
    heading = "Analysing your Comment...";
  } else if (results && results.length > 0) {
    heading = "Feedback Details";
  } else {
    heading = "Test with your own comment";
  }
  return (
    <>
      <FormWrapper>
        <Transition in={loading} timeout={duration}>
          {(state: "entering" | "entered" | "exiting" | "exited") => (
            <StyledAnimation
              dangerouslySetInnerHTML={{
                __html: `
                <video autoplay loop muted playsinline>
                <source src="${animationWebm}" type="video/webm">
                <source src="${animationMp4}" type="video/mp4">
                </video>
              `
              }}
              style={{
                ...defaultStyle,
                ...loaderTransitionStyles[state]
              }}
            />
          )}
        </Transition>
        <StyledHeading>{heading}</StyledHeading>
        <StyledForm onSubmit={handleSubmit} submitting={loading}>
          <ControlField>
            <StyledTextArea
              placeholder="Test with your own comment"
              rows={6}
              onChange={handleChange}
              onFocus={handleFocus}
              value={comment}
              required
            />
          </ControlField>
          <SentimentCardsWrapper>
            {results && results.length > 0 && (
              <>
                {results.map(({ ...props }, index) => {
                  return <SentimentCard {...props} />;
                })}
                <Info>
                  This is for example purposes only using our universal model.
                  Theme and sentiment tags are completely unique and customised
                  on our paid plans.
                </Info>
              </>
            )}
          </SentimentCardsWrapper>
          <ButtonWrapper>
            <StyledButton
              as="input"
              type="submit"
              value="Analyse Feedback"
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
                <StyledText
                  style={{
                    color: "red"
                  }}
                >
                  {resultMessage}
                </StyledText>
              </ResultMessage>
            )}
          </Transition>
        </ResultWrapper>
      </FormWrapper>
      <StyledModal
        open={openForm && !successSignup}
        closeHandler={() => {
          setOpenForm(false);
          showMeeting && setShowMeeting(false);
        }}
        mountOnEnter={false}
      >
        <StyledSignUpCTA hasSignedUp={hasSignedUp} showMeeting={showMeeting} />
      </StyledModal>
      <StyledModal
        open={openForm && successSignup}
        closeHandler={() => {
          setOpenForm(false);
          setSuccessSignup(false);
        }}
      >
        <StyledContainer>
          <Heading>
            {`Your trial account is being prepared, in the meantime enjoy ${cookiesConfig.extraAttempts} more
            turns testing out our core model`}
          </Heading>
        </StyledContainer>
      </StyledModal>
    </>
  );
};

export default TryTextAnalyticsForm;
