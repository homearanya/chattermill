import React from "react";
export default function Section(props) {
  return (
    <section id={props.id}>
      {props.heading === "h1" ? <h1>{props.title}</h1> : <h2>{props.title}</h2>}

      <div className="content-section">{props.body}</div>
    </section>
  );
}
