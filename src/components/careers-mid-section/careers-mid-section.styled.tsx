import { MediumHeading } from "../../styles/common.styled";
import styled from "styled-components";
import media from "../../styles/media";

export const StyledSection = styled.section`
  padding: 15rem 5rem 15rem 5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  ${media.lessThan("sm")`
    min-height: 420px;
    padding: 5rem 1rem 5rem 1rem;
  `}
`;

export const IframeBlock = styled.div`
  margin-left: 5rem;
  margin-right: 5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;

  ${media.lessThan("sm")`
    align-items: center;
    padding-left: 1.3rem;
    margin-left: 1.8rem;
    

  @media(max-width: 325px) {
    margin-left: 1rem;
    margin-right: 2.5rem;
  `}
  }

  @media (min-width: 385px) {
    margin-left: 2rem;
  }

  @media (min-width: 325px) {
    padding-left: 3rem;
  }
`;

export const StyledMediumHeading = styled(MediumHeading)`
  color: #332e5e;
  text-align: center;
  font-size: 30px;

  ${media.lessThan("sm")`
  padding: 2rem 2rem 2rem 2rem;
`}
`;

export const StyledText = styled.p`
  color: #332e5e;
  font-size: 21px;
  text-align: center;
  padding: 1.5rem;
`;

export const Underline = styled.span`
  text-decoration: underline;
  font-weight: bold;
  text-decoration-color: #10c2ed;
`;
