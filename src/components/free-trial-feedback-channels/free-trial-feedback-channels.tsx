import React from "react"

import { Row } from "react-awesome-styled-grid"
import {
  StyledIcon,
  StyledCol,
  StyledModule,
} from "./free-trial-feedback-channels.styled"

export interface FeedbackChannelProps {
  channels: {
    name: string
    icon: string
  }[]
}

export const TrialFeedbackChannel = ({ channels }: FeedbackChannelProps) => {
  return (
    <>
      {channels.map((channel, index) => {
        const { name, icon } = channel
        return (
          <StyledCol key={index} xs={4} sm={4} md={4} lg={4}>
            <Row key={index}>
              <StyledModule>
                <StyledIcon src={icon} alt={name} key={index} />
              </StyledModule>
            </Row>
          </StyledCol>
        )
      })}
    </>
  )
}

export default TrialFeedbackChannel
