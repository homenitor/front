import { Api } from '../adapters/Api'

export class RepositoryFactory {
  public static getApi(): Api {
    return new Api()
  }
}