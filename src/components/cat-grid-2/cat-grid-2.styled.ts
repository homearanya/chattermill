import styled from "styled-components";
import { Row, Col } from "react-awesome-styled-grid";

import media from "../../styles/media";

export const StyledRow = styled(Row)`
  justify-content: center;

  ${media.lessThan("lg")`
    flex-direction: column;
    align-items: stretch;
    flex-wrap: nowrap;
  `}
`;
export const StyledRowLeft = styled(Row)`
  padding: 0 3rem;
  &:first-child {
    margin-bottom: 9rem;
  }

  ${media.lessThan("lg")`
    width: 100%;
    padding: 0;

    &:first-child {
      margin-bottom: 9rem;
    }
  `}
  ${media.lessThan("lg")`
    &:first-child {
      margin-bottom: 9rem;
    }
  `}
  ${media.lessThan("sm")`
    justify-content: center;
    &:first-child {
      margin-bottom: 6rem;
    }
  `}
`;

export const StyledColLeft = styled(Col)`
  &&& {
    align-items: center;
    padding-right: 4.5rem;

    ${media.lessThan("lg")`
      flex: 1 0 100%;
      max-width: 100%;
      padding: 0 1.5rem;
      margin-bottom: 9rem;
    `}
    ${media.lessThan("md")`
    padding: 0 .75rem;
    `}
    ${media.lessThan("sm")`
      margin-bottom: 6rem;
    `}
  }
`;
export const StyledColRight = styled(Col)`
  &&& {
    align-items: center;
    padding-left: 4.5rem;
    pflex: 1 0 100%;

    ${media.lessThan("lg")`
      justify-content:center;
      max-width: 100%;
      padding: 0 1.5rem;
    `}
    ${media.lessThan("md")`
    padding: 0 .75rem;
    `}
  }
`;
