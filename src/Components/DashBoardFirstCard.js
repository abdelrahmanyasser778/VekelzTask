import React from 'react'
import { Col,Card,Row } from 'react-bootstrap'
import SemiCircleProgressBar from "react-progressbar-semicircle";
const DashBoardFirstCard = ({item}) => {

  return (

      <Col xs="12" sm="6" md="5" lg="3" className="d-flex " style={{paddingBottom:"15px" ,paddingTop:"15px"}}>
            <Card
                className="my-2 "
                style={{
                    width: "100%",
                    height: "300px",
                    borderRadius: "16px",
                    border: "none",
                    backgroundColor: `${item.background}`,
                    marginLeft:"20px",
                    marginRight:"20px",
                    
                }}>
                <Row className='pt-3'>
                
                <div className='d-flex justify-content-center'>

                <i style={{  borderRadius:"50%" ,fontSize:"15px",backgroundColor:`${item.circleColor}`, padding:"5px 8px" ,color:`${item.color}`}} class={item.icon}></i>
                
                </div>
                </Row>
                <Row className=" justify-content-center px-4 py-3 ">
                    <p className='CartName' style={{textAlign:"center" ,color:`${item.textColor}`}}>{item.Name}</p>
                </Row>
                <Row className='px-5'>
               <div  style={{}} className='d-flex justify-content-center'>

                <SemiCircleProgressBar   percentage={item.Number} showPercentValue  diameter={200} stroke={item.color} background={item.shadowColor}/>
               </div>
                </Row>
           
                

              
            </Card>
        </Col>
  
  )
}

export default DashBoardFirstCard
