import styled, { css } from "styled-components";

import media from "../../styles/media";
import {
  $colorPrimary,
  $colorHeading,
  $colorSecondary,
  $greyUltraLight
} from "../../styles/variables";
import ArrowDown from "../../images/arrow-down.inline.svg";

export const ArrowDownIcon = styled(ArrowDown)`
  fill: ${$colorHeading};
  margin-left: 1rem;
  height: 1rem;
  width: 1rem;
  transition: fill 0.3s;
`;

export const ArrowUpIcon = styled(ArrowDownIcon)`
  transform: rotateX(180deg);
`;

export const Wrapper = styled.div`
  border-top: 1px solid ${$greyUltraLight};
  position: relative;
  overflow: hidden;
`;
export const HeaderWrapper = styled.div`
  min-height: 6.1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${$greyUltraLight};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 1;
  :hover {
    ${ArrowDownIcon} {
      fill: ${$colorSecondary};
    }
  }
`;
export const Title = styled.span`
  font-size: 1.7rem;
`;
interface TabsContainerProps {
  isOpen: boolean;
  tabsHeight: number;
}
export const TabsContainer = styled.div<TabsContainerProps>`
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  height: ${({ isOpen, tabsHeight }) => (isOpen ? `${tabsHeight}px` : 0)};
  ${({ isOpen }) => css`
    ${media.lessThan("sm")`
      height: ${isOpen ? "auto" : 0};
    `}
  `}
`;

interface TabsWrapperProps {
  isOpen?: boolean;
  tabsHeight: number;
}
export const TabsWrapper = styled.div<TabsWrapperProps>`
  position: relative;
  width: 100%;
  padding: 2rem 6rem;
  ${media.lessThan("sm")`
    padding: 2rem 3rem;

  `}
`;
export const List = styled.ul`
  position: relative;
  list-style: none;
  display: flex;
`;
export const Separator = styled.div`
  background: ${$greyUltraLight};
  position: absolute;
  width: 100%;
  height: 1px;
  top: calc(100% - 2px);
  left: 0;
  z-index: -1;
`;
export const ListItem = styled.li`
  border-bottom: 3px solid transparent;
  transition: all 0.2s;
  &.active {
    border-bottom: 3px solid ${$colorPrimary};
  }
  &:hover {
    border-bottom: 3px solid ${$colorPrimary};
  }
`;
export const ListItemHeader = styled.h4`
  padding: 1.5rem 2rem;
  transition: all 0.2s;
  font-size: 18px;
  font-weight: 600;
  color: ${$colorHeading};
  cursor: pointer;
  ${ListItem}.active & {
    color: ${$colorPrimary};
  }
  ${ListItem} &:hover {
    color: ${$colorPrimary};
  }

  ${media.lessThan("sm")`
    font-size: 16px;
  `}
`;
export const ListItemContent = styled.div`
  position: absolute;
  width: 100%;
  padding: 3rem 0 6rem;

  opacity: 0;
  transition: all 0.2s;
  &.active {
    opacity: 1;
    border-bottom: 0;
  }

  p {
    color: ${$colorHeading};
    font-size: 18px;
    font-weight: 300;
    line-height: 31px;
  }

  ${media.lessThan("md")`
    p {
      font-size: 16px;
      line-height: 29px;
    }
  `}
  ${media.lessThan("sm")`
    p {
      font-size: 14px;
      line-height: 28px;
    }
  `}
`;
interface ContentWrapperProps {
  maxHeight: number;
}
export const ContentWrapper = styled.div<ContentWrapperProps>`
  position: relative;
  height: ${({ maxHeight }) => (maxHeight ? `${maxHeight}px` : 0)};
`;

export const AccordionList = styled.ul`
  list-style: none;
`;
export const AccordionListItem = styled.li`
  border-bottom: 1px solid ${$greyUltraLight};
  .active {
    border-bottom: 1px solid ${$greyUltraLight};
  }
`;
export const AccordionListItemHeader = styled.h4`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0 0;
`;

export const AccordionTitle = styled.span`
  font-size: 1.7rem;
`;
interface AccordionListItemContentProps {
  height: number;
}
export const AccordionListItemContent = styled.div<
  AccordionListItemContentProps
>`
  overflow: hidden;
  height: 0;
  margin: 1rem 0;
  transition: all 0.2s;
  &.active {
    border-bottom: 0;
  }
  &.active {
    height: ${({ height }) => `${height}px`};
  }

  p {
    font-size: 14px;
    line-height: 28px;
  }
`;
