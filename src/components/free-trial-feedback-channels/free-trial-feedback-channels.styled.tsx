import styled from "styled-components";
import media from "../../styles/media";
import { Col } from "react-awesome-styled-grid";

export const StyledIcon = styled.img`
  ${media.lessThan("sm")`
  padding: 2.5rem 0rem 2.5rem 0rem;
`}
`;

export const StyledCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;

  @media (max-width: 400px) {
    .flex-grid {
      display: block;
    }
  }
`;

export const StyledModule = styled.div`
  flex: 1;
  align-self: center;
`;
