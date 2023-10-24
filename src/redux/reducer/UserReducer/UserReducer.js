import { GET_LIST_USER } from "../../actions/types/types";

const initState = {
  lstUser: [],
};

export const UserReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_LIST_USER:
      return { ...state, lstUser: action.dataUser };

    default:
      return { ...state };
  }
};
