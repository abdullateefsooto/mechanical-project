import { NavLink } from 'react-router-dom'
import arr from '../assets/image/arr-removebg-preview.png'
import '../assets/style/navBar.css'

const NavBar = () => {
  return (
    <div>
        <div className='nav'>
          <div >
            <img className='arr' src={arr} alt="Ar-rahman sooto automobile"/>
          </div>
            <ul className='links'>
              <li>
                <NavLink className='a' to={"/"}>home</NavLink>
              </li>
              <li>
                <NavLink className='a' to={"about"}>about</NavLink>
              </li>
              <li>
                <NavLink className='a' to={"service"}>services</NavLink>
              </li>
              <li>
                  <NavLink className='a' to={"contact"}>contact</NavLink>
              </li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar