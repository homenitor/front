import type { Repository } from './Repository'
import { Service } from './Service'

jest.mock

describe('Service', () => {
  const lastTemperature = 12
  const lastHumidity = 80
  let repository: Mock<Repository>

  beforeEach(() => {
    repository = {
      getLastTemperature: jest.fn().mockResolvedValue(lastTemperature),
      getLastHumidity: jest.fn().mockResolvedValue(lastHumidity)
    }

  })

  describe('getInstance', () => {
    it('should get the same instance when getInstance is called twice', () => {
      const firstCallService = Service.getInstance(repository)
      const secondCallService = Service.getInstance(repository)

      expect(firstCallService).toBe(secondCallService)
    })
  })

  describe('getLastTemperature', () => {
    it('should return last temperature', async () => {
      const service = Service.getInstance(repository)

      const result = await service.getLastTemperature('room')

      expect(result).toBe(lastTemperature)
    })
  })

  describe('getLastHumidity', () => {
    it('should return last humidity', async () => {
      const service = Service.getInstance(repository)

      const result = await service.getLastHumidity('room')

      expect(result).toBe(lastHumidity)
    })
  })
})
