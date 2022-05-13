import React from 'react'
import "./style.css"
function Footer() {
  return (
    <div class="footer_class my-auto mt-4" id="myfooter"  
    style={{ fontFamily: "Poppins ,sans-serif" }}>
    <footer
                class="text-center text-lg-start text-dark"
                style={{backgroundColor: '#DBD8E3'}}
                >
          <section
                   class="d-flex justify-content-between p-4 text-white"
                   style={{backgroundColor: 'black'}}
                   >
            <div class="sports_me-5">
              <h5>Get connected with us on social networks:</h5>
            </div>
            <div class="myfooter_icons fs-4">
              <a href="https://www.facebook.com/harsh.dhawale.792/" target="blank" class="text-white me-4">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="mailto:harshdhawale2404@gmail.com" target="blank" class="text-white me-4">
                <i class="fab fa-google"></i>
              </a>
              <a href="https://www.instagram.com/_harsh.4_/" target="blank" class="text-white me-4">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/harsh-dhawale-296301205/" target="blank" class="text-white me-4">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/SanketJhavar" target="blank" class="text-white me-4">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </section>
          <section class="">
            <div class="container text-center text-md-start mt-5" 
              style={{ fontFamily: "Poppins ,sans-serif" }}>
              <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 class="sports_text-uppercase fw-bold">Quick News</h6>
                  <hr
                      class="mb-4 mt-0 d-inline-block mx-auto"
                      style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}}
                      />
                  <p>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum obcaecati voluptas dolorum, modi doloribus quos magnam. Commodi quia consequatur voluptas illum, velit nemo sed quis, provident voluptatum eaque esse, ipsa adipisci ullam? Porro eos quisquam harum laborum quaerat cumque iure omnis, dolorum unde in animi molestias consectetur at atque fuga. 
                  </p>
                </div>
                
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                
                  <h6 class="sports_text-uppercase fw-bold">Contact</h6>
                  <hr
                      class="mb-4 mt-0 d-inline-block mx-auto"
                      style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}}
                      />
                  <p class="sports_contact-icons"><i class="sports_icons fas fa-home mr-3"></i> PICT, Dhankawdi, Pune</p>
                  <p class="sports_contact-icons"><i class="sports_icons fas fa-envelope mr-3"></i> sanketjhavar66@gmail.com</p>
                  <p class="sports_contact-icons"><i class="sports_icons fas fa-phone mr-3"></i> +91 7057705699</p>
                  <p class="sports_contact-icons"><i class="sports_icons fas fa-print mr-3"></i> +91 7588744622</p>
                </div>
              </div>
            </div>
            </div>
          </section>
          <div
               class="text-center p-3"
               style={{backgroundColor: 'rgba(210, 109, 109, 0.2)'}}
               >
            © 2020 Copyright:
          </div>
        </footer>
</div>

  )
}

export default Footer