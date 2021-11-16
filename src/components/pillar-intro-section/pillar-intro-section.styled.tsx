import styled, { css } from "styled-components"
import { Row } from "react-awesome-styled-grid"
import media from "../../styles/media"
import { $white } from "../../styles/variables"
import { boxShadow } from "../../styles/mixins"

export const StyledSection = styled.section`
  overflow: "hidden";
`

export const StyledRow = styled(Row)`
  padding: 2rem 0;
`

export const ContentWrapper = styled.div`
  max-width: 125rem;
  display: grid;
  grid-template-columns: 35rem auto;
  grid-column: 2rem;
  padding: 0 2rem;
  h2 {
    text-align: left;
    margin-bottom: 2rem;
    line-height: 1.33;
  }
  p {
    font-size: 2.1rem;
  }

  ${media.lessThan("md")`
      max-width:80rem;
      display: block;
      h2 {
      text-align: left;
      font-size: 3rem;
    }
    p {
    font-size: 1.8rem;
  }
  `};
`

export const StyledIntroHeader = styled.h2`
  font-weight: 400;
  font-size: 40px;
  text-align: center;
  margin-bottom: 7rem;
`

export const StyledParagraph = styled.p`
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  line-height: 35px;
`

interface BurgerWrapperProps {
  open: boolean
}
export const BurgerWrapper = styled.div<BurgerWrapperProps>`
  display: none;
  position: fixed;
  align-items: center;
  justify-content: center;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  width: 5rem;
  height: 5rem;
  background-color: rgba(16, 194, 237, 0.8);
  ${boxShadow};
  border-radius: 50%;
  button {
    margin-right: 0;
    div {
      background-color: ${$white};
    }
    margin-left: ${({ open }) => (open ? "0.6rem" : "0rem")};
  }
  ${media.lessThan("md")`
    display: flex;
    z-index: 999;
  `};
`

export const ContentfulRichtextTOCWrapper = styled.div`
  display: block;
  margin-top: 5rem;
  position: sticky;
  top: 8rem;
  overflow: auto;
  align-self: start;
  ${media.lessThan("md")`
     display: none;
  `};
`
interface MobileContentfulRichtextTOCWrapperProps {
  open: boolean
}
export const MobileContentfulRichtextTOCWrapper = styled.div<
  MobileContentfulRichtextTOCWrapperProps
>`
  display: none;
  ${({ open }) => css`
    ${media.lessThan("md")`
        display: block;
        position: fixed;
        bottom: 4rem;
        transform-origin: bottom left;
        transform: ${
          open
            ? `scale(1) translate(-50%,-5rem)`
            : `scale(0) translate(-50%,-5rem)`
        };
        transition: transform 0.3s linear;
        background: ${$white};
        left: 50%;
        max-width: 30rem;
        width: calc(100% - 4rem);
        padding: 3rem 1rem;
        ${boxShadow};
        border-radius: 4px;
        z-index: 999;
      `};
  `};
`
