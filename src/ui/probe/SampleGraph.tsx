import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

import { Sample } from '../../domain/sample'

interface Props {
  data: Sample[]
}

export const SampleGraph = ({ data }: Props) => {
  return (<LineChart width={400} height={400} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey={'timestamp'} />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="value" stroke="#8884d8" />
  </LineChart>)
}
