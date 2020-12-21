import { Component } from "react";
import BoardItemContainer from "../containers/BoardItemContainer";
import StyledBoardList from "./styles/StyledBoardList";

class BoardList extends Component {
  render() {
    return (
      <StyledBoardList>
        {this.props.boards.map((row, idx) => {
          return <BoardItemContainer key={idx} idx={idx + 1} row={row} />;
        })}
      </StyledBoardList>
    );
  }
}

export default BoardList;
