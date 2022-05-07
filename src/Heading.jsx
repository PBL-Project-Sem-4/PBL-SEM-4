import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
function Heading() {
  return (
      
    <div>
      <div class="navAbove header">
        <h1>
          <i><span class=" newstitle fs-1 " style={{fontFamily: 'Poppins ,sans-serif' }}>QUICK</span></i> News
        </h1>
        <div class="elements d-flex flex-row m-auto  ">

<button class="signin my-auto d-flex flex-row btn btn-dark">
    <i class="fa fa-duotone fa-user"></i>
  <a href="#" >Sign In</a>
</button>
<button class="contact_us my-auto d-flex flex-row btn btn-dark">
    <i class="fa fa-regular fa-phone"></i>

    <a href="#myfooter">Contact Us</a>
</button>
<button class="logout my-auto d-flex flex-row btn btn-dark ">
    <i class="fa fa-sign-out" aria-hidden="true"></i>

    <a href="#">Log Out</a>
</button>

</div>
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
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item navli">
          <Link class="nav-link clr active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item navli">
          <Link class="nav-link clr " aria-current="page" to="/sports">Sports</Link>
        </li>
        <li class="nav-item navli">
          <Link class="nav-link clr " aria-current="page" to="/lifestyle">Lifestyle</Link>
        </li>
        <li class="nav-item navli">
          <Link class="nav-link clr " aria-current="page" to='/fasion'>Fashion</Link>
        </li>
        <li class="nav-item navli">
          <Link class="nav-link clr " aria-current="page" to='/music'>Music</Link>
        </li>
        <li class="nav-item navli">
          <Link class="nav-link clr " aria-current="page" to='/business'>Business</Link>
        </li>
        <li class="nav-item navli">
          <a class="nav-link clr " aria-current="page" href="#footer-container">Contact</a>
        </li>
      </ul>
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-danger" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
    
  )
}

export default Heading