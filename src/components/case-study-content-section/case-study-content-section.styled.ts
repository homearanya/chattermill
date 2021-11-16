import styled from "styled-components";
import { Container } from "react-awesome-styled-grid";
import media from "../../styles/media";

import { $colorPrimary } from "../../styles/variables";

export const StyledSection = styled.section``;
export const StyledContainer = styled(Container)``;

export const HeadingWrapper = styled.div`
  border-bottom: 2px solid ${$colorPrimary};
  padding-bottom: 2rem;
`;
export const Heading = styled.h2`
  width: 50%;
  font-size: 3.3rem;
  font-weight: 400;
  line-height: 4.4rem;

  ${media.lessThan("md")`
    width: 100%;
    text-align: center;
  `};
  ${media.lessThan("sm")`
    font-size: 2.6rem ;
    line-height: 3rem ;
  `};
`;

export const ContentWrapper = styled.div`
  padding: 5rem 0;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    padding-bottom: 6rem;
  }

  ${media.lessThan("md")`
    flex-direction: column;
  `};
`;
export const Headline = styled.h4`
  width: 50%;
  font-size: 3.3rem;
  font-weight: 400;
  line-height: 4.4rem;
  padding-right: 5rem;
  position: sticky;
  top: 5rem;
  ${media.lessThan("md")`
  width: 100%;
    position: unset;
    top: unset;
    margin-bottom: 2rem;
  `};
  ${media.lessThan("sm")`
    font-size: 2.6rem ;
    line-height: 3rem ;
  `};
`;
export const Text = styled.div`
  width: 50%;
  font-size: 2.2rem;
  line-height: 2.9rem;
  p:not(:last-child) {
    margin-bottom: 1.5rem;
  }
  ${media.lessThan("md")`
      width: 100%;
  `};
  ${media.lessThan("sm")`
    font-size: 1.8rem;
    line-height: 2.5rem;
  `};
`;
