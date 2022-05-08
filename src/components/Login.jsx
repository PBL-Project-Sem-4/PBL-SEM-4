import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { authenticateUser } from "../axios";
function Login(props) {
  const history = useHistory();
  const obj = { Username: "", Password: "" };
  const [userInfo, setUserInfo] = useState(obj);
  const onLoginHandler = async(event) => {
    let res = await authenticateUser(userInfo);
    if(res.data.message==='User authenticated!')
    {
      props.setToken(true)
      props.setUsername(res.data.username)
      localStorage.removeItem("Username")
      localStorage.setItem("Username",res.data.username)
      history.push('/')
    }
    else{
      localStorage.setItem("Message",res.data.message)
      history.push('/')
    }
  };
  const changeHandler = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
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
              <form class="myform">
                <div class="form-outline mb-4">
                  <input
                    required="true"
                    type="text"
                    name="Username"
                    class="form-control form-control-lg"
                    placeholder="Enter Username"
                    onChange={changeHandler}
                  />
                  <label class="form-label" for="form3Example3">
                    Username
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

                <div class="text-center text-lg-start mt-4 pt-2">
                  <button
                    class="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    onClick={onLoginHandler}
                    type="button"
                  >
                    Login
                  </button>
                  <p class="small fw-bold mt-2 pt-1 mb-0 no_account">
                    Don't have an account?{" "}
                    <Link to={"/signin"} class="link-danger">
                      Register
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

export default Login;
