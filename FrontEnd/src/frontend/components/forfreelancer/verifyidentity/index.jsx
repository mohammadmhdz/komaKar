import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { home_icon } from "../../imagepath";
import { Sidebar } from '../sidebar';
    
const FreelancerVerifyIdentity = (props) => {    
  useEffect(() => {
    document.body.className = 'dashboard-page';
    return () => { document.body.className = ''; }
  });  
        
  return (
    <>
    {/* Breadcrumb */}
    <div className="bread-crumb-bar">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <div className="breadcrumb-list">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="#"><img src={home_icon} alt="Post Author" /> Home</Link></li>
                    <li className="breadcrumb-item" aria-current="page">FREELANCER
</li>
                    <li className="breadcrumb-item" aria-current="page">VERIFY IDENTITY</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
    {/* Page Content */}
    <div className="content content-page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-md-4 theiaStickySidebar">
          <StickyBox offsetTop={20} offsetBottom={20}>
                    <Sidebar/>
                </StickyBox>
          </div>
          {/* Verification Details */}
          <div className="col-xl-9 col-md-8">
            <div className="card">
              <div className="payment-list wallet card-body">
                <h3>Verification Details</h3>
                <form >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="first_name">Your Name</label>
                        <input
                          className="form-control"
                          id="first_name"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="last_name">Contact Number</label>
                        <input
                          className="form-control"
                          id="last_name"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="card_number">
                          CNIC / Passport / NIN / SSN
                        </label>
                        <input
                          className="form-control"
                          id="card_number"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Upload Document</label>
                        <div className="uplod">
                          <label className="file-upload image-upbtn">
                            Select Document <input type="file" />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="comment">Address</label>
                        <textarea
                          className="form-control"
                          rows={5}
                          id="comment"
                          defaultValue={""}
                        />
                        <p className="mt-2">
                          Your account information should match with the document
                          that you are providing.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-12 text-end">
                      <button type="submit" className="btn-primary click-btn">
                        Submit verification
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* Verification Details */}
        </div>
      </div>
    </div>
    {/* /Page Content */}
  </>
      )
  
}
export default FreelancerVerifyIdentity;