import React from "react";
import {
  StyledSection,
  StyledBigHeading,
  StyledMediumHeading,
  StyledCol,
  StyledContainer
} from "./careers-banner.styled";
import Logo from "./cm-primary-logo.svg";

interface HeaderProps {
  message: string;
}

function Heading({ message }: HeaderProps) {
  return <StyledBigHeading>{message}</StyledBigHeading>;
}

type BannerProps = { children: React.ReactNode };

export const CareersBanner: React.FunctionComponent<BannerProps> = props => {
  return (
    <StyledSection>
      <img src={Logo} alt="chattermill-logo"></img>
      <Heading message="Careers at Chattermill"></Heading>
      <StyledContainer>
        <StyledMediumHeading>
          At Chattermill we are innovating Customer Experience for some of the
          most exciting companies on earth.
        </StyledMediumHeading>
        <StyledMediumHeading>Interested in joining us?</StyledMediumHeading>
      </StyledContainer>
      <StyledCol>{props.children}</StyledCol>
    </StyledSection>
  );
};

export default CareersBanner;
