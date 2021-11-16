import styled from "styled-components";
import { Link } from "gatsby";
import { Container } from "react-awesome-styled-grid";

import Image from "../image";
import media from "../../styles/media";
import { $colorHeading, $colorPrimary } from "../../styles/variables";

export const SectionWrapper = styled.div`
  position: relative;
`;
export const StyledSection = styled.section`
  padding: 14rem 0;

  ${media.lessThan("lg")`
    padding: 11rem 0;
  `}
  ${media.lessThan("md")`
    padding: 8rem 0;
  `}
  ${media.lessThan("sm")`
    padding: 5rem 0;
  `}
`;

export const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const StyledImage = styled(Image)`
  height: 100%;
`;

export const Wrapper = styled.div`
  padding: 4rem 11rem;
  width: 100%;
  max-width: 102.5rem;
  border-radius: 3px;
  background: #ffffff;
  box-shadow: 0px 2px 11px #c2c0c0;
  text-align: center;

  .carousel-inner {
    display: flex;
    &::after{
      content: unset;
    }
  }

  .carousel-item {
    height: unset;
    display: flex;
    flex-direction: column;
    opacity: 0;
    &.behind {
      transform: translateX(-100%);
    }
    &.ahead {
      transform: translateX(100%);
    }
  }
  
  .active.carousel-item,
  .carousel-item-prev,
  .carousel-item-next {
    opacity: 1;
  }
  .carousel-item-prev,
  .carousel-item-next {
    transform: translateX(0) !important;
  }

  .carousel-indicators {
    transform: translateY(50%);
    li {
      align-self: center;
      background: #c5cac4;
      height: 7px;
      width: 7px;
      line-height: 1;
      border-radius: 50%;
      border: 0;
      &.active {
        background: ${$colorPrimary};
      }
    }
  }

  .carousel-control-prev,
  .carousel-control-next {
    top: unset;
    height: 3rem;
    width: 3rem;
    transform: translate(-50%, 50%);
    z-index: 16;
    > span {
      font-size: 2rem;
      color: #c5cac4;
    }
    &:hover {
      > span {
        color: ${$colorPrimary};
      }
    }
  }

  .carousel-control-prev {
    left: calc(50% - 5rem);
  }
  .carousel-control-next {
    left: calc(50% + 5rem);
  }
  ${media.lessThan("lg")`
    padding: 4rem 9rem;
  `}
  ${media.lessThan("md")`
    padding: 4rem 7rem;
  `}
  ${media.lessThan("sm")`
    padding: 3rem 4rem;
  `}
`;

export const Tagline = styled.span`
  display: inline-block;
  color: #c5cac4;
  font-size: 2.2rem;
  line-height: 2.8rem;
  margin-bottom: 1.5rem;
`;

export const Title = styled.h3`
  color: ${$colorHeading};
  font-size: 2.7rem;
  font-weight: 400;
  line-height: 3.5rem;
  text-align: center;
  margin-bottom: 2.5rem;
`;
export const SubTitle = styled.p`
  color: #c5cac4;
  font-size: 1.9rem;
  line-height: 2.4rem;
  text-align: center;
  margin-bottom: 2.5rem;
`;

export const ReadMore = styled(Link)`
  flex: 1;
  display: block;
  color: ${$colorPrimary};
  text-decoration: none;
  font-size: 1.9rem;
  font-weight: 400;

  line-height: 2.4rem;
  text-align: center;
  margin: 0 auto 4rem;
  display: flex;
  align-items: flex-end;

  span {
    display: inline-block;
    transform: translateX(0);
    transition: transform 0.2s;
  }

  &:hover {
    span {
      transform: translateX(1rem);
    }
  }
`;
