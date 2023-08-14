import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import {
  Flags_us,
  Flags_de,
  company_img1,
  company_img2,
  company_img3,
  company_img4,
  company_img9,
  home_icon,
} from "../../imagepath";
import { Sidebar } from "../sidebar";

const FreelancerFavourites = (props) => {
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });
  return (
    <>
      {/* Page Content */}
      <div className="content bookmark content-page">
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            <div className="col-xl-9 col-md-8">
              <nav className="user-tabs mb-4"></nav>
              {/* project list */}
              <div className="my-projects-view">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="pro-post mb-4">
                      <div className="project-table align-right">
                        <div className="table-responsive">
                          <h3> فرصت های شغلی های نشان شده</h3>
                          <table className="table table-hover table-center mb-0  mt-4 datatable">
                            <thead className="thead-pink">
                              <tr>
                                <th>شرکت</th>
                                <th>توضیحات</th>
                                <th>شهر</th>
                                <th>تاریخ انتشار</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <Link
                                      to="/project-details"
                                      className="avatar avatar-md tab-imgcircle ms-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src={company_img1}
                                        alt="User Image"
                                      />
                                    </Link>
                                    <Link to="/project-details">
                                      <span className="profile-name">
                                        آرمان افرا
                                      </span>
                                      <span>Back-End developer</span>
                                      <span className="rating mt-2">
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star" />
                                      </span>
                                    </Link>
                                  </h2>
                                </td>
                                <td>برنامه نویس Back-End مسلط به Django</td>
                                <td>
                                  <h2 className="table-avatar">تهران</h2>
                                </td>
                                <td>۲۸ آبان ۱۴۰۱</td>
                                <td>
                                  <a href="" className="fav">
                                    <i className="fas fa-heart filled" />
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* project list */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* The Modal */}
      {/* <div className="modal fade" id="bookmark">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">INVITE FREELANCER</h4>
              <span className="modal-close">
                <a href="#" data-bs-dismiss="modal" aria-label="Close">
                  <i className="far fa-times-circle orange-text" />
                </a>
              </span>
            </div>
            <div className="modal-body">
              <form action="#">
                <div className="modal-info">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="average-bids">
                        <p>
                          Contact{" "}
                          <span className="text-highlight">John Doe </span>{" "}
                          about your Project
                        </p>
                      </div>
                      <div className="form-group">
                        <label>Invite title</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Send a private message</label>
                        <textarea
                          className="form-control"
                          rows={5}
                          defaultValue={
                            "Hi  John Doe, I noticed your profile and would like to offer you my project. We can discuss any details over chat."
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Hire for</label>
                        <div className="radio">
                          <label className="custom_radio">
                            <input
                              type="radio"
                              defaultValue="fix"
                              name="fix"
                              defaultChecked
                            />
                            <span className="checkmark" /> Fixed Price
                          </label>
                          <label className="custom_radio">
                            <input type="radio" defaultValue="fix" name="fix" />
                            <span className="checkmark" /> Hourly Rate
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Hire for</label>
                        <div className="radio">
                          <label className="custom_radio">
                            <input type="radio" defaultValue="fix" name="fix" />
                            <span className="checkmark" /> Fixed Price
                          </label>
                          <label className="custom_radio">
                            <input type="radio" defaultValue="fix" name="fix" />
                            <span className="checkmark" /> Hourly Rate
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Budget</label>
                        <div className="form-row">
                          <div className="col-6">
                            <div className="input-group">
                              <div className="input-group-prepend bg-pink">
                                <span
                                  className="input-group-text"
                                  id="basic-add"
                                >
                                  $
                                </span>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder={20.0}
                              />
                            </div>
                          </div>
                          <div className="col-6">
                            <select className="form-control select">
                              <option value={0}>USD</option>
                              <option value={0}>USD</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Budget</label>
                        <div className="form-row">
                          <div className="col-6">
                            <div className="input-group form-inline">
                              <div className="input-group-prepend bg-pink">
                                <span
                                  className="input-group-text"
                                  id="basic-addon"
                                >
                                  $
                                </span>
                              </div>
                              <input
                                type="text"
                                className="form-control me-1"
                                placeholder={20.0}
                              />{" "}
                              <label>/ hr</label>
                            </div>
                          </div>
                          <div className="col-6">
                            <select className="form-control select">
                              <option value={0}>USD</option>
                              <option value={0}>USD</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Project</label>
                        <select className="form-control select">
                          <option value={0}>
                            3D Renders and Amazon Product Store images/Video
                          </option>
                          <option value={0}>
                            3D Renders and Amazon Product Store Video
                          </option>
                          <option value={0}>
                            3D Renders and Amazon Product Store images
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="submit-section text-end">
                  <button type="submit" className="btn btn-primary submit-btn">
                    Send Invite
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}
      {/* /The Modal */}
    </>
  );
};
export default FreelancerFavourites;
