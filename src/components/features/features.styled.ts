import styled, { css } from "styled-components"
import { Col, Row } from "react-awesome-styled-grid"

import media from "../../styles/media"
import { $colorHeading } from "../../styles/variables"
import TextBlock from "../text-block"
import {
  verticalCenter,
  transitionIntoView,
  centerTextBlock,
  aspectRatio,
} from "../../styles/mixins"

import ShapeLeft from "../../images/shape1.inline.svg"
import Image from "../image"
import { WideContainer } from "../../styles/common.styled"

export const StyledWideContainer = styled(WideContainer)`
  ${media.lessThan("md")`
      margin: 3rem 0 !important;
  `}

  ${media.lessThan("sm")`
    padding: 2.5rem 0 !important;
    margin-top: 0 !important;
    margin-bottom: 2rem !important;
  `};
`

export const StyledCol = styled(Col)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.lessThan("sm")`
    &:first-child {
      margin-bottom: 3rem;
    }
  `}
`
export const StyledRow = styled(Row)`
  margin: 9rem 0;

  ${media.lessThan("lg")`
    margin: 2rem 0;
  `};
`

const shape = (color: string) => css`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  fill: ${color};
  z-index: -1;
`

interface StyledShapeLeftProps {
  color: string
}
export const StyledShapeLeft = styled(ShapeLeft)<StyledShapeLeftProps>`
  ${(props) => shape(props.color)};
  left: -30%;
`

interface StyledShapeRightProps {
  color: string
}

export const StyledShapeRight = styled(ShapeLeft)<StyledShapeRightProps>`
  transform: rotateY(180deg);
  ${(props) => shape(props.color)};
  right: -30%;
`

interface AssetWrapperProps {
  withObserver?: boolean
  inView?: boolean
  justifyRight?: boolean
}

const assetWrapper = ({
  justifyRight,
  withObserver,
  inView,
}: AssetWrapperProps) => css`
  margin: 0 auto;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-left: ${justifyRight && "auto"};
  ${transitionIntoView(withObserver, inView)};

  ${media.lessThan("sm")`
    margin-bottom: 2rem;
  `};
`

export const OuterVideoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const VideoWrapper = styled.div<AssetWrapperProps>`
  ${(props) => assetWrapper(props)};

  ${aspectRatio(16, 9)}

  video {
    display: block;
    object-fit: fill;
  }
  ${media.lessThan("sm")`
    margin-bottom: 2rem;
  `};
`
interface StyledTextBlockProps {
  textPosition?: string
}
export const StyledTextBlock = styled(TextBlock)<StyledTextBlockProps>`
  ${verticalCenter};

  .subHeading {
    color: ${$colorHeading};
    font-size: 6rem;
    margin-bottom: 3rem;
  }

  ${media.lessThan("lg")`
    .subHeading {
      font-size: 5rem 
    }
  `};

  ${media.lessThan("md")`
    margin: 0 2rem;
    
    .subHeading {
        font-size: 4rem;
        margin-bottom: 2rem;
      }
  `}

  ${media.lessThan("sm")`
    ${centerTextBlock};
  `};
`

export const ImageWrapper = styled.div`
  width: 100%;
`

export const StyledImage = styled(Image)<AssetWrapperProps>`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  ${(props) => assetWrapper(props)};
`
