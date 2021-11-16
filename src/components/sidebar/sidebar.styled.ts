import styled, { css } from "styled-components";

import { $greyUltraLight } from "../../styles/variables";
import { boxShadow } from "../../styles/mixins";
import media from "../../styles/media";
import { Button } from "../../styles/common.styled";

export const Wrapper = styled.div`
  position: sticky;
  top: 5rem;
  height: calc(100vh - 5rem);
  overflow-y: auto;
  min-width: 25rem;
  z-index: 1;
`;

interface AsideProps {
  open?: boolean;
}
export const Aside = styled.aside<AsideProps>`
  position: relative;
  transform: translateX(0);
  transition: all 0.3s;
  ${({ open }) =>
    css`
      ${media.lessThan("md")`
        transform: ${
          !open ? "translateX(-120%) scale(0)" : "translateX(-1.5rem) scale(1)"
        };
        background: ${$greyUltraLight};
        padding: 3rem 2rem;
        z-index: ${open ? "1" : "-2"}
        ${boxShadow};
      `}
    `};
`;
export const Close = styled.div`
  font-weight: bold;
  font-size: 2rem;
  position: absolute;
  top: 0rem;
  right: 0rem;
  padding: 1.5rem;
  display: none;
  ${media.lessThan("md")`
    display: block;
  `}
`;

export const FilterWrapper = styled.div`
  position: relative;
  top: 1rem;
  width: 100%;
  transform: translateX(-128%);
  ${media.lessThan("md")`
    transform: translateX(0);
    margin-bottom: 2rem;
  `}
`;

export const FilterButton = styled(Button)``;
