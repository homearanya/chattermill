import React from "react";

import { StyledTable, TBody, TR, TD } from "./table.styled";

interface TableProps {
  readonly data: [[string]];
}

const Table = ({ data: rows }: TableProps) => {
  return (
    <StyledTable>
      <TBody>
        {rows.map(row => (
          <TR>
            {row.map(column => (
              <TD>{column}</TD>
            ))}
          </TR>
        ))}
      </TBody>
    </StyledTable>
  );
};

export default Table;
