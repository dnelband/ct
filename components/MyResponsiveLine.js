import { ResponsiveLine, GrowingLine  } from '@nivo/line';
import { useEffect, useState } from 'react';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.

const MyResponsiveLine = ({ data }) => {

  const arr = [
    {
      id:data.symbol,
      color: "hsl(12, 70%, 50%)",
      data:[
        {
          "x":0,
          "y":data.last
        }
      ]
    }
  ]

  const [dataArray, setDataArray ] = useState(arr)

  useEffect(() => {
    if (data.symbol === dataArray[0].id){
      const lastDataEntryX = dataArray[0].data[dataArray[0].data.length - 1].x;
      const newDataArray = [
        {
          ...dataArray[0],
          data:[
            ...dataArray[0].data,
            {
              x:lastDataEntryX + 1,
              y:data.last
            }
          ]
        }
      ]
      setDataArray(newDataArray)
    } else {
      setDataArray(arr)
    }
  },[data])

  return (

  <div style={{height:"300px",color:"black",backgroundColor:'white'}}>
  <ResponsiveLine
    data={dataArray}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ 
      type: 'linear',
      // min:0,
      // max:100
    }}
    yScale={{
      type: 'linear',
      min: data.low,
      max: data.high,
      stacked: true,
      reverse: false,
    }}
    yFormat=' >-.2f'
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      // legend: 'transportation',
      legendOffset: 36,
      legendPosition: 'middle',
    }}
    markers={[
        {
            axis: 'y',
            value: data.open,
            lineStyle: { stroke: '#b0413e', strokeWidth: 1 },
            // legend: 'open',
            legendPosition: 'bottom-left',
        },
    ]}
    axisLeft={{
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      // legend: 'count',
      legendOffset: -40,
      legendPosition: 'middle',
    }}
    colors={{ scheme: 'purpleRed_green' }}
    enablePoints={false}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor', modifiers: [] }}
    pointLabelYOffset={-12}
    enableArea={true}
    areaOpacity={0.1}
    useMesh={true}
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: 'left-to-right',
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: 'circle',
        symbolBorderColor: 'rgba(0, 0, 0, .5)',
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
  </div>
  )
};

export default MyResponsiveLine;
