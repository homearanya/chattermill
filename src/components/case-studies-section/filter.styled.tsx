import styled from "styled-components";

import { $greyLight, $greyUltraLight, $white } from "../../styles/variables";

import DoubleArrow from "../../images/double-arrow.inline.svg";

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 5rem;
  z-index: 1;
`;
export const SelectedWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  border: 1px solid ${$greyLight};
  max-width: 25rem;
  margin-bottom: 1rem;
  cursor: pointer;
`;
export const StyledDoubleArrow = styled(DoubleArrow)`
  width: 1rem;
  height: 2rem;
`;
interface IndustryTypesWrapperProps {
  open: boolean;
  height: number;
}
export const IndustryTypesWrapper = styled.div<IndustryTypesWrapperProps>`
  width: 100%;
  background: ${$white};
  position: absolute;
  top: calc(100% + 1rem);
  left: 0;
  border: 1px solid ${$greyLight};
  max-width: 25rem;
  overflow: hidden;
  transition: all 0.2s;
  opacity: ${({ open }) => (open ? 1 : 0)};
  height: ${({ open, height }) => (open ? `${height}px` : 0)};
`;

export const IndustryContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const List = styled.ul`
  list-style: none;
`;
interface ListItemProps {
  selected: boolean;
}
export const ListItem = styled.li<ListItemProps>`
  padding: 1rem 2rem;
  font-size: 1.6rem;
  background-color: ${({ selected }) =>
    selected ? $greyUltraLight : "transparent"};
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: ${$greyUltraLight};
  }
`;
