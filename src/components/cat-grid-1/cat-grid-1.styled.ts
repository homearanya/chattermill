import styled from "styled-components";
import { Row, Col } from "react-awesome-styled-grid";

import media from "../../styles/media";

export const StyledRow = styled(Row)`
  justify-content: center;
`;
export const StyledCol = styled(Col)`
  flex-direction: column;
  align-items: center;
  ${media.lessThan("lg")`
      &:first-child{
        padding-right: 4rem !important;
      }
      &:last-child{
        padding-left:  4rem !important;
      }
 `}

  ${media.lessThan("md")`
      &:first-child{
        padding-right: 4rem !important;
      }
      &:last-child{
        padding-left:  4rem !important;
      }
 `}

  ${media.lessThan("sm")`
      &:first-child{
        padding-right: 0.75rem !important;
        padding-left:  0.75rem !important;
        margin-bottom: 5rem;
      }
      &:last-child{
        padding-right:  0.75rem !important;
        padding-left:  0.75rem !important;
      }
  `}
`;
