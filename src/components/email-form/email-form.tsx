import React, { useState } from "react"
import { navigate } from "gatsby"

import { StyledForm, StyledInput, StyledButton } from "./email-form.styled"

export interface EmailFormData {
  textPlaceholder: string
  buttonText: string
}

interface EmailFormProps {
  readonly data: EmailFormData
  readonly border?: boolean
  readonly className?: string
}

export const EmailForm = ({ data, border, className }: EmailFormProps) => {
  const [email, setEmail] = useState("")
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setEmail("")
    e.preventDefault()
    navigate("/contact/", {
      state: { email },
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value)

  const { textPlaceholder, buttonText } = data
  return (
    <StyledForm id="email-form" className={className} onSubmit={handleSubmit}>
      <StyledInput
        type="email"
        name="email"
        placeholder={textPlaceholder}
        aria-label="email"
        required
        value={email}
        onChange={handleChange}
        border={border}
      />
      <StyledButton
        as="input"
        type="submit"
        value={buttonText}
        wide
        secondary
      />
    </StyledForm>
  )
}

export default EmailForm
