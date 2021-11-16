import React, { useState, useEffect } from "react"

import {
  List,
  Separator,
  ListItem,
  ListItemHeader,
  ListItemContent,
  ContentWrapper,
} from "./dropdown-tabs.styled"
import ContentArea from "./content-area"

interface TabsProps {
  data: GatsbyTypes.IntegrationPageQuery["contentfulIntegration"]["sections"]
  setTabsHeight: (e: number) => void
}
const Tabs = ({ data, setTabsHeight }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0)
  const [maxHeight, setMaxHeight] = useState(0)
  const [heights, setHeights] = useState(Array.from(data, () => 0))

  useEffect(() => {
    let maxHeight = 0
    heights.forEach((height) => {
      if (height > maxHeight) {
        maxHeight = height
      }
    })
    setMaxHeight(maxHeight)
    setTabsHeight(maxHeight + 81)
  }, [heights])

  return (
    <>
      <List>
        <Separator />
        {data.map(({ id, title }, i) => (
          <ListItem
            key={id}
            className={`${activeTab === i ? "active" : ""}`}
            onClick={() => setActiveTab(i)}
          >
            <ListItemHeader>{title}</ListItemHeader>
          </ListItem>
        ))}
      </List>
      <ContentWrapper maxHeight={maxHeight}>
        {data.map((item, i) => {
          return (
            <ListItemContent
              key={item.id}
              ref={(e) => {
                e &&
                  setHeights((heights) => {
                    heights[i] = e.clientHeight
                    return heights
                  })
              }}
              className={`${activeTab === i ? "active" : ""}`}
            >
              <ContentArea content={item} />
            </ListItemContent>
          )
        })}
      </ContentWrapper>
    </>
  )
}

export default Tabs
