import styled from "styled-components";
import media from "../../styles/media";
import { $colorHeading } from "../../styles/variables";

interface StyledBurgerProps {
  open: boolean;
}

export const StyledBurger = styled.button<StyledBurgerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2.5rem;
  height: 2.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  margin-right: 1rem;

  &:focus {
    outline: 0;
  }

  div {
    background-color: ${$colorHeading};
    width: 2.5rem;
    height: 0.4rem;
    border-radius: 1rem;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  ${media.greaterThan("md")`
    display: none;
  `};
`;
