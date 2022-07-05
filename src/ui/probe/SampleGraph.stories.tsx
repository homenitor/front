import { SampleGraph } from './SampleGraph'
import { temperature_samples } from '../../sample_data/temperatures'

export default {
  title: 'SampleGraph',
  component: SampleGraph
}

const Template = (args: any) => <SampleGraph {...args} />

export const FirstStory = {
  args: {
    data: temperature_samples
  }
}
