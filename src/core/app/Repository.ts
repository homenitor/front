import type { Humidity } from '../entities/Humidity'
import type { Temperature } from '../entities/Temperature'

export interface Repository {
  getLastTemperature(room: string): Promise<Temperature>
  getLastHumidity(room: string): Promise<Humidity>
}
