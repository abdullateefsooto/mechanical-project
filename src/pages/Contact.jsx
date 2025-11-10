import { IconBrandWhatsapp, IconCarCrane, IconLocation, IconPercentage } from "@tabler/icons-react"
import "../assets/style/contact.css"
import { Link } from "react-router-dom"


const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
  }
  return (
    <div className="contact-section">
      <div className="contact-container">
        
        {/* Contact Info Grid */}
        <div className="contact-grid">
          <div>
            <h3 className="contact-heading">hotlines</h3>
            <div className="contact-info">
              <IconBrandWhatsapp stroke={1.75} className="contact-icon" />
              <div className="contact-info-text">
                <p className="contact-subtext">mobile: <span>08066244696</span></p>
                <p className="contact-subtext">assistance: <span>07063470681</span></p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="contact-heading">Ar-Rahman Sooto Autocare</h3>
            <div className="contact-info">
              <IconLocation stroke={1.75} className="contact-location-icon" />
              <div className="contact-subtext">
                <p>
                  klm. 5 Lasu isheri road Alhaji Ede bus stop, Igando lagos
                  state. inside NNPC Petrol station
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="contact-heading">24/7 assistance</h3>
            <div className="contact-info contact-info-gap">
              <IconCarCrane stroke={1.75} className="contact-crane-icon" />
              <div className="contact-subtext">
                Each customer has an account managers that will respond to your vehicle needs during and outside office hours.
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h1 className="contact-form-title">drop us a message</h1>
          <form onSubmit={handleSubmit}>
            <div className="contact-form-grid">
              <div>
                <input type="text" name="name" id="name" placeholder="your name" className="contact-input" />
                <br />
                <input type="email" name="email" id="email" placeholder="your email" className="contact-input contact-input-gap" />
                <br />
                <input type="tel" name="phone" id="phone" placeholder="your phone" className="contact-input contact-input-gap" />
                <br />
              </div>
              <textarea name="message" id="message" placeholder="message" className="contact-textarea"></textarea>
            </div>
            <button className="contact-btn">send message</button>
          </form>  
        </div>

        {/* Map + Appointment */}
        <div className="contact-map-appointment">
          <div>
            <iframe
              src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.70742910449!2d3.248866975283375!3d6.558568393434587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b855a7edde619%3A0x88b0b0fdd4340650!2sAlhaji%20Ede%20Ave%2C%20Ikotun%2C%20Alimosho%20102213%2C%20Lagos!5e0!3m2!1sen!2sng!4v1736025222869!5m2!1sen!2sng"}
              width={900}
              height={500}
              className="contact-map"
              allowFullScreen=""
              referrerPolicy={"no-referrer-when-downgrade"}>
            </iframe>
          </div>
            
          <div className="appointment-card">
            <IconPercentage stroke={2} className="appointment-icon" />
            <h2 className="appointment-title">
              online <span className="appointment-highlight">appointment</span>
            </h2>
            <p className="appointment-subtext">book your appointment now</p>
            <div className="appointment-btn-wrapper">
              {/* <a href="#" className="appointment-btn">make an appointment</a> */}
              <Link to="/book" className="appointment-btn">make an appointment</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
