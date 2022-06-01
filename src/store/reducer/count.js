import { SET_COUNT } from "../actionType";

const initState = {
  count: 0,
};

export default (state = initState, data) => {
  const { type, payload } = data;
  switch (type) {
  case SET_COUNT:
    return {
      ...state,
      ...payload,
    };
  default:
    return {
      ...state,
    };
  }
};
