import React from 'react'
import { Card ,Col ,Row } from 'react-bootstrap';

import { AreaChart, Area, XAxis, ResponsiveContainer 
     } from 'recharts';


const DashBoardThirdCard = () => {

    const data = [
        {
          name: '7 Am',
          uv: 1000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: '7 am',
          uv: 800,
          pv: 1398,
          amt: 2210,
        },
        {
          name: '9 am',
          uv: 1500,
          pv: 9800,
          amt: 2290,
        },
        {
          name: '11 am',
          uv: 1500,
          pv: 3908,
          amt: 2000,
        },
        {
          name: '1 Pm',
          uv: 2090,
          pv: 4800,
          amt: 2181,
        },
        {
          name: '3 Pm',
          uv: 1390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: '5 Pm',
          uv: 2000,
          pv: 4300,
          amt: 2100,
        },
      ];

    
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
        <p className='StatName'>Car <span className='StatStat'>Statistics</span> </p>
    </Row>

    <Row className='mx-1' >
    <div className='d-flex justify-content-between'>

    <div>
            <p className='StatMiles'>20 February 2022</p>
        </div>

        <div className='d-flex CarStat justify-content-center'>
            <p className='StatDayCar'>Day</p>
            <p className='StatWeekCar'>Week</p>
            <p className='StatMonthCar'>Month</p>
        </div>


    </div>
    </Row>
<ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={200}
          height={60}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
                <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="20%" stopColor="#FF764C" stopOpacity={0.8} />
            <stop offset="80%" stopColor="#FF764C" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="20%" stopColor="#FF764C" stopOpacity={0.8} />
            <stop offset="80%" stopColor="#FF764C" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name"  />
          <Area type="monotone" dataKey="uv" stroke="#FF764C" fill="url(#colorUv)" />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
    </Col>
  )
}

export default DashBoardThirdCard
