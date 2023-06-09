import { validateEmail } from './string'

describe('test function validateEmail', () => {
  it('should return true if email is valid', () => {
    expect(validateEmail('son.tran@gmail.com')).toBe(true)
  })
  it('should return false if email is invalid', () => {
    expect(validateEmail('son.tran@gmail')).toBe(false)
  })
})
