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
    name: '9/22/19',
    uv: -500,
  },
  {
    name: '9/29/19',
    uv: -450,
  },
  {
    name: '10/6/19',
    uv: 680,
  },
  {
    name: '10/13/19',
    uv: -580,
  },
  {
    name: '10/20/19',
    uv: 100,
  },
  {
    name: '10/27/19',
    uv: 60,
  },
  {
    name: '11/3/19',
    uv: 880,
  },
  {
    name: '11/10/19',
    uv: 420,
  },
  {
    name: '11/17/19',
    uv: 500,
  },
  {
    name: '11/24/19',
    uv: -100,
  },
  {
    name: '12/1/19',
    uv: 880,
  },
  {
    name: '12/8/19',
    uv: 400,
  },
  {
    name: '12/15/19',
    uv: 520,
  },
  {
    name: '12/22/19',
    uv: -300,
  },
  {
    name: '12/29/19',
    uv: -800,
  },
  {
    name: '1/5/19',
    uv: -300,
  },
  {
    name: '1/12/19',
    uv: 0,
  },
  {
    name: '1/19/20',
    uv: -120,
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

export default class WeeklyChart extends PureComponent {
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
            tick={<CustomizedAxisTick />}
          />
          <YAxis
            ticks={[
              -1000.0,
              -800.0,
              -600.0,
              -400.0,
              -200.0,
              0,
              200.0,
              400.0,
              600.0,
              800.0,
              1000.0,
            ]}
            textAnchor="end"
            interval={0}
            fontSize={10}
            dx={-10}
          />
          <YAxis yAxisId="right" orientation="right" />
          <CartesianGrid stroke="#000000" strokeWidth={0.5} />
          <Tooltip />
          <Line
            type="number"
            dataKey="uv"
            stroke="#4E81BD"
            strokeWidth={5}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
