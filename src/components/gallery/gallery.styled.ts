import styled from "styled-components";

import Image from "../image";
import Modal from "../modal";
import media from "../../styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ImageWrapper = styled.div`
  cursor: pointer;
  padding: 1rem;
  width: 33.3333%;
  ${media.lessThan("lg")`
    width: 50%;
  `};
  ${media.lessThan("sm")`
    width: 100%;
  `};
`;

export const Thumbnail = styled(Image)`
  object-fit: cover;
  height: 280px;
`;
export const StyledModal = styled(Modal)`
  .modal-container {
    height: unset;
  }
`;
