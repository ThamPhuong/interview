import React from 'react';
import { Line } from '@ant-design/charts';


const config = {
  xField: 'date',
  yField: 'value',
  seriesField: 'type',
  xAxis: {
    type: 'time',
  },
  yAxis: {
    label: {
      formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
    },
  }
};

export default function LineChart(props) {
  const { data } = props
  return <Line {...config} data={data}/>
}
