import "../assets/style/footer.css"
import { Link } from "react-router-dom"
import { IconBrandWhatsapp, IconCarCrane, IconLocation, IconCheck, IconMail, IconPhone } from '@tabler/icons-react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-hotlines">
            <h3 className="footer-heading">hotlines</h3>
            <div className="footer-flex">
              <IconBrandWhatsapp stroke={1} className="footer-icon" />
              <div className="footer-hotline-text">
                <p className="footer-text">mobile: <span>08066244696</span></p>
                <p className="footer-text">assistance: <span>07063470681</span></p>
              </div>
            </div>
          </div>

          <div className="footer-address">
            <h3 className="footer-heading">Ar-Rahman Sooto Autocare</h3>
            <div className="footer-flex">
              <IconLocation stroke={1} className="footer-icon-wide" />
              <div className="footer-text">
                <p>
                  klm. 5 Lasu isheri road Alhaji Ede bus stop, Igando lagos
                  state. inside NNPC Petrol station
                </p>
              </div>
            </div>
          </div>

          <div className="footer-assistance">
            <h3 className="footer-heading">24/7 assistance</h3>
            <div className="footer-flex gap">
              <IconCarCrane stroke={1} className="footer-icon-crane" />
              <div className="footer-text">
                <p>
                  Each customer has an account managers that will respond to your vehicle needs during and outside office hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Grid */}
        <div className="footer-middle">
          {/* About Us */}
          <div className="footer-about">
            <h2 className="footer-subheading">about us</h2>
            <p className="footer-divider"></p>
            <p className="footer-text">
              klm. 5 Lasu isheri road Alhaji Ede bus stop, Igando lagos state. inside NNPC Petrol station
            </p>
            <div className="footer-hotline-text">
              <p className="footer-text">mobile: <span>08066244696</span></p>
              <p className="footer-text">assistance: <span>07063470681</span></p>
            </div>

            <div className="footer-social">
              <a href="http://wa.me/+2348033445250" target="_blank" rel="noopener noreferrer">
                <IconBrandWhatsapp className="footer-social-icon" />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=arramansooto01@gmail.com" target="_blank" rel="noopener noreferrer">
                <IconMail className="footer-social-icon" />
              </a>
              <a href="tel:+2348033445250">
                <IconPhone className="footer-social-icon" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="footer-services">
            <h2 className="footer-subheading">our services</h2>
            <p className="footer-divider"></p>
            <ul className="footer-list">
              <Link to="service"><li className="footer-list-item"><IconCheck stroke={1.5} /> engine diagnosis</li></Link>
              <Link to="service"><li className="footer-list-item"><IconCheck stroke={1.5} /> air conditioning</li></Link>
              <Link to="service"><li className="footer-list-item"><IconCheck stroke={1.5} /> brake repair</li></Link>
              <Link to="service"><li className="footer-list-item"><IconCheck stroke={1.5} /> lube, oil and filters</li></Link>
              <Link to="service"><li className="footer-list-item"><IconCheck stroke={1.5} /> battery testing and replacement</li></Link>
              <Link to="service"><li className="footer-list-item"><IconCheck stroke={1.5} /> transmission services</li></Link>
              <Link to="service"><li className="footer-list-item"><IconCheck stroke={1.5} /> other car services</li></Link>
            </ul>
          </div>

          {/* Tags */}
          <div className="footer-tags">
            <h2 className="footer-subheading">popular tags</h2>
            <p className="footer-divider"></p>
            <div>
              <a href="#"><p className="footer-tagss">CNG Conversion</p></a>
            </div>
            <div className="footer-tags-container">
              <a href="#"><p className="footer-tag">diagnosis</p></a>
              <a href="#"><p className="footer-tag">engine</p></a>
            </div>
            <div className="footer-tags-container">
              <a href="#"><p className="footer-tag">suspension</p></a>
              <a href="#"><p className="footer-tag">brake</p></a>
            </div>
            <div className="footer-tags-container">
              <a href="#"><p className="footer-tag">transmission</p></a>
              <a href="#"><p className="footer-tag">filter</p></a>
              <a href="#"><p className="footer-tag">oil</p></a>
            </div>
          </div>

          {/* Hours */}
          <div className="footer-hours">
            <h2 className="footer-subheading">hours</h2>
            <p className="footer-divider"></p>
            <div className="footer-hours">
              <a href="#"><p className="footer-hours-list">monday: <span>8:00am - 7:00pm</span></p></a>
              <a href="#"><p className="footer-hours-list">tuesday: <span>8:00am - 7:00pm</span></p></a>
              <a href="#"><p className="footer-hours-list">wednesday: <span>8:00am - 7:00pm</span></p></a>
              <a href="#"><p className="footer-hours-list">thursday: <span>8:00am - 7:00pm</span></p></a>
              <a href="#"><p className="footer-hours-list">friday: <span>8:00am - 7:00pm</span></p></a>
              <a href="#"><p className="footer-hours-list">saturday: <span>8:00am - 7:00pm</span></p></a>
              <a href="#"><p className="footer-hours-list">sunday: closed</p></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>&copy; copyright 2025 ar-raman sooto autocare</p>
      </div>
    </div>
  )
}

export default Footer
