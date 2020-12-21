import React, { Component } from "react";
import { connect } from "react-redux";
import Pallette from "../components/Palette";
import { changeColor } from "../store/modules/counter";

class PaletteContainer extends Component {
  handleSelect = (color) => {
    const { changeColor } = this.props;
    console.log("what");
    changeColor(color);
  };

  render() {
    const { color } = this.props;
    return <Pallette onSelect={this.handleSelect} selected={color} />;
  }
}

const mapStateToProps = ({ counterReducer }) => ({
  color: counterReducer.color,
});

const mapDispatchToProps = (dispatch) => ({
  changeColor: (color) => dispatch(changeColor(color)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaletteContainer);
