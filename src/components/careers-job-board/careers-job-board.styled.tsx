import styled from "styled-components";
import { Col } from "react-awesome-styled-grid";

import { SmallHeading } from "../../styles/common.styled";
import {
  $greyRegular,
  $colorHeading,
  $colorSecondary
} from "../../styles/variables";

export const StyledCol = styled(Col)`
  a {
    width: 100%;
    text-decoration: none;
  }
`;

export const Card = styled.div`
  text-align: left;
  padding: 3rem 2rem;
  margin-bottom: 3rem;
  background-color: white;
  border-radius: 1rem;
`;
export const Heading = styled(SmallHeading)`
  color: ${$colorHeading};
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.8rem;
  margin-bottom: 0;
`;
export const Departments = styled.p`
  color: ${$colorSecondary};
  font-size: 1.8rem;
`;
export const Location = styled.p`
  font-size: 1.6rem;
  color: ${$greyRegular};
`;
