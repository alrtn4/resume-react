import React, { Component } from "react";

import Link from "./ScrollLink";
import data from '../data.json'
import './Nav.css'

let num = 0 ;

class Nav extends Component {
    render() {
      const changeTheme = (props) => {
      num++;
      let index = num % 3 ;
      props.setState({color : data.colorsbackgrounds[index].color})
      props.setState({backgroundColor: data.colorsbackgrounds[index].background})
    }
    return (
      <div>
        <ul className="nav-list">
          <li>
            {
              <Link className="link" id="first-item" to="About" spy={true} smooth={true} duration={500}>
                About
              </Link>
            }
          </li>
          <li>
            {
              <Link className="link" spy={true} smooth={true} duration={500}>
                Skills
              </Link>
            }
          </li>
          <li 
            className="link" 
            id='last-item' 
            onClick={() => changeTheme(this.props)}
          >
            Theme
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
