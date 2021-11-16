import styled, { css } from "styled-components";

import { Button, SmallHeading } from "../../styles/common.styled";
import { $colorPrimary, $white } from "../../styles/variables";
import media from "../../styles/media";

interface StyledContainerProps {
  hasSignedUp?: boolean;
}
export const StyledContainer = styled.div<StyledContainerProps>`
  background: #1e2644;
  text-align: center;
  width: 100%;
  max-height: 90vh;
  overflow: auto;
  ${({ hasSignedUp }) =>
    hasSignedUp
      ? css`
          max-width: 79rem !important;
          padding: 2rem 3rem 3rem;
        `
      : css`
          max-width: 51.6rem;
          padding: 5rem 8rem;
          ${media.lessThan("sm")`
            padding: 3rem 2rem;
          `};
        `};
`;
export const Heading = styled(SmallHeading)`
  color: ${$white};
  text-align: center;
  font-size: 1.8rem;
  line-height: 1.5;
  font-weight: 300;
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
`;
export const StyledButton = styled(Button)`
  position: relative;
  border-radius: 5px !important;

  &&,
  &&:link,
  &&:visited {
    font-size: 2rem;
    background-color: ${$colorPrimary};
    color: ${$white};
    border: 1px solid ${$colorPrimary};
    padding: 1rem 5rem;
  }

  &&:hover,
  &&:active {
    background-color: ${$white};
    color: ${$colorPrimary};
  }
`;
interface SignInProps {
  hasSignedUp: boolean;
}
export const SignIn = styled.p<SignInProps>`
  font-size: 1rem;
  margin-top: ${({ hasSignedUp }) => (hasSignedUp ? "1rem" : "3rem")};
  text-align: center;
  color: ${$white};

  a,
  a:link,
  a:visited {
    color: ${$colorPrimary};
    text-decoration: none;
  }

  a:hover,
  a:active {
    color: ${$colorPrimary};
  }
`;
export const MeetingContainer = styled.div`
  @media (max-width: 420px) {
    margin: 0 -3rem;
  }
`;
