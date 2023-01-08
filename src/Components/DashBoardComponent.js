import React from 'react'

import { Row} from 'react-bootstrap'
import Dashboard from '../Data/Dashboard';
import DashBoardFirstCard from './DashBoardFirstCard';
import DashBoardSecondCard from './DashBoardSecondCard';
import DashBoardThirdCard from './DashBoardThirdCard';
import recommendCars from '../Data/recommendCars';
import DashBoardLastCard from './DashBoardLastCard';
const DashBoardComponent = () => {
    
  return (
  
    <div style={{backgroundColor:"#F5F4F6" ,height:"105%",width:"100%"}}>

        <Row className='justify-content-start'>
        {
            Dashboard?Dashboard.map((item)=>(

                    <DashBoardFirstCard item={item} key={item.id}/>
            )):null
        }
        

        </Row>
        <Row className='justify-content-start'>
     
               

                    <DashBoardSecondCard />
                    <DashBoardThirdCard/>
                
        
        

        </Row>

        <Row className='justify-content-start'>
        {
            recommendCars?recommendCars.map((item)=>(

                    <DashBoardLastCard item={item} key={item.id}/>
            )):null
        }
        

        </Row>

        
    </div>
  )
}

export default DashBoardComponent
