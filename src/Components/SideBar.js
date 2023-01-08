import React from 'react'

import { Link } from 'react-router-dom'
const SideBar = () => {
  return (
    <div className='SideBar'>
    <div className=''>
    <Link to="/Dashboard" style={{textDecoration: "none" ,color:"black"}}>
        <div className='d-flex'>
        <i class="ri-apps-2-line" style={{marginRight:"5px"}}></i>
        <p> Dashbord</p>
        </div>
    </Link>
    <div className='d-flex'>
        <i class="ri-compasses-2-line" style={{marginRight:"5px"}}></i>
        <p> Assets</p>
        </div>
        <Link to="/" style={{textDecoration: "none" ,color:"black"}}>

        <div className='d-flex'>
        <i class="ri-car-line" style={{marginRight:"5px"}}></i>
        <p> Booking</p>
        </div>
    </Link>
        
    <div className='d-flex'>
        <i class="ri-shopping-bag-line" style={{marginRight:"5px"}}></i>
        <p> Sell Cars</p>
        </div>
        <div className='d-flex'>
        <i class="ri-shopping-cart-line" style={{marginRight:"5px"}}></i>
        <p> Buy Cars</p>
        </div>
        <div className='d-flex'>
        <i class="ri-loader-2-line" style={{marginRight:"5px"}}></i>
        <p> Services</p>
        </div>
        <div className='d-flex'>
        <i class="ri-calendar-2-line" style={{marginRight:"5px"}}></i>
        <p> Calender</p>
        </div>
        <div className='d-flex'>
        <i class="ri-question-answer-line" style={{marginRight:"5px"}}></i>
        <p> Messages</p>
        </div>
        
    </div>
    <div>
    <div className='d-flex'>
        <i class="ri-settings-2-line" style={{marginRight:"5px"}}></i>
        <p>Settings</p>
        </div>
        <div className='d-flex'>
        <i class="ri-logout-box-line" style={{marginRight:"5px"}}></i>
        <p> Log Out</p>
        </div>
    </div>
   
  
    

    </div>

  )
}

export default SideBar
