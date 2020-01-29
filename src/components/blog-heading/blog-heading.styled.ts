import styled from "styled-components"

import { $colorHeading, $greyRegular } from "../../styles/variables"

import { BigHeading } from "../../styles/common.styled"

export const Heading = styled(BigHeading)`
  text-align: center;
  text-transform: capitalize;
  margin-top: 15rem;
  margin-bottom: 5rem;
  font-size: 5rem;

  a,
  a:link,
  a:visited {
    color: ${$colorHeading};
    text-decoration: none;
  }

  a:hover,
  a:active {
    color: ${$greyRegular};
  }
`
