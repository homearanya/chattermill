import React from "react";
import Icons from "./images/svg/icons.svg";

export default function Icon(props) {
  return (
    <span>
      <svg className={`icon icon-${props.name}`} fill="#FFFFFF">
        <use xlinkHref={`${Icons}#icon-${props.name}`} />
      </svg>
    </span>
  );
}
