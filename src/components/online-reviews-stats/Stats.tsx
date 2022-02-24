import React, { Component } from "react"
import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"
import Section4 from "./Section4"
import Section5 from "./Section5"
import Section6 from "./Section6"

export default class Stats extends Component {
  render() {
    return (
      <section>
        <div id="bg1"></div>
        <Section1></Section1>

        <div id="bg2"></div>
        <Section2></Section2>

        <div id="bg1"></div>
        <Section3></Section3>

        <div id="bg2"></div>
        <Section4></Section4>

        <div id="bg1"></div>
        <Section5></Section5>

        <div id="bg2"></div>
        <Section6></Section6>
      </section>
    )
  }
}
