import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addUser } from "../axios";
import { useHistory } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
function Signin(props) {
  const history = useHistory();
  const userInfo = { Username: "", Email: "", Password: "" };
  const [user, setUser] = useState(userInfo);
  const [cpass, setcpass] = useState("");
  const changeHandler = (event) => {
    if (
      event.target.name === "Username" ||
      event.target.name === "Email" ||
      event.target.name === "Password"
    )
      setUser({ ...user, [event.target.name]: event.target.value });
    else {
      setcpass(event.target.value);
    }
    if (event.target.name === "Username") {
      if (
        event.target.value.length > 4 &&
        user.Email.includes("@") &&
        user.Password.length > 4
      ) {
        if (user.Password === cpass) {
          document.getElementById("signinbtn").style.cursor = "pointer";
        } else {
          document.getElementById("signinbtn").style.cursor = "not-allowed";
        }
      } else {
        document.getElementById("signinbtn").style.cursor = "not-allowed";
      }
    } else if (event.target.name === "Password") {
      if (
        event.target.value.length > 4 &&
        user.Email.includes("@") &&
        user.Username.length > 4
      ) {
        if (event.target.value === cpass) {
          document.getElementById("signinbtn").style.cursor = "pointer";
        } else {
          document.getElementById("signinbtn").style.cursor = "not-allowed";
        }
      } else {
        document.getElementById("signinbtn").style.cursor = "not-allowed";
      }
    } else if (event.target.name === "Email") {
      if (
        user.Username.length > 4 &&
        event.target.value.includes("@") &&
        user.Password.length > 4
      ) {
        if (user.Password === cpass) {
          document.getElementById("signinbtn").style.cursor = "pointer";
        } else {
          document.getElementById("signinbtn").style.cursor = "not-allowed";
        }
      } else {
        document.getElementById("signinbtn").style.cursor = "not-allowed";
      }
    } else {
      if (
        user.Username.length > 4 &&
        user.Email.includes("@") &&
        user.Password.length > 4
      ) {
        if (user.Password === event.target.value) {
          document.getElementById("signinbtn").style.cursor = "pointer";
        } else {
          document.getElementById("signinbtn").style.cursor = "not-allowed";
        }
      } else {
        document.getElementById("signinbtn").style.cursor = "not-allowed";
      }
    }
  };
  const formSubmitHandler = async (event) => {
    const response = await addUser(user);
    if (response) {
      console.log("Signin successfully!");
      props.setToken(true);
      props.setUsername(response.data.Username);
      localStorage.setItem("Username", response.data.Username);
      history.push("/");
    } else {
      console.log("Signin unsuccessfull!");
      props.setToken(false);
      history.push("/");
    }
  };
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
              <form class="myform" method="POST">
                <div class="form-outline mb-4">
                  <input
                    required="true"
                    type="text"
                    name="Username"
                    class="form-control form-control-lg"
                    placeholder="Enter name"
                    onChange={changeHandler}
                  />
                  {/* <Form.Check
                  type="text"
                  /> */}
                  <label class="form-label" for="form3Example3">
                    Username
                  </label>
                </div>
                <div class="form-outline mb-4">
                  <input
                    required="true"
                    type="email"
                    id="form3Example3"
                    name="Email"
                    class="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    onChange={changeHandler}
                  />
                  <label class="form-label" for="form3Example3">
                    Email address
                  </label>
                </div>

                <div class="form-outline mb-3">
                  <input
                    required="true"
                    type="password"
                    name="Password"
                    class="form-control form-control-lg "
                    placeholder="Enter password"
                    onChange={changeHandler}
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
                    id="cpassword"
                    class="form-control form-control-lg "
                    placeholder="Confirm password"
                    onChange={changeHandler}
                  />
                  <label class="form-label" for="form3Example4">
                    Confirm Password
                  </label>
                </div>

                <div class="text-center text-lg-start mt-4 pt-2 ">
                  <button
                    type="button"
                    class="btn btn-danger btn-lg "
                    id="signinbtn"
                    style={{
                      paddingLeft: "2.5rem",
                      paddingRight: "2.5rem",
                      cursor: "not-allowed",
                    }}
                    onClick={formSubmitHandler}
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
