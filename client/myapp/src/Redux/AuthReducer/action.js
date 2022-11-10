import * as types from "./actionTypes";
import axios from "axios";

const login = (params) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios
    .post("https://secret-spire-46340.herokuapp.com/user/login", params)
    .then((r) => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: r.data.token });
      return types.LOGIN_SUCCESS;
    })
    .catch((e) => {
      dispatch({ type: types.LOGIN_FAILURE, payload: e });
      return types.LOGIN_FAILURE;
    });
};

const register = (payload) => (dispatch) => {
  //console.log(payload)
  dispatch({ type: types.SIGNUP_ADMIN_REQUEST });
  axios
    .post("https://secret-spire-46340.herokuapp.com/user/signup", payload)
    .then((r) => {
      dispatch({ type: types.SIGNUP_ADMIN_SUCCESS, payload: r.data });
    })
    .catch((e) => {
      dispatch({ type: types.SIGNUP_ADMIN_FAILURE });
    });
};

export { login, register };
