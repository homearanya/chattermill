import styled from "styled-components";
import media from "../../styles/media";
import { Link } from "gatsby";
import { Row, Container } from "react-awesome-styled-grid";

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
`;

export const StyledSection = styled.section`
  align-items: center;
  text-align: center;
  margin: 0 auto;
  padding: 5rem 5rem 2rem 5rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledSpan = styled.span`
  text-decoration-style: solid;
  text-decoration-color: #10c2ed;
  border-bottom: 5px solid #10c2ed;
  text-decoration-thickness: from-font;
  margin-top: 3px;

  ${media.lessThan("sm")`
  border-bottom: 3px solid #10c2ed;
  `}
`;

export const StyledRow = styled(Row)`
  justify-content: center;
  padding-bottom: 8rem;
  align-items: center;
`;

export const StyledLogo = styled.div`
  opacity: 1;
  &:hover {
    opacity: 0.5;
  }

  &:after {
    opacity: 0.5;
  }
`;

export const StyledLogoButton = styled.button`
  width: auto;
  height: 100%;
  padding: 2rem 4rem 2rem 4rem;
  color: #a9aec5;
  text-indent: 0;
  border-radius: 0;
  border: none;
  outline: none;
  background-color: transparent;
  border-bottom: 3px solid transparent;
  opacity: 1;
  outline: none !important;
  cursor: pointer;

  &:hover {
    transition: opacity 0.2s;
  }
`;

export const MediumHeadingLink = styled.h3`
  color: #332e5e;
  font-family: "Raisonne", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 4.5rem;
  text-transform: uppercase;
  margin: 2rem;
  padding-top: 2rem;
  text-align: center;

  ${media.lessThan("sm")`
    font-size: 1.8rem
  `}
`;

export const LargeHeading = styled.h2`
  color: #332e5e;
  font-family: "Raisonne", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 3.5rem;
  font-weight: 600;
  line-height: 4.5rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
  text-align: center;

  ${media.lessThan("md")`
    font-size: 3rem
  `}

  ${media.lessThan("sm")`
    font-size: 2rem
  `}
`;
