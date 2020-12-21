import React, { Component } from "react";
import { connect } from "react-redux";

import BoardList from "../components/BoardList";

import {
  firebaseBoardListByDate,
  firebase_board_list,
} from "../store/modules/board";

class BoardListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    await this.props.dispatch(firebase_board_list());
  }

  render() {
    const { boards } = this.props;

    return <BoardList boards={boards} />;
  }
}

let mapStateToProps = (state) => {
  return {
    boards: state.boards,
    selectedBoard: state.selectedBoard,
  };
};

export default connect(mapStateToProps)(BoardListContainer);
