import styled from "styled-components"
import { Col } from "react-awesome-styled-grid"
import media from "../../styles/media"
import { MediumHeading } from "../../styles/common.styled"
import { $colorSecondary } from "../../styles/variables"
import { centerTextBlock } from "../../styles/mixins"
import TextBlock from "../text-block"

export const StyledSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem;
`

interface StyledHeadingProps {
  inView?: boolean
}
export const StyledHeading = styled(MediumHeading)<StyledHeadingProps>`
  color: ${$colorSecondary};
  margin-bottom: 5rem;
  margin-top: 4rem;
  text-align: center;

  ${media.lessThan("sm")`
    font-size: 3rem;
    line-height: 3.4rem;
    text-align: center;
  `}
`

export const StyledCol = styled(Col)`
  padding: 1rem 1rem 1rem 1rem;
  margin: 50px;
  box-shadow: 0 9px 25px -2px rgba(11, 26, 56, 0.12);
`

interface StyledTextBlockProps {
  withBoxShadow?: boolean
}
export const StyledTextBlock = styled(TextBlock)<StyledTextBlockProps>`
  height: 100%;
  width: 100%;
  padding: 2rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image {
    width: 100%;
  }

  .imageName {
    max-width: 100%;
    display: block;
    border-radius: 10px;
    margin-bottom: 0;
    box-shadow: 0 9px 25px -2px rgba(11, 26, 40, 0.2);
  }

  .smallHeading {
    margin: 2rem 0;
    .underline {
      padding-bottom: 5px;
    }
  }

  .text {
    position: relative;
    margin: 0 auto;
    margin-bottom: 1.8rem;
  }

  ${media.lessThan("lg")`
    padding: 3rem 4rem 4rem;
    ${centerTextBlock};
    max-width: 37rem;
    .smallHeading {
      margin: 1rem 0 2rem;
    } 

    
  `}

  ${media.lessThan("sm")`
    display: block;
    box-shadow: none !important;
    padding: 3rem 2rem 0;
    max-width: 29rem;

   .imageName {
    margin-bottom: 2rem;
  }

  .text {
    position: relative;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  
  `}
`
