import styled from "styled-components";
import media from "../../styles/media";
import { Col, Container } from "react-awesome-styled-grid";
import {
  BigHeading,
  SmallHeading,
  MediumHeading
} from "../../styles/common.styled";

export const StyledContainer = styled(Container)`
  align-items: center;
  width: 100%;
  padding-left: 10rem;
  padding-right: 10rem;
  margin-bottom: 5rem;
`;

export const StyledSection = styled.section`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 15rem 10rem 15rem 10rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #def200;
  background-size: cover;
  text-align: center;

  ${media.lessThan("sm")`
    min-height: 420px;
    padding: 5rem 1.5rem 5rem 1.5rem;
  `}

  ${media.greaterThan("xl")`
    padding-bottom: 20rem;
  `}
`;

export const StyledCol = styled(Col)`
  padding: 1.5rem 0;

  ${media.lessThan("sm")`
    flex-direction: column;
    align-items: center;
    flex-grow: 2;
  `}
`;

export const StyledLink = styled.a`
  padding: 20px;
  margin: 10px;
  font-size: 1.4rem;
  line-height: 1;
  display: inline-block;
  background-color: #10c2ed;
  color: #ffffff;
  -webkit-text-decoration: none;
  text-decoration: none;
  text-align: center;
  border: 1px solid #10c2ed;
  border-radius: 2.5rem;
  padding: 1.5rem 2.5rem;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  background-image: none;
`;

export const StyledBigHeading = styled(BigHeading)`
  color: #332e5e;
`;

export const StyledMediumHeading = styled(MediumHeading)`
  padding-top: 1rem;
  color: #332e5e;
  text-align: center;
`;

export const StyledSmallHeading = styled(SmallHeading)`
  color: #fff;
`;
