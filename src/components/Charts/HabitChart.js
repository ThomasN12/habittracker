import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = (props) => {

    // Store checkedIds in props.daterange in an array
    let ids = [];
    for (let i = 0; i < 7; i++){
      if (props.checkedId.includes(props.chartData[i].name)){
        ids.push(i)
      }
    }
  
    // Create a copy of props.chartData and change "checked" properties based on checkedIds
    const data = structuredClone(props.chartData);
    console.log("data la:", data)
    for (let i = 0; i < ids.length; i++){
      data[ids[i]].checked = 1;
    }

    // Format date function
    const dateFilter  = (dates) => {
      let splitDate = dates.split('/')[0]
      let parts = splitDate.split('-')
      let date = parts[0];
      let month = parts[1]
      return date + '-' + month
    }
    
    console.log(props.chartData)

    // Format date on Y-axis
    for (let i = 0; i < 7; i++){
      data[i].name 
      = dateFilter(data[i].name);
    }

    return (
      <React.Fragment>
          <ResponsiveContainer width="97%" height="100%" className="margin__auto">
            <AreaChart
              width={600}
              height={200}
              data={data}
              margin={{
                top: 10,
                right: 50,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid fill='#dc84ff' stroke="#6e0fca"/>
              <XAxis dataKey="name"/>
              <YAxis  tickCount={0}/>
              <Tooltip />
              <Area type="monotone" dataKey="checked" stroke="#ca7bf4" fill="#ffffff" />
            </AreaChart>
          </ResponsiveContainer>
      </React.Fragment>
    );
}
export default Chart;