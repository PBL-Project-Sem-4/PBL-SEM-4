import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
const HeaderButtons = (props) => {
  if (props.isLoggedin) {
    return (
      <div class="elements d-flex flex-row my-auto  align-items-center ">
        <Avatar name={props.username} round={true} size="50"/>
        <button class="contact_us my-auto d-flex flex-row btn btn-dark">
          <i class="fa fa-regular fa-phone"></i>
          <a href="#myfooter">Contact Us</a>
        </button>
        <button class="logout my-auto d-flex flex-row btn btn-dark ">
          <i class="fa fa-sign-out" aria-hidden="true"></i>

          <Link to={"/"} class="link-danger" onClick={props.logoutHandler}>
            Logout
          </Link>
        </button>
      </div>
    );
  } else {
    return (
      <div class="elements d-flex flex-row m-auto align-items-center justify-content-center ">
        <button class="signin my-auto d-flex flex-row btn btn-dark">
          <i class="fa fa-duotone fa-user"></i>
          <Link to={"/signin"}>
            Sign in
          </Link>
        </button>
        <button class="contact_us my-auto d-flex flex-row btn btn-dark">
          <i class="fa fa-regular fa-phone"></i>

          <a href="#myfooter">Contact Us</a>
        </button>
        <button class="logout my-auto d-flex flex-row btn btn-dark ">
          <i class="fa fa-sign-out" aria-hidden="true"></i>

          <Link to={"/login"}>
            Login
          </Link>
        </button>
      </div>
    );
  }
};

function Heading(props) {
  const logoutHandler=()=>{
    props.setToken(false)
    props.setUsername('')
    localStorage.removeItem("Username")
  }
  return (
    <div>
      <div class="navAbove header">
        <div className="newstitle" >
        <h1   class=" newstitle fs-1 "
              style={{ fontFamily: "Poppins ,sans-serif" }}> 

              QUICK NEWS

         
        </h1>
        </div>
        <HeaderButtons isLoggedin={props.isLoggedin} username={props.Username} logoutHandler={logoutHandler}/>
      </div>
      <div class="navigation">
        <nav class="navbar navbar-expand-lg bg-dark">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse-horizontal navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li class="nav-item navli" >
                  <Link class="nav-link clr active" aria-current="page" to="/" >
                    Home
                  </Link>
                </li>
                <li class="nav-item navli">
                  <Link class="nav-link clr " aria-current="page" to="/sports">
                    Sports
                  </Link>
                </li>
                <li class="nav-item navli">
                  <Link
                    class="nav-link clr "
                    aria-current="page"
                    to="/lifestyle"
                  >
                    Lifestyle
                  </Link>
                </li>
                <li class="nav-item navli">
                  <Link class="nav-link clr " aria-current="page" to="/fasion">
                    Fashion
                  </Link>
                </li>
                <li class="nav-item navli">
                  <Link class="nav-link clr " aria-current="page" to="/music">
                    Music
                  </Link>
                </li>
                <li class="nav-item navli">
                  <Link
                    class="nav-link clr "
                    aria-current="page"
                    to="/business"
                  >
                    Business
                  </Link>
                </li>
               
              
              </ul>
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-light" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Heading;
