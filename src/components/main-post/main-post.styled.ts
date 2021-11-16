import styled from "styled-components";
import { Row, Col } from "react-awesome-styled-grid";

import media from "../../styles/media";

export const StyledSection = styled.section`
  padding: 10rem 0 5rem;

  ${media.lessThan("lg")`
      padding: 8rem 0 4rem;
  `}

  ${media.lessThan("md")`
      padding: 6rem 0 3rem;
  `}

  ${media.lessThan("sm")`
      padding: 4rem 0 2rem;
  `}

`;

export const StyledRow = styled(Row)`
  justify-content: center;
  ${media.lessThan("sm")`
    margin: 0 auto;
  `}
`;
export const StyledCol = styled(Col)`
  ${media.lessThan("sm")`
      align-items: center;
  `}
`;
