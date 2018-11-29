import { pluralise } from './utils'

describe('pluralise function correctly pluralises strings', () => {
  test('a regular verb is pluralised', () => {
    const singular = 'hit'
    const result = pluralise({ singular })
    expect(result).toBe('hits')
  })

  test('an irregular verb is pluralised', () => {
    const singular = 'person'
    const plural = 'people'
    const result = pluralise({ singular, plural })
    expect(result).toBe('people')
  })

  test('count is visible when showCount is provided', () => {
    const singular = 'cat'
    const count = 3
    const showCount = true
    const result = pluralise({ singular, count, showCount })
    expect(result).toBe(`${count} cats`)
  })
})
