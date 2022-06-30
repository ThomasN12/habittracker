import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { RadialBarChart, RadialBar, PolarAngleAxis} from 'recharts';

const Chart = (props) => {
      
      
      const circleSize = 70;

    // Store checkedIds in props.daterange in an array
    let ids = [];
    for (let i = 0; i < 7; i++){
      if (props.checkedId.includes(props.chartData[i].name)){
        ids.push(i)
      }
    }

    const datacircle = [
      { name: 'target', value: ids.length }
    ];
  
    // Create a copy of props.chartData and change "checked" properties based on checkedIds
    const data = structuredClone(props.chartData);
    // console.log("data la:", data)
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
          <ResponsiveContainer width="100%" height="100%" className="margin__auto habit__areachart">
            <AreaChart
              defaultShowTooltip = "true"
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
              {/* <CartesianGrid fill='#dc84ff' stroke="#6e0fca"/> */}
              {/* <CartesianGrid fill='#84b29c' stroke="#3f4460"/> */}
              <XAxis dataKey="name" className='areachart__date'/>
              <YAxis  tickCount={0}/>
              {/* <Tooltip /> */}
              {/* <Area type="monotone" dataKey="checked" stroke="#ca7bf4" fill="#ffffff" /> */}
              <Area type="monotone" dataKey="checked" stroke="#84b29c" fill="#ffffff" />
            </AreaChart>
          </ResponsiveContainer>
        {/* <ResponsiveContainer width = "17%" height = "100%" className="habit__doughnutchart">
          <RadialBarChart 
              // width={circleSize}
              // height={circleSize}
              cx="50%"
              cy="50%"
              innerRadius="70%"
              outerRadius="100%"
              barSize={15}
              data={datacircle}
              startAngle={90}
              endAngle={-270}
            >
            <PolarAngleAxis
              type="number"
              domain={[0, 7]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              background
              clockWise
              dataKey="value"
              cornerRadius={circleSize / 2}
              fill="#ff3a2f"
            />
            <text
              
              textAnchor="middle"
              dominantBaseline="middle"
              className="habit__doughnutchart--label"
            >
              {ids.length}/7
            </text>
          </RadialBarChart>
        </ResponsiveContainer> */}
      </React.Fragment>
    );
}
export default Chart;