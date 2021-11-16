import React from "react";
import icon from "../imgs/icon-info.svg";

export default function ErrorMargin(props) {
  return (
    <div id="errorMarginSection">
      <label htmlFor="errorMargin">
        Margin of Error{" "}
        <span tabIndex="0">
          <img src={icon} alt="" width="14" height="14" />{" "}
          <span>
            The percentage of error you are willing to allow in your results.
          </span>
        </span>
      </label>
      <div>
        <select
          name="margin-error"
          id="errorMargin"
          defaultValue={props.margin}
          onChange={props.updateMargin}
        >
          <option value="1">1%</option>
          <option value="2">2%</option>
          <option value="3">3%</option>
          <option value="4">4%</option>
          <option value="5">5%</option>
          <option value="6">6%</option>
          <option value="7">7%</option>
          <option value="8">8%</option>
          <option value="9">9%</option>
          <option value="10">10%</option>
        </select>
      </div>
    </div>
  );
}
