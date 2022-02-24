import React from "react"
import icon from "../imgs/icon-info.svg"

export default function ConfidenceLevel(props) {
  return (
    <div id="confidenceLevelSection">
      <label>
        Confidence Level{" "}
        <span tabIndex={0}>
          <img src={icon} alt="" width="14" height="14" />{" "}
          <span>
            The percentage reflecting how sure you are that your results will
            fall within your margin of error.
          </span>
        </span>
      </label>
      <div>
        <button
          onClick={props.updateConfidence}
          data-value="1.65"
          className="confidence-level-option clo-90"
          tabIndex={0}
        >
          90%
        </button>
        <button
          onClick={props.updateConfidence}
          data-value="1.96"
          className="confidence-level-option clo-95 active"
          tabIndex={0}
        >
          95%
        </button>
        <button
          onClick={props.updateConfidence}
          data-value="2.58"
          className="confidence-level-option clo-99"
          tabIndex={0}
        >
          99%
        </button>
      </div>
    </div>
  )
}
