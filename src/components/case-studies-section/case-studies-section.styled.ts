import styled from "styled-components";

import media from "../../styles/media";
import { MediumHeading } from "../../styles/common.styled";
import { transitionIntoView, boxShadow } from "../../styles/mixins";
import { $colorHeading } from "../../styles/variables";
import TextBlock from "../text-block";
import { Container } from "react-awesome-styled-grid";

export const StyledSection = styled.section`
  background: #f7f8fc;
  padding: 10rem 0;
  ${media.lessThan("md")`
    padding: 8rem 0;
  `}
  ${media.lessThan("sm")`
    padding: 5rem 0;
  `}
`;
interface AnimatedProps {
  inView?: boolean;
}
export const StyledHeading = styled(MediumHeading)<AnimatedProps>`
  font-size: 3rem;
  line-height: 1.3;
  max-width: 70rem;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 7rem !important;
  ${props => transitionIntoView(true, props.inView)};
  ${media.lessThan("sm")`
    font-size: 2.6rem;
    margin-bottom: 3rem !important;
  `}
`;

export const StyledContainer = styled(Container)``;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  grid-gap: 4rem 4rem;
  justify-content: center;
`;

export const StyledTextBlock = styled(TextBlock)<AnimatedProps>`
  height: 100%;
  ${boxShadow};

  ${props => transitionIntoView(true, props.inView)};
  display: flex;
  flex-direction: column;

  .tagline {
    padding: 0 2rem;
    font-size: 1rem;
    margin-bottom: 1rem;
    color: ${$colorHeading};
  }

  > div:nth-child(3) {
    flex: 1;
  }

  .html {
    padding: 0 2rem 2rem;
    color: ${$colorHeading};
    font-size: 1.6rem;
    line-height: 2rem;
    margin-bottom: auto;
  }

  .moreDetails {
    padding: 2rem;
    margin-bottom: 0;
  }

  ${media.lessThan("md")`
    align-items: unset;
    max-width: 50rem;
    margin: 0 auto;
  `}

  ${media.lessThan("sm")`
    .text,.moreDetails {
      text-align: center;
    }
  `}
`;
