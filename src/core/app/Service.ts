import type { Humidity } from '../entities/Humidity'
import type { Temperature } from '../entities/Temperature'
import type { Repository } from './Repository'

export class Service {
  private static instance: Service

  public constructor(
    private repository: Repository,
  ) { }

  public static getInstance(repository: Repository): Service {
    if (!this.instance) {
      this.instance = new Service(repository)
    }

    return this.instance
  }

  public async getLastTemperature(room: string): Promise<Temperature> {
    return this.repository.getLastTemperature(room)
  }

  public async getLastHumidity(room: string): Promise<Humidity> {
    return this.repository.getLastHumidity(room)
  }
}
