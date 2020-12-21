import { createAction, handleActions } from "redux-actions";
import firestore from "./Firestore";

const BOARD_SAVE = "SAVE";
const BOARD_REMOVE = "REMOVE";
const BOARD_READ = "ONE";
const BOARD_LIST = "LIST";

export const board_save = createAction(BOARD_SAVE);
export const board_remove = createAction(BOARD_REMOVE, (brdno) => brdno);
export const board_read = createAction(BOARD_READ);
export const board_list = createAction(BOARD_LIST);

const initialState = {
  boards: [],
  selectedBoard: {},
};

export const firebase_board_list = () => {
  return async (dispatch) => {
    const snapshot = await firestore.collection("Post_backup").get();
    let rows = [];
    let count = 0;
    snapshot.forEach((doc) => {
      const dbData = doc.data();
      const frontData = {
        brdno: count++,
        brdwriter: dbData.writer_id,
        brdtitle: dbData.content,
        brddate: dbData.created_at ? dbData.created_at.toDate().toString() : "",
      };
      rows.push(frontData);
    });
    dispatch(board_list(rows));
  };
};

export default handleActions(
  {
    [BOARD_LIST]: (state, { payload: data }) => {
      return { boards: data, selectedBoard: {} };
    },
    [BOARD_SAVE]: (state, { payload: data }) => {
      const boards = state.boards;
      const maxNo = state.maxNo;
      if (!data.brdno) {
        return {
          maxNo: maxNo + 1,
          boards: boards.concat({ ...data, brdno: maxNo, brddate: new Date() }),
          selectedBoard: {},
        };
      }
      return {
        ...state,
        boards: boards.map((row) =>
          data.brdno === row.brdno ? { ...data } : row
        ),
        selectedBoard: {},
      };
    },
    [BOARD_REMOVE]: (state, { payload: brdno }) => {
      const boards = state.boards;
      return {
        ...state,
        boards: boards.filter((row) => row.brdno !== brdno),
        selectedBoard: {},
      };
    },
    [BOARD_READ]: (state, { payload: brdno }) => {
      const boards = state.boards;
      console.log(brdno);
      return {
        ...state,
        selectedBoard: boards.find((row) => row.brdno === brdno),
      };
    },
  },
  initialState
);
