import React, { useState } from "react"
import useMedia from "use-media"

import { $breakpoints } from "../../styles/media"
import {
  Wrapper,
  HeaderWrapper,
  Header,
  Title,
  TabsContainer,
  TabsWrapper,
  ArrowDownIcon,
  ArrowUpIcon,
} from "./dropdown-tabs.styled"

import Tabs from "./tabs"
import Accordion from "./accordion"

interface DropdownTabsProps {
  sections: GatsbyTypes.IntegrationPageQuery["contentfulIntegration"]["sections"]
}

const DropdownTabs = ({ sections }: DropdownTabsProps) => {
  const isMobile = useMedia({ maxWidth: $breakpoints.sm * 16 - 0.00001 })
  const [isOpen, setIsOpen] = useState(false)
  const [tabsHeight, setTabsHeight] = useState(0)

  return (
    <Wrapper>
      <TabsContainer isOpen={isOpen} tabsHeight={tabsHeight}>
        <TabsWrapper isOpen={isOpen} tabsHeight={tabsHeight}>
          {isMobile ? (
            <Accordion data={sections} />
          ) : (
            <Tabs data={sections} setTabsHeight={setTabsHeight} />
          )}
        </TabsWrapper>
      </TabsContainer>
      <HeaderWrapper>
        <Header onClick={() => setIsOpen(!isOpen)}>
          <Title>More information</Title>
          {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </Header>
      </HeaderWrapper>
    </Wrapper>
  )
}

export default DropdownTabs
