import styled from "styled-components";

const BREAK_POINT_MOBILE = 768;
const BREAK_POINT_TABLET = 992;
const BREAK_POINT_PC = 1200;

const StyledBoardList = styled.div`
  display: grid;
  background-color: #fff;

  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default StyledBoardList;
