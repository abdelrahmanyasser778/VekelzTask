import React from 'react'
import { Col,Card,Row } from 'react-bootstrap'

const DashBoardLastCard = ({item}) => {
  return (
  
      <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
            <Card
                className="my-2"
                style={{
                    width: "100%",
                    height: "300px",
                    borderRadius: "16px",
                    border: "none",
                    backgroundColor: `${item.color}`,
                    marginLeft:"20px",
                    marginRight:"20px"
                    
                }}>
                <Row className="d-flex justify-content-center px-4 py-3">
                    <Col className=" d-flex justify-content">
                        <i class="ri-refresh-line" style={{fontWeight:"bold",fontSize:"18px"}}></i>
                        <div className="d-inline CarName" style={{marginLeft:"10px"}}>{item.percentage}% Recommended</div>
                    </Col>
                </Row>

                  <div className='ImgCard'>

                    <Card.Img style={{width:"260px",height:"135px" }} src={item.imgUrl} />
                  </div>
                  <Row className='px-4 pt-2'>
                  <div className='CarName'>{item.carName}</div>
                </Row>
                    <Card.Body>
                        <Card.Text>
                            <div className="d-flex justify-content-between" style={{color:"#72767C"}}> 
                                <div className="d-flex justify-content-between">
                                  <i class="ri-repeat-line " style={{marginRight:"15px"}}></i> 
                                  <p className='LastP' style={{marginRight:"15px"}}>{item.retweet}k</p>
                                  
                                  <i class="ri-settings-2-line" style={{marginRight:"15px"}}></i>
                                <i class="ri-flashlight-fill"></i>
                            </div>
                            <p className="CarPriceDash">$32/h</p>
                            </div>
                        </Card.Text>
                    </Card.Body>
              
            </Card>
        </Col>
  
  )
}

export default DashBoardLastCard
