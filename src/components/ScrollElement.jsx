import React from "react";
import Scroll from 'react-scroll'

var ScrollElement = Scroll.ScrollElement

const Element = (props) => {
  return (
    <div
      {...props}
      ref={(el) => {
        props.parentBindings.domNode = el;
      }}
    >
      {props.children}
    </div>
  );
};

export default ScrollElement( Element )
