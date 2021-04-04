import type { Repository } from '../core/app/Repository'
import { Temperature } from '../core/entities/Temperature'
import type { GetLastTemperatureResponse } from './responses'

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

  private async fetch(path: string) {
    const url = this.getUrl(path)
    return fetch(url)
  }

  private getUrl(path: string) {
    return `${this.API_URL}${path}`
  }
}
