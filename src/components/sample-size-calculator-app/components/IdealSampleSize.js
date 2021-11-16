import React from "react";

export default function IdealSampleSize(props) {
  return (
    <div id="idealSampleSizeSection">
      <p>Your Ideal Sample Size:</p>
      <p className="ideal-sample-size">{props.sampleSize}</p>
    </div>
  );
}
