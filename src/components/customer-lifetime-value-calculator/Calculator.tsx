import React, { useState } from "react"
import Field from "./Field"

function Calculator(props) {
  const [fields, setFields] = useState(props.config)
  const [result, setResult] = useState("0.00")

  function renderField(field, i) {
    return (
      <Field key={field.id} {...field} onChange={val => handleClick(val, i)} />
    )
  }

  function handleClick(val, i) {
    const newFields = fields.slice()
    newFields[i].value = val
    setFields(newFields)

    switch (props.id) {
      case "individual":
        setResult(calculateIndividual(fields))
        break

      case "average":
      default:
        setResult(calculateAverage(fields))
    }
  }

  return (
    <div className="clv-calculator" id={props.id}>
      <div className="clv-calculator-wrapper">
        <div className="top">
          <h4>{props.name}</h4>
        </div>

        <div className="middle">
          <div className="fields">
            {fields.map((field, i) => renderField(field, i))}
          </div>
        </div>

        <div className="bottom">
          <h5>{props.result}</h5>
          <div className="result">
            ${!isNaN(result) && result !== Infinity ? result : "0.00"}
          </div>
        </div>
      </div>
    </div>
  )
}

function calculateIndividual(a) {
  const ICLV = t(a, "value") * t(a, "yearly") * t(a, "duration")

  return ICLV.toFixed(2)
}

function calculateAverage(a) {
  const APV = t(a, "revenue") / t(a, "purchases"), // Average Purchase Revenue
    AFR = t(a, "purchases") / t(a, "customers"), // Average Frequency Rate
    CLV = APV * AFR * t(a, "lifespans") // Customer Lifetime Value

  return CLV.toFixed(2)
}

// Gets the item with id 'id' from the array of objects 'a'
function t(a, id) {
  return parseFloat(a.find(c => c.id === id).value)
}

export default Calculator
