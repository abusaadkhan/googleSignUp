import React from "react";
import { PieChart, Pie, Cell } from 'recharts'


const ProductChart = ({topProductsData}) => {
    return(
        <div>
        <PieChart width={730} height={250} margin={{ top: -100, right: 550, bottom: 0, left: 0 }} >
            <Pie data={topProductsData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} fill="#8884d8" >
                {
                    topProductsData.map((entry,index)=>(
                        <Cell key={`cell-${index}`} fill={entry.color}  />
                    ))
                }

            </Pie>
            
        </PieChart>
        </div>
    )
}

export default ProductChart