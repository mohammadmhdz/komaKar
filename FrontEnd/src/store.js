import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  jobListReducer,
  jobsDetailsReducer,
  jobsPostRedducer,
  jobsPostRequirmentsReducer,
  jobDeleteReducer,
  jobUpdateDetailsReducer,
} from "./reducers/jobsReducer";
import {
  employeeListAllReducer,
  employeeDetailsReducer,
  employeePortfolioDetailsReducer,
  employeeFavoriteListReducer,
  employeeToggleFavoriteListReducer,
  employeeUpdateDetailsReducer,
} from "./reducers/employeeReducer";
import {
  freelancerRequestReducer,
  postAplliesReducer,
  companyChangeStatusReducer,
} from "./reducers/requestsReducer";
import { userLoginReducer } from "./reducers/userReducer";
import {
  companyListReducer,
  companyDetailsReducer,
  companyReviewReducer,
  companyJobsListReducer,
  companyFavoriteEmployeesReducer,
  //post
  companyVerifyReducer,
  postReviewReducer,
  //put
  companyUpdateDetailsReducer,
  //del
  companyDeleteReducer,
} from "./reducers/companyReducer";
import {
  categoryListReducer,
  categoryUpdateDetailsReducer,
  categoryPost,
  categoryDeleteReducer,
  // skills
  skillListReducer,
  skillUpdateDetailsReducer,
  skillPostReducer,
  skillDeleteReducer,
} from "./reducers/adminReducer";
// use selector tu use one of the below reducer

const reducer = combineReducers({
  jobList: jobListReducer,
  jobsDetails: jobsDetailsReducer,
  jobsPost: jobsPostRedducer,
  jobsPostRequirments: jobsPostRequirmentsReducer,
  jobUpdateDetail: jobDeleteReducer,
  jobdelete: jobUpdateDetailsReducer,
  //
  employeeDetails: employeeDetailsReducer,
  employeePortfolio: employeePortfolioDetailsReducer,
  employeeFavoriteList: employeeFavoriteListReducer,
  employeeToggleFavorite: employeeToggleFavoriteListReducer,
  employeeListAll: employeeListAllReducer,
  employeeUpdateDetails: employeeUpdateDetailsReducer,
  //
  freelancerRequest: freelancerRequestReducer,
  postApplyList: postAplliesReducer,
  companyChangeStatus: companyChangeStatusReducer,
  //
  userLogin: userLoginReducer,
  //
  companyListAll: companyListReducer,
  companyDetails: companyDetailsReducer,
  companyJobsList: companyJobsListReducer,
  companyReview: companyReviewReducer,
  companyFavoriteEmployee: companyFavoriteEmployeesReducer,
  companyVerify: companyVerifyReducer,
  companyReviewPost: postReviewReducer,
  companyUpdateDetail: companyUpdateDetailsReducer,
  companydelete: companyDeleteReducer,
  //
  categoryListAll: categoryListReducer,
  categoryUpdateDetail: categoryUpdateDetailsReducer,
  categorypost: categoryPost,
  categorydelete: categoryDeleteReducer,
  //
  skillListAll: skillListReducer,
  skillUpdateDetail: skillUpdateDetailsReducer,
  skillpost: skillPostReducer,
  skilldelete: skillDeleteReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = { userLogin: { userInfo: userInfoFromStorage } };
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
