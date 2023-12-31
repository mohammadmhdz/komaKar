import {
  EMPLOYEE_DETAILS_REQUEST,
  EMPLOYEE_DETAILS_SUCCESS,
  EMPLOYEE_DETAILS_FAIL,
} from "../constant/employeeConstant";
import axios from "axios";

export const employeeDetails = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: EMPLOYEE_DETAILS_REQUEST });
    // console.log(keyword);
    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/employees/${keyword}/`
    );
    dispatch({
      type: EMPLOYEE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EMPLOYEE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
