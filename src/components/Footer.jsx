import React from 'react'

function Footer() {
  return (
    <div class="footer_class">
    <footer
                class="text-center text-lg-start text-dark"
                style={{backgroundColor: '#ECEFF1'}}
                >
          <section
                   class="d-flex justify-content-between p-4 text-white"
                   style={{backgroundColor: 'red'}}
                   >
            <div class="sports_me-5">
              <span>Get connected with us on social networks:</span>
            </div>
            <div>
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
            <div class="container text-center text-md-start mt-5">
              <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 class="sports_text-uppercase fw-bold">Quick News</h6>
                  <hr
                      class="mb-4 mt-0 d-inline-block mx-auto"
                      style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}}
                      />
                  <p>
                    Here we are providing quick summary for long news so that we can get quick gest of the news and we can smartly utilise the time in this busy world.
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