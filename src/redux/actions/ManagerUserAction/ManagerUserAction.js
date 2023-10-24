import { getListUser } from "../../services/ManagerUser/ManangerUser";
import { GET_LIST_USER } from "../types/types";

export const getListUserActions = () => {
  return async (dispatch) => {
    const res = await getListUser();
    if (res && res.status === 200) {
      dispatch({
        type: GET_LIST_USER,
        dataUser: res.data,
      });
    } else {
      console.log("LOi", res);
    }
  };
};
