import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

function Signup() {
  return (
    <>
      <div class="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="signup-form">
              <h2>Sign Up</h2>
              <form action="#" method="post">
                <div className="form-group">
                  <label for="username">Username:</label>
                  <input
                    type="text"
                    placeholder="enter your name"
                    className="form-control"
                    id="username"
                    name="username"
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="email">Email:</label>
                  <input
                    placeholder="enter your email"
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="phone">Phone:</label>
                  <input
                    type="number"
                    placeholder="enter your phone number"
                    className="form-control"
                    id="phone"
                    name="phone"
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="work">Work:</label>
                  <input
                    type="text"
                    placeholder="enter your work"
                    className="form-control"
                    id="work"
                    name="work"
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="password">Password:</label>
                  <input
                    placeholder="enter password"
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="confirm password">Confirm Password:</label>
                  <input
                    placeholder="enter confirm password"
                    type="password"
                    className="form-control"
                    id="confirm password"
                    name="confirm password"
                    required
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    name="signup"
                  >
                    Sign Up
                  </button>
                </div>
                <p className="text-center">
                  Already have an account?{" "}
                  <NavLink to="/login">Login here</NavLink>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
