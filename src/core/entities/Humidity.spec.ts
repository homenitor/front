import { Humidity } from './Humidity'

describe('Humidity', () => {
  describe('Value', () => {
    it('should return value of humidity', () => {
      const value = 12
      const humidity = new Humidity(value)

      expect(humidity.Value()).toBe(value)
    })
  })
})
