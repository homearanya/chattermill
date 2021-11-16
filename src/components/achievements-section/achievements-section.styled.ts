import styled from "styled-components";
import { Container } from "react-awesome-styled-grid";

import Image from "../image";
import media from "../../styles/media";
import { $colorHeading, $white } from "../../styles/variables";

export const StyledSection = styled.section`
  padding: 3rem 0;
  background: ${$colorHeading};
`;

export const StyledContainer = styled(Container)`
  color: ${$white};
  display: flex;
  align-items: center;
  ${media.lessThan("md")`
    flex-direction:column;
  `};
`;
export const CompanyBlock = styled.h3`
  padding: 3rem 0;
  font-size: 2.2rem;
  font-weight: 400;
  line-height: 2.9rem;
  text-transform: uppercase;
`;

export const Separator = styled.div`
  background: ${$white};
  width: 1px;
  margin: 0 10rem 0 6rem;
  align-self: stretch;
  ${media.lessThan("lg")`
    margin: 0 4rem 0 4rem;
  `};
  ${media.lessThan("md")`
    display: none;
  `};
`;
export const Achievements = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;

  ${media.lessThan("sm")`
    flex-direction: column;
  `};
`;
export const Achievement = styled.div`
  display: flex;
  align-items: center;
  padding-left: 3rem;
  ${media.lessThan("md")`
    padding: 0 1rem;
  `};
  ${media.lessThan("sm")`
    padding: 2rem 0;
  `};
`;

export const IconWrapper = styled.div`
  margin-right: 2rem;
`;
export const Icon = styled(Image)``;
export const Text = styled.p`
  font-size: 1.6rem;
  line-height: 2.1rem;
  max-width: 13rem;
`;
