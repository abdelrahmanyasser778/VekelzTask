import React from 'react'
import logo from '../Images/logo.jpg'
import man from '../Images/portrait-handsome-european-male-student-has-gentle-smile-face-happy-hear-pleasant-news-stands-delighted-wears-round-spectacles-orange-jumper.jpg'
import notify from '../Images/notification-2-line (2).png'
import { Navbar } from 'react-bootstrap'

const NavBar = () => {
  return (
   
    <Navbar sticky="top" className='NavBar'>
  
      <Navbar.Brand href="#home">
      <div className='Logo'>
                    <img className="LogoImage" src={logo} alt=""/>
                    <p className='LogoName mt-3 '>Motiv.</p>
        </div>
      </Navbar.Brand>
      <div className="search__box">
                    
                    <span>
                        <i class="ri-search-line"></i>
                    </span>
                    <input type="text" placeholder="  Search or type" />
                    </div>

      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
      <div className='IconAndPhoto me-4'>
            <img src={notify} alt="hah " className=' Notify me-4' />
                <img className='ManPhoto' src={man} alt=""/>
            </div>

      </Navbar.Collapse>
    
  </Navbar>
    
            
  
  )
}

export default NavBar
