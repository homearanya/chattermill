import React from "react"

import { Button, ButtonLink } from "../styles/common.styled"

interface UniversalButtonLinkProps {
  button: {
    text: string
    link: string
    wide?: boolean
    secondary?: boolean
    inverted?: boolean
  }
  className?: string
}

const UnivButtonLink = ({
  button: { text, link, wide, secondary, inverted },
  className,
}: UniversalButtonLinkProps) =>
  link &&
  (link.indexOf("http://") !== -1 || link.indexOf("https://") !== -1) ? (
    <Button
      href={link}
      wide={typeof wide === "undefined" ? true : wide}
      secondary={secondary}
      inverted={inverted}
      className={className}
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
    >
      {text}
    </ButtonLink>
  )

export default UnivButtonLink
