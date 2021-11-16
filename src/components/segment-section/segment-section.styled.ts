import styled from "styled-components";

import media from "../../styles/media";

export const StyledSection = styled.section`
  padding: 0 0 5rem;

  .text {
    width: 110%;
    margin-bottom: 0;
  }
  ${media.lessThan("lg")`
    padding: 3rem 0;
  `};
`;
