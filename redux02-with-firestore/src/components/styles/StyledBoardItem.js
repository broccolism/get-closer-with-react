import styled from "styled-components";

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export const StyledBoardItemBox = styled.div.attrs((props) => ({
  style: {
    background: rgbToHex(props.rgb[0], props.rgb[1], props.rgb[2]),
  },
}))`
  width: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
  margin: 1rem;
  border: none;
  border-radius: 20px;
  justify-content: center;
  align-text: center;
  align-items: center;
  overflow: hidden;
`;

export const StyledContent = styled.div`
  display: block;
  display: -webkit-box;

  line-height: 1.4;
  -webkit-line-clamp: 3,
  webkit-box-orient: vertical,
  overflow: hidden,
  text-overflow: ellipsis;
`;

export const StyledName = styled.div`
  font-size: 32px;
  font-weight: 600;
  margin: 30px 0px 30px 0px;
  color: #fff;
  text-align: center;
  word-wrap: break-word;
`;

export const StyledDate = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: #fff;
  text-align: center;
`;
