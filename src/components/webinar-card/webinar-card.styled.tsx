import styled, { css } from "styled-components";
import media from "../../styles/media";

export const StyledHeader = styled.h1`
  font-size: 4rem;
  color: #291c45;
  text-align: center;
  padding-top: 2rem;

  ${media.lessThan("lg")`
    text-align: center;
    
  `}
`;

export const StyledHeading = styled.h3`
  font-size: 2rem;
  color: #291c45;
  text-align: center;
`;

interface StyledTextProps {
  textHeight?: number;
}

export const StyledText = styled.p<StyledTextProps>`
  font-size: 2rem;
  color: #291c45;
  text-align: left;
  ${({ textHeight }) =>
    textHeight &&
    css`
      height: ${textHeight + 10}px;
    `};
`;

export const StyledThumbnail = styled.div`
  position: relative;
  margin-bottom: 2rem;
  border-radius: 10px;
  width: 100%;
  padding-top: 66.6667%;

  & > span:first-child {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`;

export const StyledSmallHeadingLink = styled.a`
  font-size: 1.5rem;
  font-weight: 400;
  text-align: left;
  text-decoration: none;
  color: #332e5e;

  a:hover {
    text-decoration: none;
    cursor: pointer;
  }

  a,
  a:link,
  a:visited {
    color: #332e5e;
    text-decoration: none;
  }
`;

export const StyledCard = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 40rem;

  padding: 3rem 2rem;
  margin: 1rem;
  border-radius: 10px;
  box-shadow: 0 9px 25px -2px rgba(11, 26, 56, 0.12);
  background-color: #fff;

  ${media.lessThan("lg")`
    padding: 1rem;
  `}
`;

export const RadientStroke = styled.div`
  height: 4px;
  background: #bdd9ff;
  border-radius: 10px;
  width: 100% !important;
`;

export const StyledParagraph = styled.p`
  font-size: 1.5rem;
  margin: 2rem 0;
`;
