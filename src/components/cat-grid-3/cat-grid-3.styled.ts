import styled from "styled-components";
import { Row, Col } from "react-awesome-styled-grid";

import media from "../../styles/media";

export const StyledRow = styled(Row)`
  justify-content: center;
  &:last-child {
    margin-top: 9rem;
  }

  ${media.lessThan("lg")`
    &:last-child {
      margin-top: 9rem;
    }
  `}
  ${media.lessThan("sm")`
    &:last-child {
      margin-top: 6rem;
    }
  `}
`;
export const StyledColTop = styled(Col)`
  flex: 1 0 100%;
`;

export const StyledCol = styled(Col)`
  align-items: center;
  &:first-child {
    padding-right: 6rem;
  }
  &:last-child {
    padding-left: 6rem;
  }

  ${media.lessThan("lg")`
    &:first-child {
      padding-right: 5rem;
    }
    &:last-child {
        padding-left: 5rem;
      }
  `}
  ${media.lessThan("md")`
    &:first-child {
        padding: 0 0.75rem;
      }
    &:last-child {
      padding: 0 0.75rem;
      margin-top: 9rem;
      }
  `}
  ${media.lessThan("sm")`
    &:last-child {
      margin-top: 6rem;
      }
  `}
`;
