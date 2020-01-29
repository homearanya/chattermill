import { Section, MediumHeading } from "../../styles/common.styled";
import styled from "styled-components";
import media from "../../styles/media";

export const StyledSection = styled(Section)`
  padding: 10rem 10rem 10rem 10rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-color: #def200;
`;

export const IframeBlock = styled.div`
  margin: 3rem 3rem 3rem 3rem;

  ${media.lessThan("sm")`
    margin: 4rem;
  `}
`;

export const StyledMediumHeading = styled(MediumHeading)`
  color: #332e5e;
  text-align: center;
`;

export const Underline = styled.span`
  text-decoration: underline;
  font-weight: bold;
  text-decoration-color: #10c2ed;
`;
