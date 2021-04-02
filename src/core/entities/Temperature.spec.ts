import { Temperature } from './Temperature'


describe('Temperature', () => {
  describe('Value', () => {
    it('should return value of temperature', () => {
      const value = 12
      const temperature = new Temperature(value)

      expect(temperature.Value()).toBe(value)
    })
  })
})
