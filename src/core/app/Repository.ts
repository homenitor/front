import type { Temperature } from '../entities/Temperature'

export interface Repository {
  getLastTemperature(room: string): Promise<Temperature>
}