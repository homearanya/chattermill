import React from "react"
import Icon from "./Icon"

function tooltips(text) {
  if (text > "") {
    return (
      <div className="tooltip-container">
        <span className="tooltip-button">
          <Icon name="info" />
        </span>
        <div className="tooltip-msg">{text}</div>
      </div>
    )
  } else {
    return ""
  }
}

function Field(props) {
  return (
    <div className={"field field-type-" + props.type}>
      <div className="label">
        <label htmlFor={props.id}>{props.label}</label>

        {tooltips(props.tooltip)}
      </div>

      <div className="field-wrapper">
        <input
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          defaultValue={props.value}
          onChange={e => props.onChange(e.target.value)}
          //onSelect={e => props.type === 'text' ? e.target.setSelectionRange(0, e.target.value.length) : ''}
          max={props.max}
          min={props.min}
        />
      </div>
    </div>
  )
}

export default Field
