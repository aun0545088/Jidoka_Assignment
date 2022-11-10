import * as types from "./actionTypes";
import axios from "axios";

const getData = () => (dispatch) => {
  dispatch({ type: types.GET_DATA_REQUEST });
  return axios
    .get(`https://secret-spire-46340.herokuapp.com/data/getAll`, {
      headers: {
        authentication: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((r) => {
      dispatch({ type: types.GET_DATA_SUCCESS, payload: r.data });
    })
    .catch((e) => dispatch({ type: types.GET_DATA_FAILURE }));
};
export { getData };
