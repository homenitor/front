import { Service } from '../core/app/Service'
import { RepositoryFactory } from './RepositoryFactory'

export class ServiceFactory {
  public static getService(): Service {
    const repository = RepositoryFactory.getApi()
    return Service.getInstance(repository)
  }
}