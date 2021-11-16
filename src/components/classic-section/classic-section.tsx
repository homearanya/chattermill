import React from "react";
import {
  StyledSection,
  StyledWrapper,
  LargeHeading,
  StyledLineBreak,
  StyledParagraph
} from "./classic-section.styled";

import TrialFeedbackChannel from "../free-trial-feedback-channels";
import TrainlineColorIcon from "../../images/trainline-color.svg";
import HellofreshColorIcon from "../../images/hello-fresh-color.svg";
import GetyourguideColorIcon from "../../images/getyourguide-color.svg";
import UberColorIcon from "../../images/uber-color.svg";
import TransferwiseColorIcon from "../../images/transferwise-color.svg";
import DeliverooColorIcon from "../../images/deliveroo-color.svg";

export const ClassicFormSection = () => {
  const channels = [
    {
      name: "Trainline",
      icon: TrainlineColorIcon
    },
    {
      name: "HelloFresh",
      icon: HellofreshColorIcon
    },
    {
      name: "Deliveroo",
      icon: DeliverooColorIcon
    }
  ];

  const test = [
    {
      name: "Get Your Guide",
      icon: GetyourguideColorIcon
    },
    {
      name: "Uber",
      icon: UberColorIcon
    },
    {
      name: "Transferwise",
      icon: TransferwiseColorIcon
    }
  ];

  return (
    <StyledSection>
      <LargeHeading>You're in great company</LargeHeading>
      <StyledParagraph>
        Join businesses who are using Chattermill to power world-class customer
        experiences
      </StyledParagraph>
      <StyledLineBreak></StyledLineBreak>
      <StyledWrapper>
        <TrialFeedbackChannel channels={channels} />
      </StyledWrapper>
      <StyledWrapper>
        <TrialFeedbackChannel channels={test} />
      </StyledWrapper>
    </StyledSection>
  );
};

export default ClassicFormSection;
