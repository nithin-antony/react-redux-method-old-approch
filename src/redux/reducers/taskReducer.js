import * as types from "../actions/actionTypes";

const taskReducer = (
  state = [{ taskName: "Learn JS", isCompleted: false }],
  action
) => {
  switch (action.type) {
    case types.CREATE_TASK:
      //debugger;
      return [...state, { ...action.task }];
    default:
      return state;
  }
};

export default taskReducer;
