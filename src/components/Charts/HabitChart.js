import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



const Chart = () => {
    const data = [
        {
          name: '19-Jun',
          checked: 1
        },
        {
          name: '20-Jun',
          checked: 1
        },
        {
          name: '21-Jun',
          checked: 0
        },
        {
          name: '22-Jun',
          checked: 1
        },
        {
          name: '23-Jun',
          checked: 0
        },
        {
          name: '24-Jun',
          checked: 0
        },
        {
          name: '25-Jun',
          checked: 1
        },
      ];

    return (
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
          <Area type="monotone" dataKey="checked" stroke="#ca7bf4" fill="#ca7bf4" />
        </AreaChart>
      </ResponsiveContainer>
    );
}
export default Chart;