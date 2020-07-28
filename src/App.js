import React, { Component } from "react";

import "./App.css";

import TitleSection from "./sections/TitleSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import Nav from "./components/Nav";
import SnowStorm from 'react-snowstorm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "MediumBlue",
      backgroundColor: "AliceBlue",
    };
    this.setState = this.setState.bind(this);
  }

  render() {
    return (
      <div className="App">
        <SnowStorm />
        <Nav setState={this.setState} state={this.state} />
        <TitleSection
          color={this.state.color}
          backgroundColor={this.state.backgroundColor}
        />
        <AboutSection
          color={this.state.color}
          backgroundColor={this.state.backgroundColor}
        />
        <SkillsSection
          color={this.state.color}
          backgroundColor={this.state.backgroundColor}
        />
      </div>
    );
  }
}

export default App;
