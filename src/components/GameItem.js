import React, { Component } from "react";
import "../App.css";
import ItemIcons from "../ItemIcons.js";
import PropTypes from "prop-types";

class GameItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spottedClass: ""
    };
  }

  handleClick = () => {
    if (this.props.item.type === "litter") {
      this.setState({ spottedClass: "spotted-litter" });
    } else {
      this.setState({ spottedClass: "spotted-nature" });
    }

    this.props.clickHandler(this.props.item);
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.item.type];

    return (
      <div
        className={`${this.state.spottedClass} game-item`}
        style={itemStyle}
        onClick={this.handleClick}
      >
        <img src={icon} alt="Item" className="icon-item" />
      </div>
    );
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
    clickHandler: PropTypes.func.isRequired
  };
}

export default GameItem;
