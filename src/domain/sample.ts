export enum SampleType {
  TEMPERATURE = 'temperature',
  HUMIDITY = 'humidity'
}

export interface Sample {
  timestamp: number;
  type: SampleType;
  value: number;
}
