import React from 'react'
import SideBar from '../Components/SideBar'

import {  Container,  Col, Row} from 'react-bootstrap'
import DashBoardComponent from '../Components/DashBoardComponent'
const DashboardPage = () => {
  return (
    <div>
        <Container fluid className='thisOne'>
            <Row className='py-3'>
                <Col   sm="3" xs="3" md="2" lg="1">
                    <SideBar />
                </Col>

                <Col  sm="9" xs="9" md="10" lg="11">
                     <DashBoardComponent />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default DashboardPage
