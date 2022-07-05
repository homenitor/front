import { Sample, SampleType } from '../domain/sample'

export const temperature_samples: Sample[] = [
  { type: SampleType.TEMPERATURE, value: 22, timestamp: new Date('2020-01-01T00:00:00.000Z').getTime() },
  { type: SampleType.TEMPERATURE, value: 22.1, timestamp: new Date('2020-01-01T00:01:00.000Z').getTime() },
  { type: SampleType.TEMPERATURE, value: 22.2, timestamp: new Date('2020-01-01T00:02:00.000Z').getTime() },
  { type: SampleType.TEMPERATURE, value: 22.3, timestamp: new Date('2020-01-01T00:03:00.000Z').getTime() },
  { type: SampleType.TEMPERATURE, value: 22.5, timestamp: new Date('2020-01-01T00:04:00.000Z').getTime() },
  { type: SampleType.TEMPERATURE, value: 21.6, timestamp: new Date('2020-01-01T00:05:00.000Z').getTime() },
  { type: SampleType.TEMPERATURE, value: 21.6, timestamp: new Date('2020-01-01T00:06:00.000Z').getTime() },
  { type: SampleType.TEMPERATURE, value: 21.7, timestamp: new Date('2020-01-01T00:07:00.000Z').getTime() },
  { type: SampleType.TEMPERATURE, value: 21.8, timestamp: new Date('2020-01-01T00:08:00.000Z').getTime() },
  { type: SampleType.TEMPERATURE, value: 21.8, timestamp: new Date('2020-01-01T00:09:00.000Z').getTime() },
  { type: SampleType.TEMPERATURE, value: 21.8, timestamp: new Date('2020-01-01T00:10:00.000Z').getTime() },
  { type: SampleType.TEMPERATURE, value: 21.7, timestamp: new Date('2020-01-01T00:11:00.000Z').getTime() },
  { type: SampleType.TEMPERATURE, value: 21.8, timestamp: new Date('2020-01-01T00:12:00.000Z').getTime() },
  { type: SampleType.TEMPERATURE, value: 21.2, timestamp: new Date('2020-01-01T00:13:00.000Z').getTime() },
  { type: SampleType.TEMPERATURE, value: 20, timestamp: new Date('2020-01-01T00:14:00.000Z').getTime() },
  { type: SampleType.TEMPERATURE, value: 19.5, timestamp: new Date('2020-01-01T00:15:00.000Z').getTime() },
  { type: SampleType.TEMPERATURE, value: 19.5, timestamp: new Date('2020-01-01T00:16:00.000Z').getTime() },
  { type: SampleType.TEMPERATURE, value: 18.0, timestamp: new Date('2020-01-01T00:17:00.000Z').getTime() },
  { type: SampleType.TEMPERATURE, value: 10.2, timestamp: new Date('2020-01-01T00:18:00.000Z').getTime() },
]
