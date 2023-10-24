import { getListTaskWithUserID } from "../../services/ManagerTask/ManangerTask";
import { GET_LIST_TASK } from "../types/types";

export const getListTaskAction = (id) => {
  return async (dispatch) => {
    const res = await getListTaskWithUserID(id);
    if (res && res.status === 200) {
      dispatch({
        type: GET_LIST_TASK,
        dataTask: res.data,
      });
    }
  };
};
