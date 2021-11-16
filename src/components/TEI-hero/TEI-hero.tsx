import * as React from 'react';
import { WideContainer } from '../../styles/common.styled';
import { StyledSection, Title, Description, Button } from './TEI-hero.styled';
import { Row, Col } from "react-awesome-styled-grid";
import ReactPlayer from 'react-player';

export interface HeaderProps {
  hero: {
    title: string;
    description: string;
    button: {
      text: string
      link: string
    };
    videoURL: string;
  }
}

const TEIHero: React.FC<HeaderProps> = ({ hero }) => {
  const {title, description, button, videoURL} = hero
  return (
    <StyledSection>
      <WideContainer>
        <Row align='center'>
          <Col xs={4} sm={4} md={5} lg={5}>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Button to={button.link}>{button.text}</Button>
          </Col>
          <Col xs={4} sm={4} md={7} lg={6} offset={{ lg: 1 }}>
            <div className="TEI-player-wrapper">
              <ReactPlayer
                controls={true}
                url={videoURL}
                className="TEI-react-player"
                width="100%"
                height="100%"
              />
            </div>
          </Col>
        </Row>
      </WideContainer>
    </StyledSection>
  );
}

export default TEIHero;