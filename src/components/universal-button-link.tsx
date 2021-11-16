import React from "react"
import styled from "styled-components"

import { Button, ButtonLink, ButtonClick } from "../styles/common.styled"

interface UniversalButtonLinkProps {
  button: ButtonData
  className?: string
  value?: string
  style?: React.CSSProperties
}

const UnivButtonLink = ({
  button,
  className,
  style,
}: UniversalButtonLinkProps) => {
  function RenderUniversalButton(button) {
    const {
      text,
      link,
      newTab = true,
      wide = false,
      secondary = false,
      inverted = false,
      onClick,
    } = button

    if (Array.isArray(button)) {
      return (
        <StyledBox>
          {button.map(element => {
            return (
              <Button
                key={element.link}
                id="child"
                href={element.link}
                wide={typeof wide === "undefined" ? true : wide}
                secondary={secondary}
                inverted={inverted}
                className={className}
                style={style}
                target={`${newTab ? "_blank" : "_self"}`}
              >
                {element.text}
              </Button>
            )
          })}
        </StyledBox>
      )
    } else if (!Array.isArray(button)) {
      return link ? (
        link.indexOf("http://") !== -1 || link.indexOf("https://") !== -1 ? (
          <Button
            href={link}
            wide={typeof wide === "undefined" ? true : wide}
            secondary={secondary}
            inverted={inverted}
            className={className}
            onClick={onClick}
            style={style}
            target={`${newTab ? "_blank" : "_self"}`}
          >
            {text}
          </Button>
        ) : (
          <ButtonLink
            to={link}
            wide={typeof wide === "undefined" ? true : wide}
            secondary={secondary}
            inverted={inverted}
            className={className}
            style={style}
            onClick={onClick}
          >
            {text}
          </ButtonLink>
        )
      ) : (
        <ButtonClick
          type="button"
          wide={typeof wide === "undefined" ? true : wide}
          secondary={secondary}
          inverted={inverted}
          className={className}
          style={style}
          onClick={onClick}
        >
          {text}
        </ButtonClick>
      )
    } else {
      return
    }
  }
  return RenderUniversalButton(button)
}

export default UnivButtonLink

export const StyledBox = styled.div`
  display: flex;
  flex-direction: row;

  #child {
    margin-right: 10px;
  }
`
