import React from 'react'
import { Col,Card,Row } from 'react-bootstrap'
const BookingCarCard = ({item}) => {
  return (
<Col xs="12" sm="6" md="5" lg="4" className="d-flex">
            <Card
                className="my-2"
                style={{
                    width: "100%",
                    height: "300px",
                    borderRadius: "16px",
                    border: "none",
                    backgroundColor: "#FFFFFF",
                    marginLeft:"20px",
                    marginRight:"20px"
                    
                }}>
                <Row className="d-flex justify-content-center px-4 py-3">
                    <Col className=" d-flex justify-content-between">
                        <div className="d-inline CarName">Porshe 718 Cayman S</div>
                        <i class="ri-heart-line IconLove" ></i>
                    </Col>
                </Row>
                <Row className='px-4'>
                  <div className='CarType'>Copue</div>
                </Row>
                  <div className='ImgCard'>

                    <Card.Img style={{width:"260px",height:"135px" }} src={item.imgUrl} />
                  </div>
                    <Card.Body>
                        <Card.Text>
                            <div className="d-flex justify-content-between">
                                <div className="d-flex justify-content-between">
                                 <p className='mx-2 Details'> <i class="ri-user-line DetailsIcon"></i> 4 </p>
                                <p className='Details'><i  class="ri-repeat-line mx-2 DetailsIcon " ></i>Manual</p>
                            </div>
                            <p className="CarPrice">$400/<span style={{color:"#72767C",fontWeight:"normal",fontSize:"16px"}}>d</span></p>
                            </div>
                        </Card.Text>
                    </Card.Body>
              
            </Card>
        </Col>
  )
}

export default BookingCarCard
