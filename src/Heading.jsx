// import React, { useState } from 'react'
// import './style.css'
// import axios from 'axios'
// import { Link } from 'react-router-dom'

// // import { getDefaultNormalizer } from '@testing-library/react'

// function Heading() {
//   const [search, setSearch] = useState()


//   console.log("search value is",search)
//  async function handleSubmit(){
//    console.log("SUBMIT ")
//     const apiKey="4393d8addcc1471ea48003431e0de3c4";
//     const api=`https://newsapi.org/v2/everything?language=en&q=${search}&apiKey=${apiKey}`
//     await axios.get(api
//     ).then((response)=>{
//       console.log("search response",response)
//       // setData(response.data)
//     })
//     .catch(error=>console(error));



//   }


//   return (

//     <div>
//       <div class="navAbove header">
//         <h1>
//           <i><span class=" newstitle fs-1 " style={{fontFamily: 'Poppins ,sans-serif' }}>QUICK</span></i> News
//         </h1>
//         <div class="elements d-flex flex-row m-auto  ">

// <button class="signin my-auto d-flex flex-row btn btn-dark">
//     <i class="fa fa-duotone fa-user"></i>
//   <a href="#" >Sign In</a>
// </button>
// {/* <button class="contact_us my-auto d-flex flex-row btn btn-dark">
//     <i class="fa fa-regular fa-phone"></i>

//     <a href="#myfooter">Contact Us</a>
// </button> */}
// <button class="logout my-auto d-flex flex-row btn btn-dark ">
//     <i class="fa fa-sign-out" aria-hidden="true"></i>

//     <a href="#">Log Out</a>
// </button>

// </div>
//       </div>
//       <div class="navigation">
//         <nav class="navbar navbar-expand-lg bg-dark">
//           <div class="container-fluid">
//             <button
//               class="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span class="navbar-toggler-icon"></span>
//             </button>
//             <div class="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
//         <li class="nav-item navli">
//           <Link class="nav-link clr active" aria-current="page" to="/">Home</Link>
//         </li>
//         <li class="nav-item navli">
//           <Link class="nav-link clr " aria-current="page" to="/sports">Sports</Link>
//         </li>
//         <li class="nav-item navli">
//           <Link class="nav-link clr " aria-current="page" to="/lifestyle">Lifestyle</Link>
//         </li>
//         <li class="nav-item navli">
//           <Link class="nav-link clr " aria-current="page" to='/fasion'>Fashion</Link>
//         </li>
//         <li class="nav-item navli">
//           <Link class="nav-link clr " aria-current="page" to='/music'>Music</Link>
//         </li>
//         <li class="nav-item navli">
//           <Link class="nav-link clr " aria-current="page" to='/business'>Business</Link>
//         </li>
//         <li class="nav-item navli">
//           <a class="nav-link clr " aria-current="page" href="#footer-container">Contact</a>
//         </li>
//       </ul>
//               <form class="d-flex" onSubmit={handleSubmit}>
//                 <input
//                   class="form-control me-2"
//                   type="search"
//                   placeholder="Search"
//                   aria-label="Search"
//                   name='search'
//                   onChange={(e)=>setSearch(e.target.value)}
//                 />
//                 <button class="btn btn-outline-danger"  type="submit">
//                   Search
//                 </button>
//               </form>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </div>

//   )

// }


// export default Heading

import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
const HeaderButtons = (props) => {
  if (props.isLoggedin) {
    return (
      <div class="elements d-flex flex-row my-auto  align-items-center ">
        <Avatar name={props.username} round={true} size="50" />
        <button class="contact_us my-auto mx-4 d-flex flex-row btn btn-dark">
          <i class="logo fa fa-regular fa-phone"></i>
          <a href="#myfooter">Contact Us</a>
        </button>
        <Link to={"/"} class="link-danger" onClick={props.logoutHandler}>
          <button class="logout my-auto d-flex flex-row btn btn-dark ">
            <i class="logo fa fa-sign-out" aria-hidden="true"></i>
            Logout
          </button>
        </Link>
      </div>
    );
  } else {
    return (
      <div class="elements d-flex flex-row m-auto  ">
        <Link to={"/signin"}>
          <button class="signin my-auto mx-4 d-flex flex-row btn btn-dark">
            <i class="logo fa fa-duotone fa-user"></i>Sign in{" "}
          </button>
        </Link>

        <button class="contact_us my-auto d-flex flex-row btn btn-dark">
          <i class="logo fa fa-regular fa-phone"></i>

          <a href="#myfooter">Contact Us</a>
        </button>

        <Link to={"/login"}>
          {" "}
          <button class="logout my-auto mx-4 d-flex flex-row btn btn-dark ">
            <i class="logo fa fa-sign-out" aria-hidden="true"></i>Login
          </button>
        </Link>
      </div>
    );
  }
};

function Heading(props) {
  const logoutHandler = () => {
    props.setToken(false);
    props.setUsername("");
    localStorage.removeItem("Username");
  };
  return (
    <div>
      <div class="navAbove header">
        <div className="newstitle">
          <h1
            class=" newstitle fs-1 "
            style={{ fontFamily: "Poppins ,sans-serif" }}
          >
            <i><span class=" newstitle fs-1 " style={{ fontFamily: 'Poppins ,sans-serif' }}>QUICK</span></i> NEWS
          </h1>
        </div>
        <HeaderButtons
          isLoggedin={props.isLoggedin}
          username={props.Username}
          logoutHandler={logoutHandler}
        />
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
            <div
              class="collapse-horizontal navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li class="nav-item navli">
                  <Link class="nav-link clr active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                {props.isLoggedin && (
                  <li class="nav-item navli">
                    <Link
                      class="nav-link clr "
                      aria-current="page"
                      to="/sports"
                    >
                      Sports
                    </Link>
                  </li>
                )}
                {props.isLoggedin && (
                  <li class="nav-item navli">
                    <Link
                      class="nav-link clr "
                      aria-current="page"
                      to="/lifestyle"
                    >
                      Lifestyle
                    </Link>
                  </li>
                )}
                {props.isLoggedin && (
                  <li class="nav-item navli">
                    <Link
                      class="nav-link clr "
                      aria-current="page"
                      to="/fasion"
                    >
                      Fashion
                    </Link>
                  </li>
                )}
                {props.isLoggedin && (
                  <li class="nav-item navli">
                    <Link class="nav-link clr " aria-current="page" to="/music">
                      Music
                    </Link>
                  </li>
                )}
                {props.isLoggedin && (
                  <li class="nav-item navli">
                    <Link
                      class="nav-link clr "
                      aria-current="page"
                      to="/business"
                    >
                      Business
                    </Link>
                  </li>
                )}
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