import React, { useRef, useEffect } from "react"
import LazyLoad from "react-lazyload"
import styled from "styled-components"

import {
  StyledText,
  StyledCard,
  RadientStroke,
  StyledParagraph,
  StyledThumbnail,
} from "./webinar-card.styled"

// const handleWebinarClick = () => {
//   window.analytics && window.analytics.track("Clicked Button", {
//     email: "dummy@dummy.com",
//     label: "Clicked Webinar Button",
//   })
// }

export interface WistiaVideo {
  id__normalized: number
  hashed_id: string
  name: string
  description: string
  created: string
  updated: string
  duration: number
  thumbnail: {
    url: string
  }
}

interface WebinarCardProps {
  video: WistiaVideo
  index?: number
  setWebinarTitleHeights?: React.Dispatch<React.SetStateAction<{}>>
  height?: number
}
export const WebinarCard = ({
  video,

  index = 0,
  setWebinarTitleHeights,
  height,
}: WebinarCardProps) => {
  const { hashed_id, name, description } = video
  const headingRef = useRef(null)

  const wistiaThumbnail = `<span class=\"wistia_embed wistia_async_${hashed_id} popover=true\">&nbsp;</span>`

  const handleClick = () => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: "Webinar View",
      video,
    })
  }

  useEffect(() => {
    if (headingRef.current && setWebinarTitleHeights) {
      setWebinarTitleHeights(titles => {
        titles[`title${index}`] = headingRef.current.clientHeight
        return titles
      })
    }
  }, [headingRef.current && headingRef.current.clientHeight])
  return (
    <StyledCard>
      <StyledLazyLoad style={{ width: "100%" }}>
        <StyledThumbnail
          dangerouslySetInnerHTML={{ __html: wistiaThumbnail }}
          onClick={() => handleClick()}
        />
      </StyledLazyLoad>
      <StyledText ref={headingRef} textHeight={height}>
        {name}
      </StyledText>
      <RadientStroke />
      <StyledParagraph dangerouslySetInnerHTML={{ __html: description }} />
    </StyledCard>
  )
}
const StyledLazyLoad = styled(LazyLoad)`
  width: 100%;
`

export default WebinarCard
