import React, { useState } from "react"

import {
  Wrapper,
  SelectedWrapper,
  StyledDoubleArrow,
  IndustryTypesWrapper,
  IndustryContainer,
  List,
  ListItem,
} from "./filter.styled"

interface FilterProps {
  industryTypes: string[]
  setFilter: React.Dispatch<string>
}

const Filter = ({ industryTypes, setFilter }: FilterProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const [height, setHeight] = useState<number | null>(null)
  return (
    <Wrapper>
      <SelectedWrapper onClick={() => setOpen((open) => !open)}>
        <span>{industryTypes[selectedIndex]}</span>
        <StyledDoubleArrow />
      </SelectedWrapper>
      <IndustryTypesWrapper open={open} height={height}>
        <IndustryContainer ref={(div) => div && setHeight(div.clientHeight)}>
          <List>
            {industryTypes.map((industryType, index) => {
              return (
                <ListItem
                  key={industryType}
                  selected={selectedIndex === index}
                  onClick={() => {
                    setSelectedIndex(index)
                    setOpen(false)
                    setFilter(industryTypes[index])
                  }}
                >
                  {industryType}
                </ListItem>
              )
            })}
          </List>
        </IndustryContainer>
      </IndustryTypesWrapper>
    </Wrapper>
  )
}

export default Filter
