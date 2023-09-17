import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { logo_three } from "../imagepath";

const HeaderThree = (props) => {
  const [isSideMenu, setSideMenu] = useState("");
  const [isSideMenu1, setSideMenu1] = useState("");
  const [isSideMenu2, setSideMenu2] = useState("");
  const [isSideMenu3, setSideMenu3] = useState("");

  const toggleSidebar = (value) => {
    setSideMenu(value);
  };
  const toggleSidebar1 = (value) => {
    setSideMenu1(value);
  };
  const toggleSidebar2 = (value) => {
    setSideMenu2(value);
  };
  const toggleSidebar3 = (value) => {
    setSideMenu3(value);
  };
  const onHandleMobileMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };

  const onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };

  let pathname = window.location.pathname;

  //nav transparent

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const Reload3 = () => {
    window.location.reload(false);
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  const changeBackground = () => {
    if (window.scrollY >= 95) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <>
      {/* Header */}
      <header className={`header header-three ${navbar ? "sticky" : ""} `}>
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="container">
            <div className="navbar-header">
              <a id="mobile_btn" href="#" onClick={() => onHandleMobileMenu()}>
                <span className="bar-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </a>
              <Link to="/" className="navbar-brand logo">
                <img src={logo_three} className="img-fluid" alt="Logo" />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/" className="menu-logo">
                  <img src={logo_three} className="img-fluid" alt="Logo" />
                </Link>
                <a
                  id="menu_close"
                  className="menu-close"
                  href="#"
                  onClick={() => onhandleCloseMenu()}
                >
                  <i className="fas fa-times" />
                </a>
              </div>
              <ul className="main-nav">
                <li
                  className={`has-submenu ${
                    pathname.includes("index") ||
                    pathname.includes("index-two") ||
                    pathname.includes("index-three") ||
                    pathname.includes("index-four") ||
                    pathname.includes("index-five")
                      ? "active"
                      : ""
                  }`}
                >
                  <Link
                    to="#0"
                    className={isSideMenu === "home" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(isSideMenu === "home" ? "" : "home")
                    }
                  >
                    Home <i className="fas fa-chevron-down" />
                  </Link>
                  {isSideMenu === "home" ? (
                    <ul className="submenu">
                      <li className="active">
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/index-two">Home 2</Link>
                      </li>
                      <li>
                        <Link to="/index-three">Home 3</Link>
                      </li>
                      <li>
                        <Link to="/index-four">Home 4</Link>
                      </li>
                      <li>
                        <Link to="/index-five">Home 5</Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>

                <li
                  className={`has-submenu ${
                    pathname === "developer" ||
                    pathname === "developer-details" ||
                    pathname === "dashboard" ||
                    pathname === "manage-projects" ||
                    pathname === "favourites" ||
                    pathname === "invited-freelancer" ||
                    pathname === "membership-plans" ||
                    pathname === "milestones" ||
                    pathname === "chats" ||
                    pathname === "review" ||
                    pathname === "deposit-funds" ||
                    pathname === "withdraw-money" ||
                    pathname === "transaction-history" ||
                    pathname === "verify-identity" ||
                    pathname === "profile-settings" ||
                    pathname === "tasks" ||
                    pathname === "files" ||
                    pathname === "view-project-detail" ||
                    pathname === "project-payment"
                      ? "active"
                      : ""
                  }`}
                >
                  <Link
                    to="#"
                    className={isSideMenu === "foremployers" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(
                        isSideMenu === "foremployers" ? "" : "foremployers"
                      )
                    }
                  >
                    {" "}
                    For Employers
                    <i className="fas fa-chevron-down" />
                  </Link>
                  {isSideMenu === "foremployers" ? (
                    <ul className="submenu">
                      <li
                        className={`has-submenu ${
                          pathname === "developer" ||
                          pathname === "developer-details"
                            ? "active"
                            : ""
                        }`}
                      >
                        <Link
                          to="#"
                          onClick={() =>
                            toggleSidebar1(
                              isSideMenu1 === "freelancer" ? "" : "freelancer"
                            )
                          }
                        >
                          Freelancer
                        </Link>
                        {isSideMenu1 === "freelancer" ? (
                          <ul className="submenu">
                            <li
                              className={
                                pathname === "developer" ? "active" : ""
                              }
                            >
                              <Link to="/developer">Freelancer</Link>
                            </li>
                            <li
                              className={
                                pathname === "developer-details" ? "active" : ""
                              }
                            >
                              <Link to="/developer-details">
                                Freelancer Details
                              </Link>
                            </li>
                          </ul>
                        ) : (
                          ""
                        )}
                      </li>
                      <li className={pathname === "dashboard" ? "active" : ""}>
                        <Link to="/dashboard">Dashboard</Link>
                      </li>
                      <li
                        className={
                          pathname === "company-profile" ? "active" : ""
                        }
                      >
                        <Link to="/company-profile">My Profile</Link>
                      </li>
                      {/* <li className={pathname === "developer-details" ? "active" : ""}>
                      <Link to="/developer-details">Freelancer Details</Link>
                    </li> */}
                      <li
                        className={
                          pathname === "company-details" ? "active" : ""
                        }
                      >
                        <Link to="/company-details">Company Details</Link>
                      </li>
                      <li
                        className={
                          pathname === "manage-projects" ? "active" : ""
                        }
                      >
                        <Link to="/manage-projects">Projects</Link>
                      </li>
                      <li
                        className={
                          pathname === "favourites" ||
                          pathname === "invited-freelancer"
                            ? "active"
                            : ""
                        }
                      >
                        <Link to="/favourites">Favourites</Link>
                      </li>
                      <li
                        className={
                          pathname === "membership-plans" ? "active" : ""
                        }
                      >
                        <Link to="/membership-plans">Membership</Link>
                      </li>
                      <li
                        className={
                          pathname === "view-project-detail" ||
                          pathname === "milestones" ||
                          pathname === "tasks" ||
                          pathname === "files" ||
                          pathname === "project-payment"
                            ? "active"
                            : ""
                        }
                      >
                        <Link to="/milestones">Milestones</Link>
                      </li>
                      <li className={pathname === "chats" ? "active" : ""}>
                        <Link to="/chats">Chats</Link>
                      </li>
                      <li className={pathname === "review" ? "active" : ""}>
                        <Link to="/review">Review</Link>
                      </li>
                      <li
                        className={
                          pathname === "deposit-funds" ||
                          pathname === "withdraw-money" ||
                          pathname === "transaction-history"
                            ? "active"
                            : ""
                        }
                      >
                        <Link to="/deposit-funds">Payments</Link>
                      </li>
                      <li
                        className={
                          pathname === "verify-identity" ? "active" : ""
                        }
                      >
                        <Link to="/verify-identity">Verify Identity</Link>
                      </li>
                      <li
                        className={
                          pathname === "profile-settings" ? "active" : ""
                        }
                      >
                        <Link to="/profile-settings">Settings</Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li
                  className={`has-submenu ${
                    pathname === "project" ||
                    pathname === "project-details" ||
                    pathname === "freelancer-dashboard" ||
                    pathname === "company-profile" ||
                    pathname === "freelancer-project-proposals" ||
                    pathname === "freelancer-favourites" ||
                    pathname === "freelancer-invitations" ||
                    pathname === "freelancer-membership" ||
                    pathname === "freelancer-change-password" ||
                    pathname === "freelancer-chats" ||
                    pathname === "freelancer-review" ||
                    pathname === "freelancer-completed-projects" ||
                    pathname === "freelancer-cancelled-projects" ||
                    pathname === "freelancer-withdraw-money" ||
                    pathname === "freelancer-verify-identity" ||
                    pathname === "freelancer-ongoing-projects" ||
                    pathname === "freelancer-profile-settings" ||
                    pathname === "freelancer-transaction-history" ||
                    pathname === "freelancer-project-proposals" ||
                    pathname === "freelancer-view-project-detail" ||
                    pathname === "freelancer-milestones" ||
                    pathname === "freelancer-task" ||
                    pathname === "freelancer-files" ||
                    pathname === "freelancer-payment"
                      ? "active"
                      : ""
                  }`}
                >
                  <Link
                    to="#"
                    className={isSideMenu === "forfreelancer" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(
                        isSideMenu === "forfreelancer" ? "" : "forfreelancer"
                      )
                    }
                  >
                    {" "}
                    For Freelancer
                    <i className="fas fa-chevron-down" />
                  </Link>
                  {isSideMenu === "forfreelancer" ? (
                    <ul className="submenu">
                      <li
                        className={`has-submenu ${
                          pathname === "project" ||
                          pathname === "project-details"
                            ? "active"
                            : ""
                        }`}
                      >
                        <Link
                          to="#"
                          className={
                            isSideMenu2 === "projects" ? "subdrop" : ""
                          }
                          onClick={() =>
                            toggleSidebar2(
                              isSideMenu2 === "projects" ? "" : "projects"
                            )
                          }
                        >
                          Projects
                        </Link>
                        {isSideMenu2 === "projects" ? (
                          <ul className="submenu">
                            <li
                              className={pathname === "project" ? "active" : ""}
                            >
                              <Link to="/project">Projects</Link>
                            </li>
                            <li
                              className={
                                pathname === "project-details" ? "active" : ""
                              }
                            >
                              <Link to="/project-details">Project Details</Link>
                            </li>
                          </ul>
                        ) : (
                          ""
                        )}
                      </li>
                      <li
                        className={
                          pathname === "freelancer-dashboard" ? "active" : ""
                        }
                      >
                        <Link to="/freelancer-dashboard">Dashboard</Link>
                      </li>
                      <li>
                        <Link to="/developer-profile">My Profile</Link>
                      </li>
                      <li
                        className={
                          pathname === "freelancer-details" ? "active" : ""
                        }
                      >
                        <Link to="/freelancer-details">Freelancer Details</Link>
                      </li>
                      <li
                        className={
                          pathname === "freelancer-project-proposals" ||
                          pathname === "freelancer-ongoing-projects" ||
                          pathname === "freelancer-completed-projects" ||
                          pathname === "freelancer-cancelled-projects" ||
                          pathname === "freelancer-project-proposals" ||
                          pathname === "freelancer-view-project-detail" ||
                          pathname === "freelancer-milestones" ||
                          pathname === "freelancer-task" ||
                          pathname === "freelancer-files" ||
                          pathname === "freelancer-payment"
                            ? "active"
                            : ""
                        }
                      >
                        <Link to="/freelancer-project-proposals">Projects</Link>
                      </li>
                      <li
                        className={
                          pathname === "freelancer-favourites" ||
                          pathname === "freelancer-invitations"
                            ? "active"
                            : ""
                        }
                      >
                        <Link to="/freelancer-favourites">Favourites</Link>
                      </li>
                      <li
                        className={
                          pathname === "freelancer-membership" ? "active" : ""
                        }
                      >
                        <Link to="/freelancer-membership">Membership</Link>
                      </li>
                      <li
                        className={
                          pathname === "freelancer-change-password"
                            ? "active"
                            : ""
                        }
                      >
                        <Link to="/freelancer-change-password">
                          Change Password
                        </Link>
                      </li>
                      <li
                        className={
                          pathname === "freelancer-chats" ? "active" : ""
                        }
                      >
                        <Link to="/freelancer-chats">Chats</Link>
                      </li>
                      <li
                        className={
                          pathname === "freelancer-review" ? "active" : ""
                        }
                      >
                        <Link to="/freelancer-review">Review</Link>
                      </li>
                      <li
                        className={
                          pathname === "freelancer-withdraw-money" ||
                          pathname === "freelancer-transaction-history"
                            ? "active"
                            : ""
                        }
                      >
                        <Link to="/freelancer-withdraw-money">Payments</Link>
                      </li>
                      <li
                        className={
                          pathname === "freelancer-verify-identity"
                            ? "active"
                            : ""
                        }
                      >
                        <Link to="/freelancer-verify-identity">
                          Verify Identity
                        </Link>
                      </li>
                      <li
                        className={
                          pathname === "freelancer-profile-settings"
                            ? "active"
                            : ""
                        }
                      >
                        <Link to="/developer-profile-settings">Settings</Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li
                  className={`has-submenu ${
                    pathname === "about" ||
                    pathname === "blank-page" ||
                    pathname === "404-page" ||
                    pathname === "user-account-details" ||
                    pathname === "login" ||
                    pathname === "register" ||
                    pathname === "forgot-password" ||
                    pathname === "change-password" ||
                    pathname === "freelancer-invoices" ||
                    pathname === "view-invoice"
                      ? "active"
                      : ""
                  }`}
                >
                  <Link
                    to="#"
                    className={isSideMenu === "pages" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(isSideMenu === "pages" ? "" : "pages")
                    }
                  >
                    Pages <i className="fas fa-chevron-down" />
                  </Link>
                  {isSideMenu === "pages" ? (
                    <ul className="submenu">
                      <li className={pathname === "about" ? "active" : ""}>
                        <Link to="/about">About us</Link>
                      </li>
                      <li className={pathname === "blank-page" ? "active" : ""}>
                        <Link to="/blank-page">Starter Page</Link>
                      </li>
                      <li className={pathname === "404-page" ? "active" : ""}>
                        <Link to="/404-page">404 Page</Link>
                      </li>
                      <li
                        className={
                          pathname === "user-account-details" ? "active" : ""
                        }
                      >
                        <Link to="/user-account-details">User Details</Link>
                      </li>
                      <li
                        className={`has-submenu ${
                          pathname === "freelancer-invoices" ||
                          pathname === "view-invoice"
                            ? "active"
                            : ""
                        }`}
                      >
                        <Link
                          to="#"
                          className={
                            isSideMenu3 === "invoices" ? "subdrop" : ""
                          }
                          onClick={() =>
                            toggleSidebar3(
                              isSideMenu3 === "invoices" ? "" : "invoices"
                            )
                          }
                        >
                          Invoices
                        </Link>
                        {isSideMenu3 === "invoices" ? (
                          <ul className="submenu">
                            <li
                              className={
                                pathname === "freelancer-invoices"
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link to="/freelancer-invoices">Invoices</Link>
                            </li>
                            <li
                              className={
                                pathname === "view-invoice" ? "active" : ""
                              }
                            >
                              <Link to="/view-invoice">Invoice View</Link>
                            </li>
                          </ul>
                        ) : (
                          ""
                        )}
                      </li>
                      <li className={pathname === "login" ? "active" : ""}>
                        <Link to="/login">Login</Link>
                      </li>
                      <li className={pathname === "register" ? "active" : ""}>
                        <Link to="/register">Register</Link>
                      </li>
                      <li
                        className={pathname === "onboardScreen" ? "active" : ""}
                        onClick={Reload3}
                      >
                        <Link to="/onboardScreen">OnboardScreen</Link>
                      </li>
                      <li
                        className={
                          pathname === "forgot-password" ? "active" : ""
                        }
                      >
                        <Link to="/forgot-password">Forgot Password</Link>
                      </li>
                      <li
                        className={
                          pathname === "change-password" ? "active" : ""
                        }
                      >
                        <Link to="/change-password">Change Password</Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li
                  className={`has-submenu ${
                    pathname === "blog-list" ||
                    pathname === "blog-grid" ||
                    pathname === "blog-details"
                      ? "active"
                      : ""
                  }`}
                >
                  <Link
                    to="#"
                    className={isSideMenu === "blog" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(isSideMenu === "blog" ? "" : "blog")
                    }
                  >
                    Blog <i className="fas fa-chevron-down" />
                  </Link>
                  {isSideMenu === "blog" ? (
                    <ul className="submenu">
                      <li className={pathname === "blog-list" ? "active" : ""}>
                        <Link to="/blog-list">Blog List</Link>
                      </li>
                      <li className={pathname === "blog-grid" ? "active" : ""}>
                        <Link to="/blog-grid">Blog Grid</Link>
                      </li>
                      <li
                        className={pathname === "blog-details" ? "active" : ""}
                      >
                        <Link to="/blog-details">Blog Details</Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
              </ul>
            </div>

            <ul className="nav header-navbar-rht">
              <li className={pathname === "register" ? "active" : ""}>
                <Link to="/register" className="reg-btn">
                  Register
                </Link>
              </li>
              <li className={pathname === "login" ? "active" : ""}>
                <Link to="/login" className="log-btn btn">
                  Login
                </Link>
              </li>
              <li className={pathname === "post-project" ? "active" : ""}>
                <Link to="/post-project" className="login-btn btn">
                  Post a Project{" "}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {/* /Header */}
    </>
  );
};

export default HeaderThree;
