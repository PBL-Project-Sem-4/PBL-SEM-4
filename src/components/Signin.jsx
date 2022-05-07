import React from "react";
import { Link } from "react-router-dom";
function Signin() {
  return (
    <div>
      <div class="mymainbody h-auto">
        <div class=" h-custom">
          <div class=" row d-flex justify-content-center align-items-center h-100 mt-5">
            <div class="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://github.com/SayeedKhan21/PBL-sem-4/blob/master/public/images/news.jpg?raw=true"
                class="img-fluid"
                alt="Sample image"
              />
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1 col-8">
              <form class="myform" action="/signin" method="POST">
                <div class="form-outline mb-4">
                  <input
                    required="true"
                    type="text"
                    name="uname"
                    class="form-control form-control-lg"
                    placeholder="Enter name"
                  />
                  <label class="form-label" for="form3Example3">
                    user name
                  </label>
                </div>
                <div class="form-outline mb-4">
                  <input
                    required="true"
                    type="email"
                    id="form3Example3"
                    name="email"
                    class="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                  />
                  <label class="form-label" for="form3Example3">
                    Email address
                  </label>
                </div>

                <div class="form-outline mb-3">
                  <input
                    required="true"
                    type="password"
                    name="pass"
                    class="form-control form-control-lg "
                    placeholder="Enter password"
                  />
                  <label class="form-label" for="form3Example4">
                    Password
                  </label>
                </div>
                <div class="form-outline mb-3">
                  <input
                    required="true"
                    type="password"
                    name="cpass"
                    class="form-control form-control-lg "
                    placeholder="Confirm password"
                  />
                  <label class="form-label" for="form3Example4">
                    Confirm Password
                  </label>
                </div>

                <div class="text-center text-lg-start mt-4 pt-2 ">
                  <button
                    type="submit"
                    class="btn btn-danger btn-lg "
                    id="signinbtn"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Sign In
                  </button>
                  <p class="small fw-bold mt-2 pt-1 mb-0 no_account">
                    Already have an account?{" "}
                    <Link to={"/login"} class="link-danger">
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
