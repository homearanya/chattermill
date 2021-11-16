import styled from "styled-components";
import { Container, Col } from "react-awesome-styled-grid";

import media from "../../styles/media";

import { staggeredAnimation } from "../../styles/mixins";
import { MediumHeading, fadeInTop } from "../../styles/common.styled";

export const TagHeading = styled(MediumHeading)`
  text-align: center;
  margin: 15rem 0 8rem;
  font-size: 3.6rem;

  ${media.lessThan("lg")`
    margin: 13rem 0 6rem;
  `}

  ${media.lessThan("md")`
    margin: 11rem 0 4rem;
  `}

  display: none;
  ${media.lessThan("sm")`
    display: block
    font-weight: bold;
    margin: 2rem 0 2rem;
  `}
`;
export const StyledSection = styled.section`
  padding: 6rem 0 3rem;

${media.lessThan("lg")`
    padding: 6rem 0 3rem;
`}

${media.lessThan("md")`
    padding: 6rem 0 3rem;
`}

${media.lessThan("sm")`
    padding: 4rem 0 2rem;
`}
`;

interface StyledContainerProps {
  classNames: string[];
}
export const StyledContainer = styled(Container)<StyledContainerProps>`
  padding: 0 3rem !important;
  ${props =>
    props.classNames &&
    staggeredAnimation(fadeInTop, 0.5, 0, 0.1, props.classNames)}
  ${media.lessThan("lg")`
    max-width: 102.4rem !important;
  `}
`;
export const StyledCol = styled(Col)`
  padding: 5rem !important;

  ${media.lessThan("lg")`
    padding: 4rem !important;
  `}

  ${media.lessThan("md")`
    padding: 4rem !important;
  `}

  ${media.lessThan("sm")`
    padding: 3rem 0.75rem !important;
  `}

`;
