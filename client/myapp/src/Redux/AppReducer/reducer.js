import * as types from "./actionTypes";

const initState = {
  Data: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_DATA_SUCCESS:
      //console.log(payload,typeof payload)
      return {
        ...state.data,
        isLoading: false,
        Data: payload,
        isError: false,
      };
    case types.GET_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
