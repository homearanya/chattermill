import styled from "styled-components";
import media from "../../styles/media";
import { $colorHeading } from "../../styles/variables";

export const StyledSection = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan("sm")`
    flex-direction: column;
    max-width 100%;
  `}
`;

export const StyledWrapper = styled.div`
  display: flex;

  ${media.lessThan("lg")`
    display: flex;
    align-items: center;
    justify-content: center;
    
  `}

  ${media.lessThan("sm")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;

export const StyledParagraph = styled.p`
  font-size: 18px;
  ${media.lessThan("lg")`
    text-align: center;
  `}
`;

export const LargeHeading = styled.h1`
  color: ${$colorHeading};
  font-family: "Euclid Square", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 4rem;
  font-weight: 600;
  line-height: 4.5rem;
  margin-bottom: 2rem;
  text-align: left;

  ${media.lessThan("lg")`
    font-size: 2.5rem;
    line-height: 3.5rem;
    padding-top: 4rem;
    text-align: center;
  `}
`;

export const StyledLineBreak = styled.hr`
  height: 2px;
  margin: 1em 0;
  padding: 0
  border: 2rem solid #291C45;
`;
