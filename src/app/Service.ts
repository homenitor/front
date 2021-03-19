import { Api } from '../adapters/Api'
import { Temperature } from '../entities/Temperature'

export class Service {
  async getLastTemperature(room: string): Promise<Temperature> {
    const api = new Api()
    const response = await api.getLastTemperature(room)

    return new Temperature(response.value)
  }
}