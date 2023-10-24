import { DONE_TASK, GET_LIST_TASK } from "../../actions/types/types";

const initState = {
  lstTask: [],
};

export const TaskReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_LIST_TASK:
      return { ...state, lstTask: action.dataTask };

    case DONE_TASK: {
      const arrNew = [...state.lstTask];
      const index = arrNew.findIndex((item) => item.id === action.taskId);
      if (index !== -1) {
        arrNew[index] = { ...arrNew[index], completed: true };
      }
      return { ...state, lstTask: arrNew };
    }

    default:
      return { ...state };
  }
};
