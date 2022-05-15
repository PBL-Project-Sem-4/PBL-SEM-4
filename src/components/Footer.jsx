import React from 'react'
import "./style.css"
import hd from '../images/harsh.jpg'
import sj from '../images/sanket.jpg'
import sk from '../images/samruddhi.jpg'
function Footer() {
  return (
    <div class="footer_class mx-auto mt-4 w-100" id="myfooter"
      style={{ fontFamily: "Poppins ,sans-serif" }}>
      <footer class="text-center text-lg-start text-dark" style={{ backgroundColor: '#DBD8E3' }}>
        <div class="footer-top d-flex justify-content-between p-4 text-white" style={{ backgroundColor: 'black' }} >
          <div class="sports_me-5">
            <h5>Get connected with us on social networks:</h5>
          </div>
          <div className="myfooter_icons fs-4">
            <a href="https://www.facebook.com/harsh.dhawale.792/" target="blank" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="mailto:harshdhawale2404@gmail.com" target="blank" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="https://www.instagram.com/_harsh.4_/" target="blank" className="text-white me-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/harsh-dhawale-296301205/" target="blank" className="text-white me-4">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/SanketJhavar" target="blank" className="text-white me-4">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        {/* <section class=""> */}

        <div className="footer-main d-flex ">
          <div className="developers w-50 my-3">
          <h6 className="devloper_title fs-3 text-center fw-bold ">Developers</h6>
            <div className="row  justify-content-lg-center m-5" align="center">
              <div className="col-4 devprofile ">
                <div className="profileimage"></div>
                <p>Sayeed Khan</p>
              </div>
              <div className="col-4 devprofile">
                <div className="profileimage"><img src={hd}  className="profileimage" /></div>
                <p>Harsh Dhawale</p>
              </div>
              <div className="col-4 devprofile">
                <div className="profileimage"><img src={sj}  className="profileimage" /></div>
                <p>Sanket Jhavar</p>
              </div>
              <div className="col-4 devprofile">
                <div className="profileimage"></div>
                <p>Hetavi Gandhi</p>
              </div>
              <div className="col-4 devprofile">
                <div className="profileimage"><img src={sk}  className="profileimage" /></div>
                <p>Samruddhi Kadam</p>
              </div>
            </div>

          </div>

          <div className="footer-contact  mx-auto my-4 fs-5 ">
            <div className="col " >
            <h6 class="sports_text-uppercase fs-3 text-center fw-bold ">Contact Us</h6>
            <div className="sports_contact_icons my-5 align-middle">
            <p><i class="sports_icons fas fa-home mr-3"></i> PICT, Dhankawdi, Pune</p>
            <p><i class="sports_icons fas fa-envelope mr-3"></i> sanketjhavar66@gmail.com</p>
            <p><i class="sports_icons fas fa-phone mr-3"></i> +91 7057705699</p>
            <p><i class="sports_icons fas fa-print mr-3"></i> +91 7588744622</p>
            </div>
            </div>
          </div>
        </div>

        < div class="text-center p-3 fs-5 fw-bold" style={{ backgroundColor: 'rgba(210, 109, 109, 0.2)' }}>
          © 2020 Copyright:
        </div >
      </footer >
    </div >

  )
}

export default Footer