import React, { Component } from "react";
import imgg from "./pic.jpg"
class Login extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <span className="navbar-text">
              ILMA | ERP
            </span>
            <span className="navbar-text title">
              ILMA | ERP
            </span>
          </div>
        </nav>
        
         {/* <div class="row justify-content-center">
    <div class="col-4">
      <div className= "mx-wd-650">
    <img src={imgg} claasName="img-fluid" />
    </div>
    </div>
    <div class="col-4">
    
        </div>
  </div> */}
    <div className="content content-fixed content-auth">
        <div className="container">
        
          
          <div className="media align-items-stretch justify-content-center ht-100p pos-relative">
        
            <div className="media-body align-items-center ">
              <div className="mx-wd-650">
                <img src={imgg}className="img-fluid" alt="" />
              </div>

              
            </div>{/* media-body */}
            <div className="wd-100p">
        <h3 className="tx-color-01 mg-b-5">Sign In</h3>
        <p className="tx-color-03 tx-16 mg-b-40">Welcome back! Please signin to continue.</p>
        <div className="form-group">
          <label>UserID</label>
          <input name="TextBox1" type="text" maxLength={6} id="TextBox1" className="form-control" placeholder="Please Enter Login" />
        </div>
        <div className="form-group">
          <div className="d-flex justify-content-between mg-b-5">
            <label className="mg-b-0-f">Password</label>
            <a href className="tx-13">Forgot password?</a>
          </div>
          <input name="TextBox2" type="password" id="TextBox2" className="form-control" placeholder="Please Enter Password" />
        </div>
        <input type="submit" name="Button2" defaultValue="Sign In" id="Button2" className="btn btn-brand-02 btn-block" />
      </div>

        
          </div>{/* media */}
        
        </div>{/* container */}
      </div>

      </div>
    )
  }
}

export default Login;