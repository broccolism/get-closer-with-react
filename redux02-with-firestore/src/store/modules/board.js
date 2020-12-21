import { createAction, handleActions } from "redux-actions";
import firestore from "../../Firestore";

const BOARD_SAVE = "SAVE";
const BOARD_REMOVE = "REMOVE";
const BOARD_READ = "ONE";
const BOARD_LIST = "LIST";

export const board_save = createAction(BOARD_SAVE);
export const board_remove = createAction(BOARD_REMOVE, (postNo) => postNo);
export const board_read = createAction(BOARD_READ);
export const board_list = createAction(BOARD_LIST);

const initialState = {
  boards: [],
  selectedBoard: {},
};

export const firebase_board_list = () => {
  return async (dispatch) => {
    let rows = [];
    let count = 0;

    const getPosts = firestore
      .collection("Post_backup")
      .orderBy("created_at", "desc")
      .get()
      .then((qs) => {
        qs.forEach(async (doc) => {
          const dbData = doc.data();
          let userNickName = dbData.writer_id ?? "kwxHCLaEi6T9BTCGrbCy6NH2fnx1";

          const frontData = {
            postNo: count++,
            writer: userNickName,
            content: dbData.content,
            date: dbData.created_at,
          };
          rows.push(frontData);
        });
      });

    getPosts.then(async () => {
      await Promise.all(
        rows.map(async (item, index) => {
          if (rows[index].writer !== "haha") {
            try {
              rows[index].writer = await firestore
                .collection("DetailUser_backup")
                .where("id", "==", rows[index].writer)
                .limit(1)
                .get()
                .then((qs) => qs.docs[0].get("nick_name"));
            } catch {
              console.log("ERR");
            }
          }
        })
      );
      dispatch(board_list(rows));
    });
  };
};

export const firebaseBoardListByDate = (date, prevRows) => {
  return async (dispatch) => {
    let nextDate = new Date(date.getTime() + 86400000);

    let rows = [];
    let count = 0;

    const getPosts = firestore
      .collection("Post_backup")
      .where("created_at", ">=", date)
      .where("created_at", "<", nextDate)
      .orderBy("created_at", "desc")
      .get()
      .then((qs) => {
        qs.forEach(async (doc) => {
          const dbData = doc.data();
          let userNickName = dbData.writer_id ?? "kwxHCLaEi6T9BTCGrbCy6NH2fnx1";

          const frontData = {
            postNo: count++,
            writer: userNickName,
            content: dbData.content,
            date: dbData.created_at,
          };
          rows.push(frontData);
        });
      });

    getPosts.then(async () => {
      await Promise.all(
        rows.map(async (item, index) => {
          if (rows[index].writer !== "haha") {
            try {
              rows[index].writer = await firestore
                .collection("DetailUser_backup")
                .where("id", "==", rows[index].writer)
                .limit(1)
                .get()
                .then((qs) => qs.docs[0].get("nick_name"));
            } catch {
              console.log("ERR");
            }
          }
        })
      );
      dispatch(board_list(rows));
    });
  };
};

export default handleActions(
  {
    [BOARD_LIST]: (state, { payload: data }) => {
      console.log(state.boards.concat(data).length);
      return { boards: state.boards.concat(data), selectedBoard: {} };
    },
    [BOARD_SAVE]: (state, { payload: data }) => {
      const boards = state.boards;
      const maxNo = state.maxNo;
      if (!data.postNo) {
        return {
          maxNo: maxNo + 1,
          boards: boards.concat({
            ...data,
            postNo: maxNo,
            date: new Date(),
          }),
          selectedBoard: {},
        };
      }
      return {
        ...state,
        boards: boards.map((row) =>
          data.postNo === row.postNo ? { ...data } : row
        ),
        selectedBoard: {},
      };
    },
    [BOARD_REMOVE]: (state, { payload: postNo }) => {
      const boards = state.boards;
      return {
        ...state,
        boards: boards.filter((row) => row.postNo !== postNo),
        selectedBoard: {},
      };
    },
    [BOARD_READ]: (state, { payload: postNo }) => {
      const boards = state.boards;
      console.log(postNo);
      return {
        ...state,
        selectedBoard: boards.find((row) => row.postNo === postNo),
      };
    },
  },
  initialState
);
