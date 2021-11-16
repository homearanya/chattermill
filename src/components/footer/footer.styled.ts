import styled from "styled-components"
import { Row, Col, Container } from "react-awesome-styled-grid"

import media from "../../styles/media"

import {
  $white,
  $colorHeading,
  $colorSecondary,
  $colorPrimary,
} from "../../styles/variables"

export const StyledContainer = styled(Container)`
  padding: 0 3rem;
`

export const StyledFooter = styled.footer`
  background-color: ${$white};
  padding: 10rem 0 4rem;
  font-size: 1.4rem;

  ${media.lessThan("md")`
    padding: 5rem 0 4rem;    
  `}
`

export const NavigationRow = styled(Row)`
  margin-bottom: 3rem;
  ul {
    list-style: none;
    li {
      a:link,
      a:visited {
        color: ${$colorSecondary};
        font-size: 1.4rem;
        line-height: 2.8rem;
        text-decoration: none;
        transition: all 0.2s;
        border-bottom: 3px solid transparent;
        white-space: nowrap;
        ${media.lessThan("md")`
          font-size: 1.3rem;
        `}
      }

      a:hover,
      a:active {
        border-bottom: 3px solid ${$colorPrimary};
      }
    }
  }

  ${media.lessThan("md")`
    margin-bottom: 1rem;
  `}
`
export const SocialLinksWrapper = styled.div`
  display: flex;
  a:not(:last-child) {
    margin-right: 2rem;
  }

  justify-content: center;
`
interface SocialLinkWrapperProps {
  color: string
  background: string
}

export const SocialLinkWrapper = styled.div<SocialLinkWrapperProps>`
  width: 32px;
  height: 32px;
  background: rgba(189, 217, 255, 0.4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  a:hover & {
    background-color: ${(props) => props.background && props.background};
    svg path {
      fill: ${(props) => props.color && props.color};
    }
  }
`

export const MenusRow = styled(Row)`
  width: 100%;
`

export const MenuCol = styled(Col)`
  flex: 0;
  margin-bottom: 2rem;

  &:not(last-child) {
    margin-right: 2rem;
    ${media.lessThan("sm")`
      margin-right: 0;
    `}
  }
  ${media.lessThan("sm")`
    flex: 1 0 auto;
    width: 100%;
    text-align: center;
  `}
`

export const MenuHeading = styled.h6`
  color: ${$colorHeading};
  font-size: 1.6rem;
  line-height: 2.4rem;
  margin-bottom: 1rem;
`

export const SocialCol = styled(Col)`
  margin-bottom: 3rem;
`

export const CopyRightRow = styled(Row)`
  ${media.lessThan("sm")`
    font-size: 1.1rem;
  `}
`
