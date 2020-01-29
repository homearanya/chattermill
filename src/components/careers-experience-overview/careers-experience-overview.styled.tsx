import { Section, MediumHeading } from "../../styles/common.styled";
import styled from "styled-components";
import media from "../../styles/media";

export const StyledSection = styled(Section)`
  padding: 10rem 10rem 10rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-color: #fff;
`;

export const ImageBlock = styled.div`
  padding: 5rem 3rem;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  div:first-child {
    flex: 1 0 38%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${media.lessThan("sm")`
    flex-direction: column;
  `}
`;

export const StyledMediumHeading = styled(MediumHeading)`
  color: #332e5e;
  text-align: left;
`;

export const Underline = styled.span`
  text-decoration: underline;
  font-weight: bold;
  text-decoration-color: #10c2ed;
`;
