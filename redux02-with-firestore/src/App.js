import React, { Component } from "react";
import BoardListContainer from "./containers/BoardListContainer";

class App extends Component {
  render() {
    return <BoardListWrapper />;
  }
}

class BoardListWrapper extends Component {
  render() {
    return <BoardListContainer />;
  }
}
export default App;
