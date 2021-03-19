import type { GetLastTemperatureResponse } from './responses'


export class Api {
  public async getLastTemperature(room: string): Promise<GetLastTemperatureResponse> {
    const response = await fetch(`http://localhost:3000/temperatures/${room}`)

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`
      throw new Error(message)
    }

    return response.json()
  }
}