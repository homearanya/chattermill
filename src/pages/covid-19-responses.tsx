import React from "react";
import { Container } from "react-awesome-styled-grid";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import greenLight from "../images/flashing-green.svg";

const CovidResponsePage = () => {
  return (
    <Layout>
      <SEO
        title={"COVID-19 Response"}
        description={
          "Chattermill COVID-19 response page. A database showing how brands across different verticals are responding to COVID-19 across the world."
        }
      />
      <Section>
        <StyledContainerHeader>
          <StyledHeader>
            Customer-Centric Responses to Covid-19 Outbreak
          </StyledHeader>
          <StyledText>
            Sharing and letting the most relevant knowledge find you at a time
            when you need it the most.
          </StyledText>
        </StyledContainerHeader>
        <StyledContainer
          style={{
            backgroundColor: "#332e5e",
            width: "100%"
          }}
        >
          <StyledHeader2>
            Contribute{" "}
            <a
              href="https://chattermill.typeform.com/to/DnBs8z"
              target="_blank"
              style={{
                color: "#ffff"
              }}
            >
              here
            </a>
          </StyledHeader2>
          <AnimationWrapper>
            <StyledImage
              src={greenLight}
              alt="alt text"
              height="25px"
              width="25px"
            />
            <StyledSpan>Updating Live</StyledSpan>
          </AnimationWrapper>
          <iframe
            src="https://airtable.com/embed/shrpCwLgK64HcsnNF?backgroundColor=cyan&viewControls=on"
            width="100%"
            height="800"
            style={{
              background: "transparent; border: 1px solid #ccc;",
              padding: "1rem 3rem 3rem 3rem",
              margin: "0 auto"
            }}
          ></iframe>
          <Container>
            <StyledHeader>Disclaimer</StyledHeader>
            <StyledText>
              The data on this list is user-generated and not verified by
              Chattermill.
            </StyledText>
            <StyledText>
              The views expressed are those of individual authors, as noted by
              the sources, and may not be free from errors or inaccuracies.
            </StyledText>
            <StyledText>
              This article is not a substitute for professional, management,
              financial, legal, medical, investment or regulatory advice. You
              should not act, or refrain from acting, on the basis of this
              information without doing your own research and seeking
              appropriate professional advice.
            </StyledText>
          </Container>
        </StyledContainer>
        <StyledContainer>
          <StyledMediumHeading>Why do this?</StyledMediumHeading>
          <StyledTextColor>
            Tenacity and customer-focus are necessary today more than ever.
          </StyledTextColor>
          <StyledTextColor>
            We created this Airtable with the support of many generous
            contributors to help us all understand how many different companies
            are responding to Covid-19.
          </StyledTextColor>
          <StyledTextColor>
            The table displays many admirable and creative business responses
            during the coronavirus crisis so far. We hope that these
            out-of-the-box ideas can assist you in managing your teams better
            and in planning for the future.
          </StyledTextColor>
          <StyledTextColor>
            Help us share all this indispensable knowledge with the rest of the
            business community so we can all get through this together as
            unscathed as possible by having best practices available to those
            who need it most during this difficult time.
          </StyledTextColor>
          <StyledTextColor>
            We also welcome any feedback you might have to help us support this
            community of missionary companies. Just email us at{" "}
            <a href="mailto:joao@chattermill.io?subject=COVID-19 Response">
              joao@chattermill.io
            </a>
          </StyledTextColor>
          <StyledTextColor>Keep safe and optimistic out there!</StyledTextColor>
          <StyledTextColor>Chattermill Team</StyledTextColor>

          {/* <StyledMediumHeading>Guide to Table</StyledMediumHeading>
          <StyledTextColor>
            <ol>
              <StyledList>
                Jot down the helpful and creative ways in which your
                organization is supporting your community and customers, and
                dealing with Covid-19 in a customer-centric way.
              </StyledList>
              <StyledList>
                Add or amend any detail as see fit in regards to the following:
                Market, Sector, Country, Category Response and Response Summary.
              </StyledList>
              <StyledList>
                Always put the source and reference where you acquired or are
                bringing the information from.
              </StyledList>
            </ol>
          </StyledTextColor> */}
        </StyledContainer>

        <StyledContainer
          style={{
            paddingTop: "0px"
          }}
        >
          <StyledMediumHeading
            style={{
              textAlign: "center",
              padding: "40px"
            }}
          >
            Extra Resources
          </StyledMediumHeading>
          <ul>
            <StyledList>
              <StyledLink target="_blank" href="https://helpwithcovid.com/">
                Help With COVID
              </StyledLink>
            </StyledList>
            <StyledList>
              <StyledLink
                target="_blank"
                href="https://www.worldbank.org/en/about/what-we-do/brief/world-bank-group-operational-response-covid-19-coronavirus-projects-list"
              >
                {" "}
                World Bank Covid-19 Project List
              </StyledLink>
            </StyledList>
            <StyledList>
              <StyledLink
                target="_blank"
                href="https://www.weforum.org/agenda/2020/03/how-are-companies-responding-to-the-coronavirus-crisis-d15bed6137/"
              >
                {" "}
                How are Companies Responding to the Coronavirus Crisis
              </StyledLink>
            </StyledList>
            <StyledList>
              <StyledLink
                target="_blank"
                href="https://a16z.com/2020/03/08/novel-coronavirus-and-covid-19-disease-resources-readings/"
              >
                {" "}
                Andreessen Horowitz Covid-19 Resources List
              </StyledLink>
            </StyledList>
            <StyledList>
              <StyledLink
                target="_blank"
                href="https://www.notion.so/41582e47d9854f4dbd62fe14dc56c4b6?v=094e56bc46574ffa8e3c20aa05b133c1"
              >
                {" "}
                COVID R&D Funding Sources
              </StyledLink>
            </StyledList>
            <StyledList>
              <StyledLink
                target="_blank"
                href="https://www.svangel.com/covid-19resources"
              >
                {" "}
                SV Angel Covid-19 Resources List
              </StyledLink>
            </StyledList>
            <StyledList>
              <StyledLink
                target="_blank"
                href="https://justcapital.com/reports/the-covid-19-corporate-response-tracker-how-americas-largest-employers-are-treating-stakeholders-amid-the-coronavirus-crisis/"
              >
                {" "}
                JUST Capital COVID-19 Corporate Response Tracker
              </StyledLink>
            </StyledList>
            <StyledList>
              <StyledLink
                target="_blank"
                href="https://hbswk.hbs.edu/item/what-customers-need-to-hear-from-you-during-the-covid-crisis"
              >
                {" "}
                What Customers Need To Hear From You During The Covid Crisis
              </StyledLink>
            </StyledList>
          </ul>
        </StyledContainer>
      </Section>
    </Layout>
  );
};

export default CovidResponsePage;

const Section = styled.section``;

const StyledHeader = styled.h1`
  font-size: 4rem;
  color: #ffff;
  text-align: center;
  padding-top: 10rem;
`;

const StyledHeader2 = styled.h1`
  font-size: 4rem;
  color: #ffff;
  text-align: center;
  padding-bottom: 3rem;
`;

const StyledMediumHeading = styled.h2`
  font-size: 3rem;
  color: #332e5e;
  text-align: left;
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin: 1em 1em 1em 0.5em;
`;

const StyledText = styled.p`
  font-size: 2rem;
  color: #ffff;
  text-align: center;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #332e5e;
`;

const StyledList = styled.li`
  font-size: 2rem;
  color: #332e5e;
  text-align: left;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  margin-left: 30px;
`;

const StyledTextColor = styled.p`
  font-size: 2rem;
  color: #332e5e;
  text-align: left;
  padding: 1em;
`;

const AnimationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const StyledSpan = styled.span`
  font-size: 2rem;
  color: #ffff;
  padding: 1rem;
  text-align: center;
`;

const StyledContainer = styled(Container)`
  padding: 5rem 12rem 5rem 12rem;
`;

const StyledContainerHeader = styled(Container)`
  padding-top: 8rem;
  padding-bottom: 10rem;
  background-color: #332e5e;
  width: 100% !important;
`;

export const StyledButton = styled.button`
  background-color: #ffff;
  height: 100px;
  justify-content: center;
  width: 100px;
  &&,
  &&:link,
  &&:visited {
    padding-left: 25px;
    padding-right: 25px;
    border-radius: 3px;
    margin: 20px;
    height: 45px;
    width: 220px;
  }

  @media (max-width: 320px) {
    font-size: 11px !important;
  }
`;

const StyledImage = styled.img``;
