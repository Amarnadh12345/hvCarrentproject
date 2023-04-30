import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="row box">
      <div className="col-md-3">
        <div class="form-container">
          <p class="title">User Login</p>
          <form class="form">
            <div class="input-group">
              <label for="username">Username</label>
              <input type="text" name="username" id="username" placeholder="" />
            </div>
            <div class="input-group">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder=""
              />
              <div class="forgot">
              <Link rel="noopener noreferrer" to="/forgotpassword">
                  Forgot Password ?
                </Link>
              </div>
            </div>
            <Link to="/dashboard">
              <button class="sign">Sign in</button>
            </Link>
          </form>

          <p class="signup">
            Don't have an account?
            <a rel="noopener noreferrer" href="#" class="">
              Sign up
            </a>
          </p>
        </div>
      </div>
      <div className="col-md-3">
        <div class="form-container">
          <p class="title">Owner Login</p>
          <form class="form">
            <div class="input-group">
              <label for="username">Username</label>
              <input type="text" name="username" id="username" placeholder="" />
            </div>
            <div class="input-group">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder=""
              />
              <div class="forgot">
              <Link rel="noopener noreferrer" to="/forgotpassword">
                  Forgot Password ?
                </Link>
              </div>
            </div>
            <Link to="/dashboard">
              <button class="sign">Sign in</button>
            </Link>
          </form>

          <p class="signup">
            Don't have an account?
            <Link rel="noopener noreferrer" to="/forgotpassword">
                  Forgot Password ?
                </Link>
          </p>
        </div>
      </div>
      <div className="col-md-3">
        <div class="form-container">
          <p class="title">Admin Login</p>
          <form class="form">
            <div class="input-group">
              <label for="username">Username</label>
              <input type="text" name="username" id="username" placeholder="" />
            </div>
            <div class="input-group">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder=""
              />
              <div class="forgot">
                <Link rel="noopener noreferrer" to="/forgotpassword">
                  Forgot Password ?
                </Link>
              </div>
            </div>
            <Link to="/dashboard">
              <button class="sign">Sign in</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
