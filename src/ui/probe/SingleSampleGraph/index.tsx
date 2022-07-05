import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

interface Point {
  x_value: unknown
  y_value: unknown
}

interface Props {
  data: Point[]
  name: string
  width: number
  height: number
}

export const SingleSampleGraph = ({ data, height, width, name }: Props) => {
  return (<LineChart width={width ?? 800} height={height ?? 300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey={'x_value'} />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="y_value" name={name} stroke="#8884d8" />
  </LineChart>)
}
