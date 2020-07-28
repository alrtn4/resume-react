import React, { Component } from "react";
import './Card.css'

class Card extends Component {
  render() {
    const { item } = this.props;
    return (
      <div>
        <div className="card">
          <i className={item.content.image} style={{ fontSize: "6rem" }}></i>
          <p>{item.content.title}</p>
        </div>
      </div>
    );
  }
}

export default Card;
