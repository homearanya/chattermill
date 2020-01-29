import styled from "styled-components"

import media from "../../styles/media"
import { ButtonLink } from "../../styles/common.styled"
import { $colorSecondary } from "../../styles/variables"
import { absoluteCenter } from "../../styles/mixins"

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 5rem auto 0;
  width: 100%;
  padding: 0 1.5rem;
  ${media.lessThan("sm")`
    margin: 3rem auto 0;
    padding: 0;

    a {
      padding: 1rem 2rem !important;
      font-size: 1.2rem !important;
    }
  `}
`

export const PreviousLink = styled(ButtonLink)`
  margin-right: auto;
  order: 1;
`

export const NextLink = styled(ButtonLink)`
  margin-left: auto;
  order: 3;
`

export const PageIndicator = styled.span`
  ${absoluteCenter};
  font-size: 1.6rem;
  color: ${$colorSecondary};
  z-index: -1;
  opacity: 0.7;

  ${media.lessThan("sm")`
    font-size: 1.4rem;
    padding: 1rem 0;
  `}
`
