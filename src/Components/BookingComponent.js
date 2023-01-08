import React from 'react'
import {  Row} from 'react-bootstrap'
import BookingCarCard from './BookingCarCard'
import Cars from '../Data/Cars'
const BookingComponent = () => {
  return (
    <div style={{backgroundColor:"#F5F4F6" ,height:"105%",width:"100%"}}>
    
      <div className='BookingName'>Booking</div>
      <div className="SelectOption">
          <div className="SelectTheOption">
            <select>
              <option value="New">New</option>
              <option value="Popular">Popular</option>
              <option value="Upcoming">Upcoming</option>
            </select>
            <select style={{marginLeft:"15px"}}>
              <option value="toyota">Toyota</option>
              <option value="bmw">Bmw</option>
              <option value="audi">Audi</option>
            </select>

          </div>
        
          <div className='d-flex mx-3'>
            <div className='myIcon'><i class="ri-apps-2-line"></i></div>
            <div className='Icon2'><i class="ri-equalizer-line"></i></div>
          </div>

        </div>
        <Row className='justify-content-start'>
        {
            Cars?Cars.map((item)=>(

                    <BookingCarCard item={item} key={item.id}/>
            )):null
        }
        </Row>
    </div>
  )
}

export default BookingComponent
