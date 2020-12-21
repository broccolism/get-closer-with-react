import React from "react";
import { board_read } from "../store/modules/board";
import { connect } from "react-redux";
import BoardItem from "../components/BoardItem";

class BoardItemContainer extends React.Component {
  handleClick = () => {
    this.props.board_read(this.props.idx);
  };

  render() {
    const { idx, row } = this.props;
    return <BoardItem idx={idx} row={row} onClick={this.handleClick} />;
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   board_read: (postNo) => dispatch(board_read(postNo)),
// });

// SAME CODE!

const mapDispatchToProps = { board_read };

export default connect(null, mapDispatchToProps)(BoardItemContainer);
