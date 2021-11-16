import React from "react"
import { Container } from "react-awesome-styled-grid"
import { StyledSection, StyledCollapsible, StyledText } from "./faq.styled"
import { Link } from "gatsby"
import UniversalLink from "../universal-link"
import "./styles.css"

const FAQ = () => {
  return (
    <StyledSection>
      <Container>
        <div id="difference-in-plans">
          <StyledCollapsible
            trigger="What's the difference between Free, Team and Enterprise plans?"
            easing={"cubic-bezier(0.175, 0.885, 0.32, 2.275)"}
            contentInnerClassName="contentInnerClassName"
            triggerOpenedClassName="triggerOpenedClassName"
            contentOuterClassName="contentOuterClassName"
            lazyRender
            transitionTime={400}
          >
            <StyledText>
              Each organisation belongs to a Free, Teams or Enterprise tier. Our
              Free plan includes platform access and applies when the
              organisations only have this free tier in their account.
            </StyledText>
            <StyledText>
              Customers on paid plans through self-service are on the Teams
              tier; these projects provide a wider range of setup and volume
              limits and require credit card sign ups.
            </StyledText>
            <StyledText>
              The Enterprise includes advanced features and professional
              services, training and fewer limitations with customised pricing
              based on your requirements. You can upgrade to the Enterprise tier
              by getting <Link to="book-demo">in touch </Link>with our sales
              team.
            </StyledText>
            <StyledText>
              Each tier has different limits and support, please get{" "}
              <Link to="book-demo"> in touch </Link> if you need any more
              information.
            </StyledText>
          </StyledCollapsible>
        </div>
        <div id="how-many-users-i-get">
          <StyledCollapsible
            trigger="How many users do I get?"
            easing={"cubic-bezier(0.175, 0.885, 0.32, 2.275)"}
            contentInnerClassName="contentInnerClassName"
            triggerOpenedClassName="triggerOpenedClassName"
            contentOuterClassName="contentOuterClassName"
            lazyRender
            transitionTime={400}
          >
            <StyledText>
              Our Free tier offers 20 free users. Upgrading to a paid plan
              expands to a total of 50 users for Teams and unlimited additional
              users for Enterprise plans.
            </StyledText>
          </StyledCollapsible>
        </div>
        <div id="hitting-volume-limit">
          <StyledCollapsible
            trigger="What happens when I hit my volume limit?"
            easing={"cubic-bezier(0.175, 0.885, 0.32, 2.275)"}
            contentInnerClassName="contentInnerClassName"
            triggerOpenedClassName="triggerOpenedClassName"
            contentOuterClassName="contentOuterClassName"
            lazyRender
            transitionTime={400}
          >
            <StyledText>
              Once you reach your monthly volume limit, you will not be able to
              process any more customer feedback. If you need to increase your
              monthly volumes, you can upgrade to a different plan with a higher
              limit suited to your requirements.
            </StyledText>
          </StyledCollapsible>
        </div>
        <div id="payment-methods">
          <StyledCollapsible
            trigger="What payment methods do you accept?"
            easing={"cubic-bezier(0.175, 0.885, 0.32, 2.275)"}
            contentInnerClassName="contentInnerClassName"
            triggerOpenedClassName="triggerOpenedClassName"
            contentOuterClassName="contentOuterClassName"
            lazyRender
            transitionTime={400}
          >
            <StyledText>
              Teams customers can pay for subscriptions with a credit card.
              Enterprise customers have the option of invoiced billing.
            </StyledText>
          </StyledCollapsible>
        </div>
        <div id="i-have-more-questions">
          <StyledCollapsible
            trigger="What if I have more questions?"
            easing={"cubic-bezier(0.175, 0.885, 0.32, 2.275)"}
            contentInnerClassName="contentInnerClassName"
            triggerOpenedClassName="triggerOpenedClassName"
            contentOuterClassName="contentOuterClassName"
            lazyRender
            transitionTime={400}
          >
            <StyledText>
              Try searching for what you need in our Help & Support site. If you
              don't find what you're looking for, you can get help{" "}
              <UniversalLink href="https://docs.chattermill.io/en/">
                here.
              </UniversalLink>
            </StyledText>
          </StyledCollapsible>
        </div>
      </Container>
    </StyledSection>
  )
}

export default FAQ
