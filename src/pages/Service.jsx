import diagnosis from '../assets/image/diagnotics.jpg'
import oil from '../assets/image/oil.jpg'
import air from '../assets/image/air.jpg'
import suspension from '../assets/image/suspension.jpg'
import cylinder from '../assets/image/cylinder.jpg'
import brake from '../assets/image/brake.jpg'
import { IconChevronRight } from '@tabler/icons-react'
import "../assets/style/service.css"


const Service = () => {
  return (
    <div className="service-section">
      <h1 className="service-title">our services</h1>
      
      <div>
        <div className="service-row">
          <div className="service-card">
            <img className="service-image" src={diagnosis} alt="" />
            <div className="service-card-footer">
              <p className="service-text">engine diagnostics</p>
              <a href="#"><IconChevronRight className="service-icon service-icon-diag" /></a>
            </div>
          </div>

          <div className="service-card">
            <img className="service-image" src={oil} alt="" />
            <div className="service-card-footer service-footer-gap">
              <p className="service-text">oil services</p>
              <a href="#"><IconChevronRight className="service-icon service-icon-oil" /></a>
            </div>
          </div>

          <div className="service-card">
            <img className="service-image" src={air} alt="" />
            <div className="service-card-footer service-footer-gap">
              <p className="service-text">car air conditional</p>
              <a href="#"><IconChevronRight className="service-icon service-icon-air" /></a>
            </div>
          </div>
        </div>

        <div className="service-row service-row-bottom">
          <div className="service-card">
            <img className="service-image" src={suspension} alt="" />
            <div className="service-card-footer">
              <p className="service-text">suspension</p>
              <a href="#"><IconChevronRight className="service-icon service-icon-susp" /></a>
            </div>
          </div>

          <div className="service-card">
            <img className="service-image" src={cylinder} alt="" />
            <div className="service-card-footer service-footer-gap">
              <p className="service-text">engine</p>
              <a href="#"><IconChevronRight className="service-icon service-icon-engine" /></a>
            </div>
          </div>

          <div className="service-card">
            <img className="service-image" src={brake} alt="" />
            <div className="service-card-footer service-footer-gap">
              <p className="service-text service-text-highlight">brake</p>
              <a href="#"><IconChevronRight className="service-icon service-icon-brake" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
