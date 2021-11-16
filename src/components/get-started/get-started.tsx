import * as React from 'react';
import { Title, Button, StyledSection, Description } from './get-started.styled'

export interface GetStartedProps {
  data: {
    title: string
    description: string
    button: {
      link: string;
      text: string;
    }
    smallText: string
  }
}

const GetStarted: React.FC<GetStartedProps> = ({ data }) => {
  const { title, description, button, smallText } = data

  return (
    <StyledSection>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button href={button.link}>{button.text}</Button>
      <p>{smallText}</p>
    </StyledSection>
  );
}

export default GetStarted;