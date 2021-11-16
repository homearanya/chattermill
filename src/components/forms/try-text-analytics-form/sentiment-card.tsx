import React from "react";

import emojiNeutral from "../../../images/emoji-neutral.svg";
import emojiNegative from "../../../images/emoji-negative.svg";
import emojiPositive from "../../../images/emoji-positive.svg";

import { Tag, Emoji, Parent, Name } from "./sentiment-card.styled";

interface SentimentCardProps {
  parent: string;
  name: string;
  sentiment: number;
}

const SentimentCard = ({ parent, name, sentiment }: SentimentCardProps) => {
  let emoji, cardBackground;
  switch (sentiment) {
    case 1:
      emoji = emojiPositive;
      cardBackground =
        "linear-gradient(-180deg, rgba(37, 177, 73, 0.1) 0%, rgba(37, 177, 73, 0.12) 97%)";
      break;
    case -1:
      emoji = emojiNegative;
      cardBackground =
        "linear-gradient(-180deg, rgba(238, 48, 116, 0.08) 0%, rgba(238, 48, 116, 0.1) 97%)";
      break;
    default:
      emoji = emojiNeutral;
      cardBackground =
        "linear-gradient(-180deg, rgba(18, 135, 252, 0.08) 0%, rgba(18, 135, 252, 0.09) 57%, rgba(18, 135, 252, 0.1) 97%)";
  }
  return (
    <Tag background={cardBackground}>
      <Emoji src={emoji} alt="Emoji Positive" />
      <Parent>{`${parent}: `}</Parent>
      <Name>{name}</Name>
    </Tag>
  );
};

export default SentimentCard;
