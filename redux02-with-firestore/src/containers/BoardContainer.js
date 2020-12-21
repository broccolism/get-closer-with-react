import React, { Component } from "react";
import { connect } from "react-redux";
import Board from "../components/Board";

class BoardContainer extends Component {
  state = {};
  initialSelectedBoard = {
    brdno: "",
    brdtitle: "",
    brdwriter: "",
    brddate: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSave = () => {
    console.log("SAVE");
    this.setState(this.initialSelectedBoard);
  };

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.selectedBoard);
  }

  render() {
    return <Board />;
  }
}

let mapStateToProps = (state) => {
  return {
    selectedBoard: state.selectedBoard,
  };
};
export default connect(mapStateToProps)(BoardContainer);
