import { getLocalData, saveLocalData } from "../../Utils/LocalStorage";
import * as types from "./actionTypes";

const initState = {
  isAuth: getLocalData("token") ? true : false,
  token: getLocalData("token") || "",
  isLoading: false,
  isError: false,
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SIGNUP_ADMIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.SIGNUP_ADMIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case types.SIGNUP_ADMIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

      case types.LOGIN_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case types.LOGIN_SUCCESS:
        saveLocalData("token", payload);
        return {
          ...state,
          isLoading: false,
          isAuth: true,
          token: payload,
        };
      case types.LOGIN_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
          isAuth: false,
          token: "",
        };

    default:
      return state;
  }
};

export { reducer };