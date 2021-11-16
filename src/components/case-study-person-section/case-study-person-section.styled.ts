import styled from "styled-components";
import { Container } from "react-awesome-styled-grid";
import media from "../../styles/media";

import Image from "../image";
import { $colorPrimary } from "../../styles/variables";

export const StyledSection = styled.section`
  padding: 10rem 0;

  ${media.lessThan("md")`
  padding: 6rem 0;
`};
  ${media.lessThan("sm")`
  padding: 2.5rem 0;
`};
`;
export const StyledContainer = styled(Container)`
  padding-top: 5rem;
  padding-bottom: 5rem;
  border-top: 2px solid ${$colorPrimary};
  border-bottom: 2px solid ${$colorPrimary};
`;
export const Heading = styled.h2`
  font-size: 3.3rem;
  font-weight: 400;
  line-height: 4.4rem;
  text-align: center;
  margin-bottom: 5rem;

  ${media.lessThan("sm")`
    font-size: 2.6rem ;
    line-height: 3rem ;
  `};
`;

export const Wrapper = styled.div`
  display: flex;
  &:not(:last-child) {
    padding-bottom: 6rem;
  }

  ${media.lessThan("md")`
    flex-direction: column;
  `};
`;

export const PersonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 33.33%;

  ${media.lessThan("md")`
    margin-bottom: 3rem;
  `};
`;
export const ImageWrapper = styled.div`
  align-self: stretch;
  margin-bottom: 1rem;
`;
export const StyledImage = styled(Image)`
  border-radius: 50%;
`;
export const PersonName = styled.h4`
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 3.3rem;
  text-align: center;
  margin-bottom: 1rem;
`;
export const PersonRole = styled.p`
  font-size: 1.7rem;
  line-height: 2.3rem;
  text-align: center;
`;

export const TextWrapper = styled.div`
  padding-left: 1rem;
  border-left: 1px solid ${$colorPrimary};

  ${media.lessThan("md")`
    border-left: 0;
  `};
`;
export const Quote = styled.div`
  font-size: 5rem;
  line-height: 1;
  ${media.lessThan("sm")`
    font-size: 4rem;
  `};
`;
export const Text = styled.div`
  font-size: 2rem;
  line-height: 2.7rem;
  p:not(:last-child) {
    margin-bottom: 1rem;
  }

  ${media.lessThan("sm")`
    font-size: 1.6rem;
    line-height: 2.2rem;
  `};
`;
