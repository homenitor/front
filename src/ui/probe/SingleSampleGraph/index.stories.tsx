import { SingleSampleGraph } from './index'
import { temperature_samples } from '../../../sample_data/temperatures'

export default {
  title: 'SingleSampleGraph',
  component: SingleSampleGraph
}

const Template = (args: any) => <SingleSampleGraph {...args} />

const formatTimestamp = (timestamp:number): string => {
  console.log(timestamp)
  const date = new Date(timestamp)
  return `${date.getMinutes()}`
}

export const FirstStory = {
  args: {
    data: temperature_samples.map(sample => ({
      x_value: formatTimestamp(sample.timestamp),
      y_value: sample.value
    })),
    name: 'Temperature',
  }
}
