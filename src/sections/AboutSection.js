import React, { Component } from "react";

import "./AboutSection.css";
import data from "../data.json";
import FullPage from "../components/FullPage";

class AboutSection extends Component {
  render() {
    return (
      <FullPage className="second" color={this.props.color} backgroundColor={this.props.backgroundColor}>
        <div className="container">
          <div className="wrapper1">
            <h1>{data.sections[0].title}</h1>
            {data.sections[0].items.map(item => (
              <p>{item.content}</p>
            ))}
          </div>
        </div>
      </FullPage>
    );
  }
}

export default AboutSection;
