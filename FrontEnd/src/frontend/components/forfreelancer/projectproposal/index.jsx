import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Developer_01, home_icon } from "../../imagepath";
import { Sidebar } from "../sidebar";
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css"; // import styles

// redux
import { useDispatch, useSelector } from "react-redux";
import { freelancerRequest } from "../../../../actions/requestsActions";

const Freelancer = (props) => {
  // redux
  const dispatch = useDispatch();
  const { freelancerRequestsAll } = useSelector(
    (state) => state.freelancerRequest
  );

  useEffect(() => {
    // redux
    dispatch(freelancerRequest());

    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  }, [dispatch]);
  // console.log(freelancerRequestsAll);

  // filter request by the employee
  const filterEmployee = freelancerRequestsAll.map((items) => {
    console.log(items.employee);
  });

  return (
    <>
      {/* Page Content */}
      <div className="content">
        <div className="container-fluid">
          <div className="row align-right mt-5">
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            <div className="col-xl-9 col-md-8">
              <div className="page-title">
                <h3>مدیریت درخواست ها</h3>
              </div>
              <nav className="user-tabs mb-4">
                <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      to="/freelancer-project-proposals"
                    >
                      همه درخواست های من
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/freelancer-ongoing-projects"
                    >
                      در انتظار بررسی
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/freelancer-completed-projects"
                    >
                      بررسی شده
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link "
                      to="/freelancer-cancelled-projects"
                    >
                      رد شده
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* Proposals list */}
              <div className="proposals-section">
                {/* Proposals */}
                <div className="my-projects-list">
                  <div className="row">
                    <div className="col-lg-12 flex-wrap">
                      <div className="projects-card flex-fill">
                        <div className="card-body">
                          <div className="projects-details align-items-center justify-content-between">
                            <div className="projects-details align-items-center">
                              <div className="proposer-img">
                                <img
                                  src={Developer_01}
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="proposer-detail">
                                <h4 className="">طراح UI/UX</h4>
                                <ul className="proposal-details">
                                  <li className="Bold">
                                    {" "}
                                    <a href="">ارسال شده برای داده ورزی سداد</a>
                                  </li>
                                  <li>۲ روزپیش</li>
                                  <li className=" red">بررسی نشده</li>
                                </ul>
                              </div>
                            </div>
                            <Link
                              to="/freelancer-view-project-detail"
                              className="projects-btn project"
                            >
                              انصراف از درخواست{" "}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-projects-list">
                  <div className="row align-right">
                    <div className="col-lg-12 flex-wrap">
                      <div className="projects-cancelled-card flex-fill">
                        <div className="card-body">
                          <div className="projects-details align-items-center">
                            <div className="proposer-img">
                              <img
                                src={Developer_01}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                            <div className="proposer-detail">
                              <h4 className="">طراح UI/UX</h4>
                              <ul className="proposal-details">
                                <li className="Bold">
                                  {" "}
                                  <a href="">ارسال شده برای داده ورزی سداد</a>
                                </li>
                                <li>۲ روزپیش</li>
                                <li className=" red">
                                  رد شده به علت : <span>عدم تطابق سن </span>
                                </li>
                                <li className=" red">
                                  رد شده درتاریخ : <span>۲ مرداد ۱۴۰۲</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Proposals */}
              </div>
              {/* /Proposals list */}
              {/* pagination */}
              <div className="row">
                <div className="col-md-12">
                  <ul className="paginations freelancer">
                    <li>
                      <a href="#">
                        {" "}
                        <i className="fas fa-angle-right" /> قبلی
                      </a>
                    </li>
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#" className="active">
                        2
                      </a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li>
                      <a href="#">
                        بعدی <i className="fas fa-angle-left" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /pagination */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* The Modal */}
      <div className="modal fade" id="file">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">EDIT PROPOSAL</h4>
              <span className="modal-close">
                <a href="#" data-bs-dismiss="modal" aria-label="Close">
                  <i className="far fa-times-circle" />
                </a>
              </span>
            </div>
            <div className="modal-body">
              <form action="#">
                <div className="modal-info">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Cost</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Days</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Description</label>
                        <ReactSummernote
                          value="Default value"
                          options={{
                            lang: "ru-RU",
                            height: 350,
                            dialogsInBody: true,
                            toolbar: [
                              ["style", ["style"]],
                              ["font", ["bold", "underline", "clear"]],
                              ["fontname", ["fontname"]],
                              ["para", ["ul", "ol", "paragraph"]],
                              ["table", ["table"]],
                              ["insert", ["link", "picture", "video"]],
                              ["view", ["fullscreen", "codeview"]],
                            ],
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="submit-section text-end">
                  <button type="submit" className="btn btn-primary submit-btn">
                    Save Proposal
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /The Modal */}
    </>
  );
};
export default Freelancer;

// apply data
// {
//     "id": 4,
//     "Company": {
//         "id": 2,
//         "user": {
//             "id": 3,
//             "_id": 3,
//             "username": "mozhde.1026@gmail.com",
//             "first_name": "مژده",
//             "last_name": "زینال زادگان",
//             "email": "mozhde.1026@gmail.com",
//             "name": "مژده",
//             "isAdmin": false,
//             "last_login": null
//         },
//         "city": {
//             "name": "تهران"
//         },
//         "Name": "پارس پک | ParsPack",
//         "image": null,
//         "about": "شرکت پارس پروا سیستم با نام تجاری پارس پک، اولین ارائه دهنده خدمات رایانش ابری در ایران می باشد.\r\nما در پارس پک با تکیه بر دانش مهندسان خلاق، جوان و باانگیزه همواره در تلاشیم تا کاری ارزشمند و بزرگ انجام داده و در رقابت سالم با هم پایان داخلی و خارجی به توسعه و پیشرفت تکنولوژی در عرصه وب، نه تنها در ایران که در جهان می اندیشیم.",
//         "founded_at": "2023-08-07",
//         "population": "100-500",
//         "Owner_name": "نادیا بنیادنژاد",
//         "Email": "info@ParsPack.com",
//         "Website": "https://parspack.com/",
//         "facebook": "https://www.facebook.com",
//         "linkdin": "https://www.linkedin.com",
//         "instagram": "https://www.instagram.com/",
//         "Phone": "٤٢٨٨٣ - ٠٢١",
//         "Adress": "تهران، سعادت آباد، صرافهای جنوبی، کوچه سی پنجم غربی، پلاک ۲، واحد ۴",
//         "Working_days_from": "شنبه",
//         "Working_days_to": "پنج شنبه",
//         "working_hours_from": "08:00:00",
//         "working_hours_to": "18:00:00",
//         "favorite_employee": []
//     },
//     "job": {
//         "id": 3,
//         "Company": {
//             "id": 2,
//             "user": {
//                 "id": 3,
//                 "_id": 3,
//                 "username": "mozhde.1026@gmail.com",
//                 "first_name": "مژده",
//                 "last_name": "زینال زادگان",
//                 "email": "mozhde.1026@gmail.com",
//                 "name": "مژده",
//                 "isAdmin": false,
//                 "last_login": null
//             },
//             "city": {
//                 "name": "تهران"
//             },
//             "Name": "پارس پک | ParsPack",
//             "image": null,
//             "about": "شرکت پارس پروا سیستم با نام تجاری پارس پک، اولین ارائه دهنده خدمات رایانش ابری در ایران می باشد.\r\nما در پارس پک با تکیه بر دانش مهندسان خلاق، جوان و باانگیزه همواره در تلاشیم تا کاری ارزشمند و بزرگ انجام داده و در رقابت سالم با هم پایان داخلی و خارجی به توسعه و پیشرفت تکنولوژی در عرصه وب، نه تنها در ایران که در جهان می اندیشیم.",
//             "founded_at": "2023-08-07",
//             "population": "100-500",
//             "Owner_name": "نادیا بنیادنژاد",
//             "Email": "info@ParsPack.com",
//             "Website": "https://parspack.com/",
//             "facebook": "https://www.facebook.com",
//             "linkdin": "https://www.linkedin.com",
//             "instagram": "https://www.instagram.com/",
//             "Phone": "٤٢٨٨٣ - ٠٢١",
//             "Adress": "تهران، سعادت آباد، صرافهای جنوبی، کوچه سی پنجم غربی، پلاک ۲، واحد ۴",
//             "Working_days_from": "شنبه",
//             "Working_days_to": "پنج شنبه",
//             "working_hours_from": "08:00:00",
//             "working_hours_to": "18:00:00",
//             "favorite_employee": []
//         },
//         "city": {
//             "name": "تهران"
//         },
//         "category": {
//             "title": "برنامه نویسی و نرم افزار"
//         },
//         "skills": [
//             {
//                 "title": "React.js"
//             },
//             {
//                 "title": "Next.Js"
//             }
//         ],
//         "title": "کارشناس سئو (SEO)",
//         "published_at": "2023-08-07T23:45:24.353388+03:30",
//         "job_type": "تمام وقت",
//         "isremote": true,
//         "experience": "کمتر از ۲ سال",
//         "level": "Senior(ارشد)",
//         "salary_type": "مشخص",
//         "salary_amount": "12",
//         "description": "ما در پارس پک به هدف گسترش تیم سئو، به دنبال جذب کارشناس سئوی ماهر و با تجربه هستیم. اگر شما علاقمند به این حوزه هستید و تجربیات ارزشمندی دارید، این موقعیت شغلی، فرصت بسیار خوبی برای پیاده سازی ایده ها و تجربیات شما در مسیر رشد حرفه ای تان است.\r\n\r\nمسئولیت‌ها:\r\n\r\n•  تجزیه، تحلیل و ارزیابی عملکرد وبسایت در موتورهای جستجو\r\n•  توسعه و اجرای استراتژی‌های سئوی داخلی و خارجی برای بهبود رتبه‌های آن در موتورهای جستجو\r\n•  بررسی رقبا به صورت مداوم و ارائه استراتژی های متناسب با عملکرد رقبا\r\n•  تحلیل و توسعه دامنه کلمات کلیدی\r\n•  تقویت ساختار محتوایی و ساختار وبسایت برای رسیدن به اهداف سئو\r\n•  پیگیری و ارائه گزارش از پیشرفت و عملکرد استراتژی‌های سئو\r\n•  همکاری با سایر تیم‌ها برای اطمینان از هماهنگی استراتژی‌های سئو با اهداف بازاریابی کسب و کار\r\n•  به کارگیری سئوی تکنیکال و ارتباط با تیم فنی برای رفع مشکلات تاثیرگذار بر سئوی وبسایت",
//         "status": "فعال"
//     },
//     "employee": {
//         "id": 2,
//         "Education": [
//             {
//                 "institute": "دانشگاه زنجان",
//                 "degree": "کارشناسی",
//                 "from_date": "2023-08-05",
//                 "to_date": "2023-08-05"
//             }
//         ],
//         "Language": [
//             {
//                 "id": 1,
//                 "language": "فارسی",
//                 "rate": "100",
//                 "employee": 2
//             },
//             {
//                 "id": 2,
//                 "language": "انگلیسی",
//                 "rate": "80",
//                 "employee": 2
//             }
//         ],
//         "skills": [
//             {
//                 "title": "HTML"
//             },
//             {
//                 "title": "CSS"
//             }
//         ],
//         "Experiences": [
//             {
//                 "id": 7,
//                 "title": "کاراموز فرانت اند",
//                 "company_name": "ارتباطات ویرا آرمان",
//                 "from_date": "1401-05-18",
//                 "to_date": "1402-01-01",
//                 "employee": 2
//             },
//             {
//                 "id": 8,
//                 "title": "طراح رابط کاربری",
//                 "company_name": "تبدیل",
//                 "from_date": "1401-05-18",
//                 "to_date": "1401-05-18",
//                 "employee": 2
//             }
//         ],
//         "city": {
//             "name": "تهران"
//         },
//         "user": {
//             "id": 1,
//             "_id": 1,
//             "username": "sepsep",
//             "first_name": "سپیده",
//             "last_name": "زینال زادگان",
//             "email": "sepid.zn@gmail.com",
//             "name": "سپیده",
//             "isAdmin": true,
//             "last_login": "2023-08-07T22:39:08.232679+03:30"
//         },
//         "perfession_title": "برناهه نویس فرانت اند (react)",
//         "cooperation_type": "تمام وقت",
//         "image": "/images/IMG_9541_nUrSfls.JPG",
//         "about": "سپیده هستم",
//         "gender": "خانوم",
//         "cv": "/images/Resume-1_QLyqOZa.pdf",
//         "favorite_jobs": [
//             3,
//             4
//         ]
//     },
//     "message": "سلام من متقاضی این کار هستم",
//     "send_at": "2023-08-07T23:58:43.736328+03:30",
//     "status": "در انتظار بررسی",
//     "status_change_date": "2023-08-07T23:58:43.736396+03:30"
// },
// }
// ]
