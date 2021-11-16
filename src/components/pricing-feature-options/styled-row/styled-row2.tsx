import React from "react"

import {
  StyledRowHeader,
  StyledTR2,
  StyledRowDiv,
  StyledRow,
} from "../pricing-feature-options.styles"

const StyledTableRow2 = (props) => {
  return (
    <StyledTR2>
      <StyledRowHeader>
        <StyledRowDiv>
          {props.description}
          <span data-tip={props.tooltip}>{props.component}</span>
        </StyledRowDiv>
      </StyledRowHeader>
      <StyledRow> {props.fact1} </StyledRow>
      <StyledRow> {props.fact2} </StyledRow>
      <StyledRow
        style={{
          borderRight: "1px solid rgb(227, 236, 240)",
        }}
      >
        {props.fact3}
      </StyledRow>
    </StyledTR2>
  )
}

export default StyledTableRow2
