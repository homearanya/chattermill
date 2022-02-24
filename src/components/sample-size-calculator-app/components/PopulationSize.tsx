import React from "react"
import icon from "../imgs/icon-info.svg"

export default function PopulationSize(props) {
  return (
    <div id="populationSizeSection">
      <label htmlFor="populationSize">
        Population Size{" "}
        <span tabIndex={0}>
          <img src={icon} alt="" width="14" height="14" />{" "}
          <span>
            The total number of people in the demographic you want to measure.
            If you are unsure, use 1,000.
          </span>
        </span>
      </label>
      <div>
        <input
          type="number"
          id="populationSize"
          value={props.population}
          onChange={props.updatePopulation}
        />
      </div>
    </div>
  )
}
