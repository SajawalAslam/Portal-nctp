import React, { Component } from 'react'
import './login.scss'
import logo from './img/portal png logo.png'
import {
    
    Link
  } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <section className="login-body pb-5 pt-4">
          <div className="row mr-0 p-0">
              <div className="col-sm-1 col-md-2 col-lg-3 "></div>
              <div className="col-sm-9 col-md-8 col-lg-6 border col-login ">
                  <div className="border rounded midle-login-body">
                        <div className="p-3 text-center border login-top AdminLogin-head-text"><h6>Student Login</h6></div>
                        <div className="d-flex justify-content-center pt-3 ">
                            <img class="login-logo" src={logo} alt="NCTP LOGIN PORTAL LOGO" />
                        </div>
                    <form className="p-5 p-md-3">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="form-group d-flex justify-content-between">
                            <p className="full-sign">Not a member? <spam className="sign">SIGN UP</spam></p>
                            <p className="full-sign">Forget Password?</p>
                        </div>
                        {/* <Link to="/Home"> */}
                            <div className="d-flex justify-content-center" style={{textDecoration:"none"}}>
                                <Link to="/Courses" class="AdminLogin-submit-button AdminLogin-m-r-l text-center">Login</Link>
                            </div>
                        {/* </Link> */}
                    </form>
                  </div>
              </div>
              <div className="col-sm-1 col-md-2 col-lg-3 "></div>
          </div>
      </section>
    )
  }
}
