import React, { Component } from "react";

import "./SkillsSection.css";
import FullPage from "../components/FullPage";
import Card from "../components/Card";
import data from "../data.json";
import SkillElement from "../components/ScrollElement";

class SkillsSection extends Component {
  render() {
    return (
      <FullPage
        className="third"
        color={this.props.color}
        backgroundColor={this.props.backgroundColor}
      >
        <SkillElement />
        <div className="container">
          <h1>{data.sections[1].title}</h1>
          <div className="wrapper2">
            {data.sections[1].items.map((item) => {
              return <Card item={item} />;
            })}
          </div>
        </div>
      </FullPage>
    );
  }
}

export default SkillsSection;
