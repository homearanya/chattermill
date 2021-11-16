import styled, { css } from "styled-components"
import { Container } from "react-awesome-styled-grid"
import { ButtonLink } from "../../styles/common.styled"
import { $colorHeading, $colorBg, $greyLight } from "../../styles/variables"

export const Section = styled.div`
  padding: 0 0 5rem;
`
export const StyledContainer = styled(Container)``
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  max-width: 65rem;
  margin: 0 auto;
`
const common = css`
  background: ${$colorBg} !important;
  border-radius: 8px !important;
  padding: 1.5rem 2rem !important;
  text-align: left !important;
  border: none !important;
  color: ${$colorHeading} !important;

  &:hover {
    background: ${$greyLight} !important;
  }
`
export const Header = styled(ButtonLink)`
  ${common};
  grid-column-start: span 2;
  grid-row-start: span 2;
`
export const SubTitle = styled.span`
  display: inline-block;
  font-size: 1.6rem;
  color: #bbc0d1;
  margin-bottom: 0.5rem;
`
export const Heading = styled.h3`
  font-size: 2.8rem;
  line-height: 1.17;
  color: ${$colorHeading};
`

interface StyledButtonProps {
  active: boolean
}
export const StyledButton = styled(ButtonLink)<StyledButtonProps>`
  ${common};
  width: 100%;
  font-size: 1.6rem;
  line-height: 1.17;
  cursor: ${({ active }) => (active ? "default !important" : "pointer")};

  background: ${({ active }) =>
    active ? `${$greyLight} !important` : `${$colorBg} !important`};
`
