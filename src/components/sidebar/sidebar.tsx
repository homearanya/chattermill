import React, { useRef, useState } from "react";
import { useOnClickOutside } from "../../utils/hooks";

import {
  Wrapper,
  Aside,
  Close,
  FilterWrapper,
  FilterButton
} from "./sidebar.styled";

const Sidebar = ({ children }) => {
  const ref = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useOnClickOutside(ref, () => setSidebarOpen(false));

  return (
    <Wrapper ref={ref}>
      <FilterWrapper>
        <FilterButton
          as="button"
          type="button"
          onClick={() => setSidebarOpen(sidebarOpen => !sidebarOpen)}
        >
          Filter
        </FilterButton>
      </FilterWrapper>
      <Aside open={sidebarOpen}>
        <Close
          onClick={() => {
            setSidebarOpen(false);
          }}
        >
          X
        </Close>
        {children}
      </Aside>
    </Wrapper>
  );
};

export default Sidebar;
