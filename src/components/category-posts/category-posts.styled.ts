import styled, { css } from "styled-components";
import { Link } from "gatsby";

import media from "../../styles/media";
import { MediumHeading } from "../../styles/common.styled";
import {
  $colorHeading,
  $colorSecondary,
  $colorPrimary
} from "../../styles/variables";

export const StyledSection = styled.section`
  padding: 5rem 0;

  ${media.lessThan("sm")`
    padding-bottom: 0;
  `}
`;

export const menuItem = css`
  color: ${$colorHeading};
  display: inline-block;
  font-size: 1.6rem;
  padding: 1rem 3rem 0.7rem;
  text-decoration: none;
  transition: all 0.2s;
  border-bottom: 3px solid transparent;
`;
export const menuItemHover = css`
  color: ${$colorSecondary};
  border-bottom: 3px solid ${$colorPrimary};
`;

export const StyledLink = styled(Link)`
  &:link,
  &:visited {
    ${menuItem};
    margin-bottom: 6rem;

    ${media.lessThan("lg")`
    margin-bottom: 5rem;
    `}
    ${media.lessThan("md")`
    margin-bottom: 4rem;
    `}
    ${media.lessThan("sm")`
    margin-bottom: 3rem;
    `}
  }

  &:hover,
  &:active {
    ${menuItemHover};
  }
`;

export const Heading = styled(MediumHeading)`
  margin-bottom: 0 !important;
  span {
    margin-left: 2rem;
  }

  ${media.lessThan("md")`
    padding: 2rem;
  `}

  ${media.lessThan("sm")`
    font-size: 2.2rem;
    line-height: 2.6rem;
  `}
`;
