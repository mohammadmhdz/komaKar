import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Logo_01 } from "../imagepath";

const ForgotPassword = (props) => {
  useEffect(() => {
    document.body.className = "account-page";
    return () => {
      document.body.className = "";
    };
  });
  return (
    <>
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-6" style={{ margin: "0 auto" }}>
              {/* Forgot Password Content */}
              <div className="account-content">
                <div className="align-items-center justify-content-center">
                  <div className="login-right">
                    <div className="login-header text-center">
                      <Link to="/">
                        <img src={Logo_01} alt="logo" className="img-fluid" />
                      </Link>
                      <h3>ابتدا نام کاربری را پیدا کنید</h3>
                      <p>لطفا ایمیل خود را وارد کنید</p>
                    </div>
                    <form>
                      <div className="form-group form-focus">
                        <input type="email" className="form-control floating" />
                        <label className="focus-label">ایمیل</label>
                      </div>
                      <button
                        className="btn btn-primary btn-block btn-lg login-btn"
                        type="submit"
                      >
                        بازیابی رمزعبور
                      </button>
                      <div className="row form-row">
                        <div className="col-6 text-start">
                          <Link className="forgot-link" to="/login">
                            رمز عبور خود را به خاطر دارید؟
                          </Link>
                        </div>
                        <div className="col-6 text-end dont-have">
                          حساب کاربری ندارید؟?{" "}
                          <Link to="/register">اینجا کلیک کنید</Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* /Forgot Password Content */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};
export default ForgotPassword;
