import styled from "styled-components"
import { Container } from "react-awesome-styled-grid"
import media from "../../styles/media"

import Image from "../image"
import UniversalLink from "../universal-link"
import { $colorPrimary, $colorSecondary } from "../../styles/variables"

export const StyledSection = styled.section`
  padding: 0 0 10rem 0;
  ${media.lessThan("sm")`
    padding: 0 0 5rem 0;
  `};
`
export const StyledContainer = styled(Container)``

export const Wrapper = styled.div`
  display: flex;
  &:not(:last-child) {
    padding-bottom: 6rem;
  }

  ${media.lessThan("sm")`
    flex-direction: column;
  `};
`

export const CompanyWrapper = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;

  ${media.lessThan("md")`
    margin-bottom: 3rem;
  `};
  ${media.lessThan("sm")`
    width: 100%;
  `};
`
export const LogoWrapper = styled.div`
  margin-bottom: 2rem;
`
export const Logo = styled(Image)`
  width: 100% !important;
  max-width: 34rem !important;
  ${media.lessThan("sm")`
    max-width: 25rem !important;
  `};
`

export const TextWrapper = styled.div`
  margin-bottom: 2rem;
`
export const Text = styled.div`
  font-size: 1.8rem;
  line-height: 2.4rem;
  margin-bottom: 2rem;
  p:not(:last-child) {
    margin-bottom: 1rem;
  }

  ${media.lessThan("sm")`
    font-size: 1.6rem;
    line-height: 2.2rem;
  `};
`

export const Website = styled(UniversalLink)`
  text-decoration: none;
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${$colorSecondary};
  text-transform: uppercase;

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 2rem;
    color: ${$colorPrimary};
    transform: translateX(0);
    transition: transform 0.2s;
  }

  &:hover {
    span {
      transform: translateX(1rem);
    }
  }
`
export const SpecsWrapper = styled.div`
  flex: 1;
  margin-left: 6rem;
  border-left: 1px solid ${$colorPrimary};
  padding-left: 6rem;
  display: flex;
  align-items: center;

  ${media.lessThan("sm")`
      margin-left:unset;
      border-left:unset;
      padding-left:unset;
  `};
`

export const SpecsContainer = styled.div`
  ${media.lessThan("sm")`
      display:flex;
      flex-wrap: wrap;
  `};
`
export const SpecWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
  ${media.lessThan("sm")`
     width: 50%;
  `};
`
export const Spec = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;
`
