import React from "react";
import Scroll from 'react-scroll'

var ScrollLink = Scroll.ScrollLink

const Link = (props) => {
  return <a {...props}>{props.children}</a>;
};

export default ScrollLink( Link )
