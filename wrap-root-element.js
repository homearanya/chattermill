import React from "react"
import { CookiesProvider } from "react-cookie"

export const wrapRootElement = ({ element }) => {
  return (
    <CookiesProvider>
      {/* this is here to prevent non-hubspot forms from being sent
    See https://community.hubspot.com/t5/Lead-Capture-Tools/Ignore-a-specific-non-Hubspot-form-from-being-collected/m-p/367909/highlight/true#M4606
    613982 is current Chattermill's Hubspot ID
    */}
      <span id="CollectedForms-613982"></span>
      {element}{" "}
    </CookiesProvider>
  )
}
