import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Container } from "react-awesome-styled-grid"
import styled from "styled-components"
import media from "../../styles/media"
import { $white } from "../../styles/variables"
import mooLogo from "../../images/moo-logo-small.svg"
import transferwiseLogo from "../../images/wise.svg"
import zapposLogo from "../../images/zappos-logo-small.svg"
import Image from "../image"

const PpcSignUpSection = () => {
  const { transferwise, moo, zappos } = useStaticQuery<
    GatsbyTypes.PpcSignUpSectionQuery
  >(graphql`
    query PpcSignUpSection {
      transferwise: file(relativePath: { regex: "/nilan.jpg/" }) {
        childImageSharp {
          gatsbyImageData(
            width: 100
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      moo: file(relativePath: { regex: "/moo.jpg/" }) {
        childImageSharp {
          gatsbyImageData(
            width: 100
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      zappos: file(relativePath: { regex: "/zappos.jpg/" }) {
        childImageSharp {
          gatsbyImageData(
            width: 100
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  `)
  const quotes = [
    {
      image: transferwise,
      quote:
        '"Chattermill enables our team to uncover customer insights deeper than ever before and focus on the key factors that make a difference to our users and drive our growth."',
      name: "Nilan Peiris",
      title: "VP Growth",
      logo: transferwiseLogo,
    },
    {
      image: moo,
      quote:
        '"Chattermill has played a pivotal role in swifly spotting operational issues to enhance our physical product and the online experience."',
      name: "Dan Moross",
      title: "Director of Customer Experience",
      logo: mooLogo,
    },
    {
      image: zappos,
      quote:
        '"The Chattermill algorithms worked really well with our customer comments data right out of the gate. On top of that the team is great to work with."',
      name: "Alex Genov",
      title: "Head of Insight",
      logo: zapposLogo,
    },
  ]
  return (
    <StyledSection>
      <StyledContainer>
        <StyledLink href="https://app.chattermill.com/signup">
          <StyledButton type="submit">Get Started</StyledButton>
        </StyledLink>
      </StyledContainer>
      <StyledImageContainer>
        {quotes.map(item => {
          return (
            <StyledCard>
              <StyledImage image={item.image} />
              <StyledTitle>{item.name}</StyledTitle>
              <StyledSpan>{item.title}</StyledSpan>
              <StyledText>{item.quote}</StyledText>
              <StyledLogo src={item.logo} />
            </StyledCard>
          )
        })}
      </StyledImageContainer>
    </StyledSection>
  )
}

export default PpcSignUpSection

export const StyledLogo = styled.img`
  height: 55px;
  width: 93px;
  padding-top: 30px;
`

export const StyledTitle = styled.h3`
  padding: 5px;
  font-size: 20px;
`

export const StyledSpan = styled.span`
  font-size: 12px;
  padding: 2px;
`

export const StyledText = styled.p`
  padding: 5px;
`

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 6rem;
`

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  border-radius: 2px;
  margin: 2rem;
  padding: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  height: 285px;
  width: 320px;
`

export const StyledImageContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6rem;

  ${media.lessThan("md")`
		flex-direction: column;;
		justify-content: center;
		align-items: center;
		padding: 3rem;
  `};
`

export const StyledLink = styled.a`
  color: #fff;
`

export const StyledImage = styled(Image)`
  height: 60px;
  width: 60px;
`

export const StyledSection = styled.section`
  padding: 7rem 0 9rem 0;
  ${media.lessThan("md")`
    padding-top: 5rem !important;
    padding-bottom: 0rem !important;
  `};
`

export const StyledButton = styled.button`
  background-color: #291c45;
  height: 60px;
  width: 200px;
  border: none;
  color: #fff;
  letter-spacing: 1px;
  font-size: 20px;
  cursor: pointer;
  outline: 0;
  &&,
  &&:link,
  &&:visited {
    font-size: 2rem;
    background-color: #291c45;
    color: #fff;
    border: 1px solid #291c45;
  }

  &&:hover,
  &&:active {
    opacity: 0.5;
    color: ${$white};
  }
`
