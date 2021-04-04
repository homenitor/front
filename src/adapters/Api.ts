import type { Repository } from '../core/app/Repository'
import { Humidity } from '../core/entities/Humidity'
import { Temperature } from '../core/entities/Temperature'
import type { GetLastHumidityResponse, GetLastTemperatureResponse } from './responses'

export class Api implements Repository {
  private API_URL = globalThis.API_URL
  private static instance: Api

  public static getInstance(): Api {
    if (!this.instance) {
      this.instance = new Api()
    }

    return this.instance
  }

  public async getLastTemperature(room: string): Promise<Temperature> {
    const path = `/temperatures/${room}`
    const response = await this.fetch(path)

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`
      throw new Error(message)
    }

    const temperatureResponse: GetLastTemperatureResponse = await response.json()
    return new Temperature(temperatureResponse.value)
  }

  public async getLastHumidity(room: string): Promise<Humidity> {
    const path = `/humidities/${room}`
    const response = await this.fetch(path)

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`
      throw new Error(message)
    }

    const humidityResponse: GetLastHumidityResponse = await response.json()
    return new Humidity(humidityResponse.value)
  }

  private async fetch(path: string) {
    const url = this.getUrl(path)
    return fetch(url)
  }

  private getUrl(path: string) {
    return `${this.API_URL}${path}`
  }
}
