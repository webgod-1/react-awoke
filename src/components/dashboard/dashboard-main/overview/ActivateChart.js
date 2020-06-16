import React, { PureComponent } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const data = [
  {
    name: '12/15/19',
    uv: 1050,
    pv: 860,
  },
  {
    name: '12/16/19',
    uv: 820,
    pv: 831,
  },
  {
    name: '12/17/19',
    uv: 500,
    pv: 802,
  },
  {
    name: '12/18/19',
    uv: 790,
    pv: 773,
  },
  {
    name: '12/19/19',
    uv: 920,
    pv: 744,
  },
  {
    name: '12/20/19',
    uv: 1220,
    pv: 715,
  },
  {
    name: '12/21/19',
    uv: 1000,
    pv: 686,
  },
  {
    name: '12/22/19',
    uv: 420,
    pv: 657,
  },
  {
    name: '12/23/19',
    uv: 480,
    pv: 628,
  },
  {
    name: '12/24/19',
    uv: 520,
    pv: 599,
  },
  {
    name: '12/25/19',
    uv: 700,
    pv: 570,
  },
  {
    name: '12/26/19',
    uv: 400,
    pv: 541,
  },
  {
    name: '12/27/19',
    uv: -20,
    pv: 512,
  },
  {
    name: '12/28/19',
    uv: 480,
    pv: 483,
  },
  {
    name: '12/29/19',
    uv: 660,
    pv: 454,
  },
  {
    name: '12/30/19',
    uv: 290,
    pv: 425,
  },
  {
    name: '12/31/19',
    uv: 580,
    pv: 396,
  },
  {
    name: '1/1/20',
    uv: 760,
    pv: 367,
  },
];

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={-10}
          y={0}
          dy={-5}
          fontSize={11}
          textAnchor="start"
          fill="#666"
          transform="rotate(-45)"
        >
          {payload.value}
        </text>
      </g>
    );
  }
}

export default class ActivateChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <ResponsiveContainer width="100%" height={272}>
        <LineChart
          data={data}
          padding={{
            top: 0,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey="name"
            tickLine={false}
            interval={0}
            padding={{ left: 10, right: 10 }}
            tick={<CustomizedAxisTick />}
          />
          <YAxis
            tickLine={false}
            domain={['dataMin', 'dataMax']}
            ticks={[-200, 0, 200, 400, 600, 800, 1000, 1200, 1400]}
          />
          <YAxis yAxisId="right" orientation="right" />
          <CartesianGrid vertical={false} stroke="#000000" strokeWidth={1} />
          <Tooltip />
          <Line
            type="number"
            dataKey="uv"
            stroke="#4E81BD"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="number"
            dataKey="pv"
            stroke="#C0504D"
            strokeWidth={2}
            strokeDasharray="4 4"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
