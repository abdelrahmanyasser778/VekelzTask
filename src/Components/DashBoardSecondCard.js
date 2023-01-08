import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { BarChart, Bar, XAxis, Tooltip,  ResponsiveContainer } from 'recharts';
import mileStatics from '../Data/mileStatics'

const DashBoardSecondCard = () => {
    
  
  return (
    <Col xs="12" sm="12" md="12" lg="6" className="d-flex " style={{paddingBottom:"15px"}}>
   <Card style={{
    width: "100%",
    height: "320px",
    borderRadius: "16px",
    border: "none",
    backgroundColor: "#fff",
    marginLeft:"20px",
    marginRight:"20px",
    
    
}}>

    <Row className='mx-1 pt-2'>
        <p className='StatName'>Miles <span className='StatStat'>Statistics</span> </p>
    </Row>

    <Row className='mx-1' >
    <div className='d-flex justify-content-between'>

        <div className='d-flex'>
            <p className='StatDay'>Day</p>
            <p className='StatWeek'>Week</p>
            <p className='StatMonth'>Month</p>
        </div>

        <div>
            <p className='StatMiles'>256 Miles</p>
        </div>
    </div>
    </Row>

<ResponsiveContainer width="100%">
      <BarChart data={mileStatics}>
        <XAxis dataKey="name"  />
        <Bar dataKey="mileStats"  fill="#2884ff" barSize={30} />

        <Tooltip wrapperClassName="tooltip__style" cursor={false} />
      </BarChart>
    </ResponsiveContainer>
   </Card>
   </Col>
  )
}

export default DashBoardSecondCard
