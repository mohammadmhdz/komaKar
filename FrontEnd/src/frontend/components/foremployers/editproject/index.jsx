import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Document_Img } from "../../imagepath";
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css";
import map from "../../../assets/images/map.png";

const EditProject = (props) => {
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">ویرایش فرصت شغلی</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb"></nav>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="row align-right">
            <div className="col-md-12">
              <div className="text-end mb-4">
                <Link
                  to="/manage-projects"
                  className="btn btn-primary back-btn br-0"
                >
                  بازگشت <i className="fas fa-long-arrow-alt-left" />
                </Link>
              </div>
              <div className="col-xl-10 col-md-8">
                <div className="content p-0">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="select-project mb-4">
                          <form>
                            <div className="title-box widget-box p-5">
                              {/* Project Title */}
                              <div className="title-content">
                                <div className="title-detail">
                                  <h2
                                    className="mb-5"
                                    style={{ color: "#32795b" }}
                                  >
                                    جزییات کار
                                  </h2>
                                  <h3>عنوان</h3>
                                  <div className="form-group mb-1">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="عنوانی برای فرصت شغلی خود وارد کنید"
                                    />
                                  </div>
                                </div>
                              </div>
                              {/* /Project Title */}
                              {/* /Project description */}
                              <div className="title-content pb-0">
                                <div className="title-detail">
                                  <h3>توضیحات </h3>
                                  <div className="form-group mb-5">
                                    <ReactSummernote
                                      value="Default value"
                                      options={{
                                        lang: "ru-RU",
                                        height: 350,
                                        dialogsInBody: true,
                                        toolbar: [
                                          ["style", ["style"]],
                                          [
                                            "font",
                                            ["bold", "underline", "clear"],
                                          ],
                                          ["fontname", ["fontname"]],
                                          ["para", ["ul", "ol", "paragraph"]],
                                          ["table", ["table"]],
                                          [
                                            "insert",
                                            ["link", "picture", "video"],
                                          ],
                                          ["view", ["fullscreen", "codeview"]],
                                        ],
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              {/* Category Content */}
                              <div
                                className="d-flex justify-between-md"
                                style={{ justifyContent: "space-between" }}
                              >
                                <div
                                  className="title-content mt-1"
                                  style={{ width: "48%" }}
                                >
                                  <div className="title-detail ">
                                    <h3>دسته بندی حوزه شغلی</h3>
                                    <div className="form-group mb-0 ">
                                      <select className="form-control select">
                                        <option value={0}>انتخاب کنید</option>
                                        <option value={1}>
                                          Apps Development
                                        </option>
                                        <option value={2}>
                                          UI Development
                                        </option>
                                        <option value={3}>Jaa</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="title-content mt-1"
                                  style={{ width: "48%" }}
                                >
                                  <div className="title-detail ">
                                    <h3>نوع همکاری</h3>
                                    <div className="form-group mb-0 ">
                                      <select className="form-control select">
                                        <option value={0}>انتخاب کنید</option>
                                        <option value={1}>تمام وقت</option>
                                        <option value={2}>نیمه وقت</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* /Category Content */}
                              <div
                                className="d-flex justify-between-md"
                                style={{ justifyContent: "space-between" }}
                              >
                                <div
                                  className="title-content mt-1"
                                  style={{ width: "48%" }}
                                >
                                  <div className="title-detail ">
                                    <h3>حقوق </h3>
                                    <div className="form-group mb-0 ">
                                      <select className="form-control select">
                                        <option value={0}>انتخاب کنید</option>
                                        <option value={1}>توافقی</option>
                                        <option value={2}>مشخص</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="title-content mt-1"
                                  style={{ width: "22%" }}
                                >
                                  <div className="title-detail ">
                                    <h3>حداقل</h3>
                                    <div className="form-group mb-0 ">
                                      <input
                                        type="text"
                                        className="form-control"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="title-content mt-1"
                                  style={{ width: "22%" }}
                                >
                                  <div className="title-detail ">
                                    <h3>حداکثر</h3>
                                    <div className="form-group mb-0 ">
                                      <input
                                        type="text"
                                        className="form-control"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="radio">
                                <label className="custom_radio">
                                  <input
                                    type="radio"
                                    defaultValue="job"
                                    name="period"
                                    defaultChecked
                                  />
                                  <span className="checkmark" /> امکان دورکاری
                                </label>
                              </div>
                              {/* Price Content */}
                              <div className="title-content">
                                <div className="title-detail">
                                  <h2
                                    className="mb-5"
                                    style={{ color: "#32795b" }}
                                  >
                                    مهارت ها و سابقه شغلی
                                  </h2>
                                  <h3>مهارت ها</h3>
                                  <div
                                    className="form-group price-cont mb-0"
                                    id="price_type"
                                  >
                                    <select
                                      name="price"
                                      className="form-control select"
                                    >
                                      <option value={0}>انتخاب کنید</option>
                                      <option value={1}>
                                        Fixed Budget Price
                                      </option>
                                      <option value={2}>Hourly Pricing</option>
                                      <option value={3}>Biding Price</option>
                                    </select>
                                    <div className=" d-flex tags mt-3">
                                      <div>
                                        <span className=" d-flex align-items-center badge badge-pill badge-design">
                                          {/* <img
                              className="ms-2"
                              style={{
                                width: "18px",
                                height: "18px",
                                // visibility: "hidden",
                              }}
                              src={xmark}
                            /> */}
                                          After Effects
                                        </span>
                                      </div>
                                      <div>
                                        <span className="badge badge-pill badge-design">
                                          Illustrator
                                        </span>
                                      </div>
                                      <div>
                                        <span className="badge badge-pill badge-design">
                                          HTML
                                        </span>
                                      </div>
                                      <div>
                                        <span className="badge badge-pill badge-design">
                                          Whiteboard
                                        </span>
                                      </div>
                                      <a>
                                        <span className="badge badge-pill badge-design">
                                          HTML
                                        </span>
                                      </a>
                                      <div>
                                        <span className="badge badge-pill badge-design">
                                          Whiteboard
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="form-group mt-3"
                                    id="price_id"
                                    style={{ display: "none" }}
                                  >
                                    <div className="input-group">
                                      <div className="input-group-prepend">
                                        <button
                                          type="button"
                                          className="btn btn-white dropdown-toggle"
                                          data-bs-toggle="dropdown"
                                        >
                                          $
                                        </button>
                                        <div className="dropdown-menu">
                                          <a className="dropdown-item" href="#">
                                            Dollars
                                          </a>
                                          <a className="dropdown-item" href="#">
                                            Euro
                                          </a>
                                          <a className="dropdown-item" href="#">
                                            Bitcoin
                                          </a>
                                        </div>
                                      </div>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder={20.0}
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className="form-group mt-3"
                                    id="hour_id"
                                    style={{ display: "none" }}
                                  >
                                    <div className="row">
                                      <div className="col-md-6 mb-2">
                                        <div className="input-group form-inline">
                                          <div className="input-group-prepend">
                                            <button
                                              type="button"
                                              className="btn btn-white dropdown-toggle"
                                              data-bs-toggle="dropdown"
                                            >
                                              $
                                            </button>
                                            <div className="dropdown-menu">
                                              <a
                                                className="dropdown-item"
                                                href="#"
                                              >
                                                Dollars
                                              </a>
                                              <a
                                                className="dropdown-item"
                                                href="#"
                                              >
                                                Euro
                                              </a>
                                              <a
                                                className="dropdown-item"
                                                href="#"
                                              >
                                                Bitcoin
                                              </a>
                                            </div>
                                          </div>
                                          <input
                                            type="text"
                                            className="form-control mr-2"
                                            placeholder={20.0}
                                          />{" "}
                                          <label> / hr</label>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="input-group form-inline">
                                          <label>For </label>{" "}
                                          <input
                                            type="text"
                                            className="form-control ml-2"
                                            placeholder=" ( eg: 2 Weeks)"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* /Price Content */}
                              {/* Skills Content */}
                              <div
                                className="d-flex justify-between-md"
                                style={{ justifyContent: "space-between" }}
                              >
                                <div
                                  className="title-content title-content mt-1"
                                  style={{ width: "48%" }}
                                >
                                  <div className="title-detail">
                                    <h3> سابقه شغلی مورد نیاز</h3>
                                    <div className="form-group mb-0">
                                      <select
                                        name="price"
                                        className="form-control select"
                                      >
                                        <option value={0}>انتخاب کنید</option>
                                        <option value={1}>کمتر از ۲ سال</option>
                                        <option value={2}>۲ تا ۵ سال</option>
                                        <option value={3}>
                                          بیشتر از ۵ سال
                                        </option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="title-content title-content mt-1"
                                  style={{ width: "48%" }}
                                >
                                  <div className="title-detail">
                                    <h3>سطح تجربه</h3>
                                    <div className="form-group mb-0">
                                      <select
                                        name="price"
                                        className="form-control select"
                                      >
                                        <option value={0}>انتخاب کنید</option>
                                        <option value={1}>
                                          Intern (کاراموز){" "}
                                        </option>
                                        <option value={1}>Junior(جوان) </option>
                                        <option value={1}>Senior(ارشد) </option>
                                        <option value={1}>Lead (راهبر)</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* /Skills Content */}

                              {/* /Add Document */}
                              <div className="title-content">
                                <div className="title-detail">
                                  <h3>اضافه کردن فایل</h3>
                                  <div className="custom-file">
                                    <input
                                      type="file"
                                      className="custom-file-input"
                                    />
                                    <label className="custom-file-label" />
                                  </div>
                                  <p className="mb-0">
                                    فرمت فایل PDF و حجم آن کمتر از ۲ مگ باشد
                                  </p>
                                </div>
                              </div>
                              {/* /Add Document */}
                              {/* /adress */}

                              <div className="title-content">
                                <div className="title-detail">
                                  <h2
                                    className="mb-5"
                                    style={{ color: "#32795b" }}
                                  >
                                    آدرس
                                  </h2>
                                  <h3>آدرس</h3>
                                  <div className="form-group mb-1">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="آدرس محل مورد نظر برای کار را وارد کنید"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="d-flex justify-between-md"
                                style={{ justifyContent: "space-between" }}
                              >
                                <div
                                  className="title-content mt-1"
                                  style={{ width: "48%" }}
                                >
                                  <div className="title-detail ">
                                    <h3>استان</h3>
                                    <div className="form-group mb-0 ">
                                      <select className="form-control select">
                                        <option value={0}>انتخاب کنید</option>
                                        <option value={1}>تهران</option>
                                        <option value={2}>البرز</option>
                                        <option value={3}>گیلان</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="title-content mt-1"
                                  style={{ width: "48%" }}
                                >
                                  <div className="title-detail ">
                                    <h3>شهر </h3>
                                    <div className="form-group mb-0 ">
                                      <select className="form-control select">
                                        <option value={0}>انتخاب کنید</option>
                                        <option value={0}>رشت</option>
                                        <option value={1}> انزلی</option>
                                        <option value={2}> سقالکسار</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <img style={{ margin: "auto" }} src={map}></img>
                              <div className="row">
                                <div className="col-md-12 text-end">
                                  <div className="btn-item">
                                    <button
                                      type="submit"
                                      className="btn next-btn"
                                    >
                                      تایید
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Project Title */}
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};
export default EditProject;
