import styled from "styled-components";
import { Container } from "react-awesome-styled-grid";

import { $colorPrimary, $white } from "../../styles/variables";
import { centerTextBlock, staggeredAnimation } from "../../styles/mixins";
import { fadeInTop } from "../../styles/common.styled";

import media from "../../styles/media";

import TextBlock from "../text-block";

export const StyledSection = styled.section`
  padding: 10rem 0;
  ${media.lessThan("sm")`
      padding: 5rem 0;
  `};
`;
export const StyledContainer = styled(Container)``;
interface StyledTextBlockProps {
  classNames: string[];
}

export const StyledTextBlock = styled(TextBlock)<StyledTextBlockProps>`
  max-width: 51rem;
  margin: 0 auto 6rem;
  .subHeading {
    font-size: 3rem;
    line-height: 3.8rem;
    margin-bottom: 3rem;
    text-align: center;
  }
  .text {
    text-align: center;
  }

  ${props =>
    props.classNames &&
    staggeredAnimation(fadeInTop, 1, 0, 0.2, props.classNames)}

  ${media.lessThan("sm")`
    padding: 3rem 0;
    ${centerTextBlock};
    
    .subHeading {
      font-size: 2.6rem;
      line-height: 3rem;
      margin-bottom: 2rem;
    }

  `}
`;

export const VideoTable = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem 3rem;

  ${media.lessThan("sm")`
      grid-template-columns: 1fr;
      grid-gap: 4rem 2rem;
      justify-items: center;
  `};

  &.in-modal {
    grid-gap: 3rem 3rem;
    ${media.lessThan("md")`
      grid-gap: 2rem 2rem;
  `};
  }
`;
export const VideoCard = styled.article`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 15px #d5daf0;
  max-width: 33rem;
`;
export const VideoCardHeader = styled.header``;
export const VideoCardThumbnail = styled.img`
  width: 100%;
`;
export const VideoCardBody = styled.body`
  padding: 3rem;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  ${media.lessThan("md")`
    padding: 2rem;
  `};
`;
export const VideoCardHeading = styled.h3`
  flex: 1 0 auto;
  font-size: 2.3rem;
  font-weight: 400;
  line-height: 3.1rem;
  margin-bottom: 1rem;
  text-align: center;
  ${media.lessThan("md")`
  font-size: 2rem;
  line-height: 2.8rem;
  `};
`;
export const VideoCardDescription = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.7rem;
  text-align: center;
  margin-bottom: 1rem;
  ${media.lessThan("md")`
    font-size: 1.3rem;
    line-height: 1.6rem;
  `};
`;
export const VideoCardButton = styled.button`
  appearance: none;
  display: block;
  margin: 0 auto;
  border: none;
  border-radius: 4px;
  padding: 0.7rem 2rem;
  background: ${$colorPrimary};
  color: ${$white};
  cursor: pointer;

  :focus {
    outline: none;
  }
`;
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;
export const ModalContainer = styled.div`
  width: 80vw;
  height: 95vh;
  max-width: 101.7rem;
  background: ${$white};
  overflow-y: auto;
`;
export const IFrameWrapper = styled.div`
  position: relative;
  height: 0;
  overflow: hidden;
  width: 100%;
  padding-top: 56.3%;
`;
export const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
export const RelatedVideosContainer = styled.div`
  padding: 3rem 5rem;
  ${media.lessThan("md")`
    padding: 3rem 3rem;
  `};
`;
export const RelatedHeading = styled.h4`
  font-size: 23px;
  font-weight: 400;
  line-height: 31px;
  margin-bottom: 1rem;
`;
export const Close = styled.div`
  font-weight: normal;
  font-size: 4rem;
  position: absolute;
  top: 0rem;
  right: 3rem;
  padding: 1.5rem;
  color: ${$white};
  cursor: pointer;
  ${media.lessThan("md")`
    right: 1rem;
  `};
  ${media.lessThan("sm")`
    font-size: 2rem;
    right: 0rem;
    padding: 1rem;
  `};
`;
