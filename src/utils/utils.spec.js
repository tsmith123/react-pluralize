import { pluralize } from './utils'

describe('pluralize function correctly pluralizes strings', () => {
  test('a regular verb is pluralized', () => {
    const singular = 'hit'
    const result = pluralize({ singular })
    expect(result).toBe('hits')
  })

  test('an irregular verb is pluralized', () => {
    const singular = 'person'
    const plural = 'people'
    const result = pluralize({ singular, plural })
    expect(result).toBe('people')
  })

  test('count is visible when showCount is provided', () => {
    const singular = 'cat'
    const count = 3
    const showCount = true
    const result = pluralize({ singular, count, showCount })
    expect(result).toBe(`${count} cats`)
  })
})
