import React, { Component } from "react"
import { GatsbyImage } from "gatsby-plugin-image"

export default class SentimentAnalysisType extends Component {
  render() {
    return (
      <div className="sa-type-wrapper">
        <GatsbyImage
          image={this.props.icon}
          alt={this.props.iconAlt}
          width="150"
          height="150"
        />
        <div className="sa-text-wrapper">
          <h3>{this.props.title}</h3>
          <p>{this.props.copy}</p>
        </div>
      </div>
    )
  }
}
