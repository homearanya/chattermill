import styled from "styled-components";
import { $colorPrimary, $colorSecondary } from "../../styles/variables";
import UnivButtonLink from "../universal-button-link";

export const Wrapper = styled.div`
  padding-right: 5rem;
`;
interface MenuItemProps {
  active: boolean;
}

export const MenuItem = styled.div<MenuItemProps>`
  max-width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
  opacity: ${({ active }) => (active ? 1 : 0.4)};
  border-bottom: ${({ active }) =>
    active ? `2px solid ${$colorPrimary}` : "2px solid transparent"};
  transition: all 0.2s;
  cursor: pointer;

  /* span {
    transition: all 0.2s;
    color: ${({ active }) =>
      active ? `${$colorPrimary}` : `${$colorSecondary}`};
  } */

  :hover {
    opacity: 1;
    border-bottom: 2px solid ${$colorPrimary};
    /* span {
      color: ${$colorPrimary};
    } */
  }
`;
export const PartnerType = styled.span`
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.7rem;
`;
export const PartnerTypeCount = styled.span`
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.7rem;
`;
export const IntegrationBlock = styled.div`
  margin-top: 10rem;
`;

export const IntegrationText = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2rem;
  color: ${$colorSecondary};
  margin-bottom: 1rem;
`;
export const StyledUnivButtonLink = styled(UnivButtonLink)`
  &&&,
  &&&:link,
  &&&:visited {
    font-size: 1.5rem;
    border-radius: 0.5rem;
    padding: 1.5rem 4rem;
  }
`;
