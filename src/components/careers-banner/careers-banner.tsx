import React from "react";
import {
  StyledSection,
  StyledBigHeading,
  StyledMediumHeading,
  StyledCol,
  StyledButton,
  StyledContainer
} from "./careers-banner.styled";
import Logo from "./cm-primary-logo.svg";
import { Link } from "gatsby";

function Heading(props) {
  return <StyledBigHeading>{props.message}</StyledBigHeading>;
}

export const CareersBanner = () => {
  return (
    <StyledSection>
      <img src={Logo} alt="chattermill-logo"></img>
      <Heading message="Careers at Chattermill"></Heading>
      <StyledContainer>
        <StyledMediumHeading>
          At Chattermill we are innovating customer experience for some of the
          most exciting companies on earth.
        </StyledMediumHeading>
      </StyledContainer>
      <StyledCol>
        <StyledButton>View Job Openings 🚀</StyledButton>
        <StyledButton>View Benefits ❤</StyledButton>
        <Link to="/careers-benefits/">Click me</Link>
      </StyledCol>
    </StyledSection>
  );
};

export default CareersBanner;
