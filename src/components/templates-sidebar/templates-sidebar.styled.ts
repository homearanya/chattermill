import styled from "styled-components";

import { $colorPrimary } from "../../styles/variables";

export const CategoryHeading = styled.h3`
  font-size: 2rem;
  margin-bottom: 2rem;
`;
export const CategoryList = styled.ul`
  list-style: none;
`;

export const CategoryListItem = styled.li`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: ${$colorPrimary};
  }
`;
