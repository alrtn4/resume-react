import React, { Component } from "react";
import { Link, Element } from "react-scroll";
import { SocialMediaIconsReact } from "social-media-icons-react";

import "./TitleSection.css";
import data from "../data.json";
import FullPage from "../components/FullPage";
import DownIcon from "../components/DownIcon";

class TitleSection extends Component {
  render() {
    return (
      <div>
        <FullPage
          className="first"
          color={this.props.color}
          backgroundColor={this.props.backgroundColor}
        >
          <div className="container">
            <h1>{data.title}</h1>
            <div>
              <h2>{data.subtitle}</h2>
            </div>
            <div>
              {Object.keys(data.links).map((key) => {
                return (
                  <div className="social-container">
                    <SocialMediaIconsReact
                      icon={key}
                      url={data.links[key]}
                      roundness={50}
                      iconSize={5}
                      size={50}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </FullPage>
        <Link to="About" spy={true} smooth={true} duration={500}>
          <DownIcon icon={data.icons.down} />
        </Link>
        <Element id="About" />
      </div>
    );
  }
}

export default TitleSection;
