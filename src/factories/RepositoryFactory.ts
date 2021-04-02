import { Api } from '../adapters/Api'
import type { Repository } from '../core/app/Repository'

export class RepositoryFactory {
  public static getApi(): Repository {
    return new Api()
  }
}
