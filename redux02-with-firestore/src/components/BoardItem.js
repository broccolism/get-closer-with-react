import {
  StyledBoardItemBox,
  StyledName,
  StyledDate,
} from "./styles/StyledBoardItem";
import Dotdotdot from "react-dotdotdot";
import "./styles/BoardBox.css";

const getDate = (timestamp) => {
  const date =
    timestamp !== undefined
      ? new Date(timestamp.seconds * 1000).toLocaleDateString("ko-KR")
      : "???";

  return date;
};

const randomRgb = () => {
  const r = 222;
  let g, b;

  const base = 73;
  const gMax = 128;
  const bMax = 115;

  if (Math.random() <= 0.5) {
    g = Math.floor(Math.random() * gMax) + base;
    b = base;
  } else {
    g = base;
    b = Math.floor(Math.random() * bMax) + base;
  }

  return [r, g, b];
};

const BoardItem = ({ row, onClick }) => {
  const rgb = randomRgb();
  return (
    <StyledBoardItemBox onClick={onClick} rgb={rgb}>
      <StyledName>{row.writer}</StyledName>
      <StyledDate>{getDate(row.date)}</StyledDate>
      <Dotdotdot clamp={1}>
        <div className="content">{row.content}</div>
      </Dotdotdot>
    </StyledBoardItemBox>
  );
};

export default BoardItem;
