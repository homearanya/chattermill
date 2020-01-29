import styled, { keyframes } from "styled-components"
import { Link } from "gatsby"
import media from "./media"
import { $colorPrimary, $colorSecondary, $colorHeading } from "./variables"

import { buttonStyles, buttonStylesHover, decorator } from "./mixins"
import { Container } from "react-awesome-styled-grid"

export const WideContainer = styled(Container)`
  position: relative;
  overflow: hidden;
  && {
    padding: 0;
  }
`

interface ButtonProps {
  readonly inverted?: boolean
  readonly wide?: boolean
  readonly secondary?: boolean
}
export const Button = styled.a<ButtonProps>`
  &&,
  &&:link,
  &&:visited {
    ${({ inverted, wide, secondary }) =>
    buttonStyles(inverted, wide, secondary)}
  }

  &&:hover,
  &&:active {
    ${({ inverted, secondary }) => buttonStylesHover(inverted, secondary)}
  }

  &:active,
  &:focus {
    outline: 0;
  }
`
interface ButtonProps {
  readonly inverted?: boolean
  readonly wide?: boolean
  readonly secondary?: boolean
}
export const ButtonLink = styled(Link) <ButtonProps>`
  &&,
  &&:link,
  &&:visited {
    ${({ inverted, wide, secondary }) =>
    buttonStyles(inverted, wide, secondary)}
  }

  &&:hover,
  &&:active {
    ${({ inverted, secondary }) => buttonStylesHover(inverted, secondary)}
  }

  &&:active,
  &&:focus {
    outline: 0;
  }

  /* Firefox Specific CSS to remove button differences and focus ring */
  &&::-moz-focus-inner {
    border: 0;
  }
`

export const Section = styled.section``

export const TinyHeading = styled.h4`
  color: ${$colorPrimary};
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.8rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
  letter-spacing: 5px;
  ${decorator};

  ${media.lessThan("sm")`
    font-size: 1.2rem;
  `}
`

export const SmallHeading = styled.h3`
  color: ${$colorHeading};
  font-size: 2.2rem;
  font-weight: 400;
  line-height: 4rem;
  margin-bottom: 2rem;
  ${decorator}
`
export const MediumHeading = styled.h2`
  color: ${$colorSecondary};
  font-size: 3.6rem;
  font-weight: 400;
  line-height: 4rem;
  margin-bottom: 4rem;
  ${decorator}

  ${media.lessThan("lg")`
    font-size: 2.8rem;
    line-height: 3.2rem;
    margin-bottom: 2rem;
  `}
  ${media.lessThan("sm")`
    font-size: 2.6rem;
    line-height: 3rem;
    margin-bottom: 2rem;
  `}
`

export const BigHeading = styled.h1`
  color: ${$colorHeading};
  font-family: "Raisonne", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 5rem;
  font-weight: 600;
  line-height: 4.5rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
  ${decorator}

  ${media.lessThan("lg")`
    font-size: 4rem;
    line-height: 3.5rem;
  `}
`

export const Paragraph = styled.p`
  color: ${$colorSecondary};
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 2.2rem;
  margin-bottom: 3rem;
  ${decorator}

  ${media.lessThan("sm")`
    font-size: 1.4rem;
    line-height: 2rem;
  `}
`

// Animations
export const fadeIn = keyframes`
0% {
  opacity: 0;

}

100% {
  opacity: 1;
}

`
export const fadeInLeft = keyframes`
0% {
  transform: translateX(-20px);
  opacity: 0;

}

100% {
  transform: translateX(0);
  opacity: 1;
}
`
export const fadeInRight = keyframes`
0% {
  transform: translateX(20px);
  opacity: 0;

}

100% {
  transform: translateX(0);
  opacity: 1;
}
`
export const fadeInTop = keyframes`
0% {
  transform: translateY(-20px);
  opacity: 0;

}

100% {
  transform: translateY(0);
  opacity: 1;
}

`
export const dropdownOpen = keyframes`
0% {
  transform: scale(0);
  opacity: 0;

}

100% {
  transform: scale(1);
  opacity: 1;
}
`
