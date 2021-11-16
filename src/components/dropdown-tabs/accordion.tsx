import React, { useState } from "react"

import {
  AccordionList,
  AccordionListItem,
  AccordionListItemHeader,
  AccordionTitle,
  ArrowDownIcon,
  ArrowUpIcon,
  AccordionListItemContent,
} from "./dropdown-tabs.styled"

import ContentArea from "./content-area"

interface AccordionProps {
  data: GatsbyTypes.IntegrationPageQuery["contentfulIntegration"]["sections"]
}
const Accordion = ({ data }: AccordionProps) => {
  const [heights, setHeights] = useState(Array.from(data, () => 0))
  const [activeTab, setActiveTab] = useState(Array.from(data, () => false))

  return (
    <AccordionList>
      {data.map((item, i) => (
        <AccordionListItem
          key={item.id}
          className={`${activeTab[i] ? "active" : ""}`}
          onClick={() =>
            setActiveTab((activeTab) => {
              const copyActiveTab = activeTab.slice()
              copyActiveTab[i] = !activeTab[i]
              return copyActiveTab
            })
          }
        >
          <AccordionListItemHeader>
            <AccordionTitle>{item.title}</AccordionTitle>
            {activeTab[i] ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </AccordionListItemHeader>
          <AccordionListItemContent
            height={heights[i]}
            className={`${activeTab[i] ? "active" : ""}`}
          >
            <div
              ref={(e) => {
                e &&
                  setHeights((heights) => {
                    heights[i] = e.clientHeight
                    return heights
                  })
              }}
            >
              {<ContentArea content={item} />}
            </div>
          </AccordionListItemContent>
        </AccordionListItem>
      ))}
    </AccordionList>
  )
}

export default Accordion
