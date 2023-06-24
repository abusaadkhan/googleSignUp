import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, CartesianAxis } from 'recharts'

const ActivityChart = () => {

    const datanew = [
        {
            week:'',
            userActivity: 100,
            guestActivity: 200 
        },
        {
            week: 'week1',
            userActivity: 410,
            guestActivity: 395
        },
        {
            week: 'week2',
            userActivity: 150,
            guestActivity: 210
        },
        {
            week: 'week3',
            userActivity: 450,
            guestActivity: 300
        },
        {
            week: 'week4',
            userActivity: 190,
            guestActivity: 220
        },
        {
            week: '',
            userActivity: 430,
            guestActivity: 260
        },
    ]


    return(
        <ResponsiveContainer width="100%"  >
            <LineChart width="100%" height="100%" data={datanew} margin={{ top: 0, right: 0, left: -20, bottom: 25 }}>
                <CartesianGrid vertical={false}/>
                <XAxis dataKey="week" axisLine={false} tickLine={false} />
                <YAxis tickCount={6} axisLine={false} tickLine={false} ticks={[0,100,200,300,400,500]} />
                <Tooltip/>
                
                <Line type="monotone" dataKey="userActivity" stroke="#9BDD7C" dot={false} strokeWidth={3} />
                <Line type="monotone" dataKey="guestActivity" stroke="#E9A0A0" dot={false} strokeWidth={3} />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default ActivityChart




// import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend
// } from "recharts";

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100
//   }
// ];

// export default function ActivityChart() {
//   return (
//     <LineChart
//       width={500}
//       height={300}
//       data={data}
//       margin={{
//         top: 5,
//         right: 30,
//         left: 20,
//         bottom: 5
//       }}
//     >
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="name" />
//       <YAxis />
//       <Tooltip />
//       <Legend />
//       <Line
//         type="monotone"
//         dataKey="pv"
//         stroke="#8884d8"
//         activeDot={{ r: 8 }}
//       />
//       <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//     </LineChart>
//   );
// }


  
