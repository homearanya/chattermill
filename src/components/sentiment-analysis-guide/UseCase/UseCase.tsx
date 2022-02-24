import React, { Component } from "react";
import "./UseCase.css";

export default class UseCase extends Component {
  render() {
    return (
      <div className="sa-use-case-wrapper">
        <p className="sa-use-case-header main-header">
          Sentiment Analysis Use Case:
        </p>
        <h3 className="sa-use-case-title">{this.props.title}</h3>
        <p className="sa-use-case-tagline">
          <em>{this.props.tagline}</em>
        </p>

        <hr />

        <p className="sa-use-case-header">Sentiment analysis revealed:</p>
        <p>{this.props.revealed}</p>

        <p className="sa-use-case-header">Actionable result:</p>
        <p>{this.props.result}</p>
      </div>
    );
  }
}
