import { describe, expect, it } from 'vitest'
import { calculateAge } from '../src/utils'

describe('should', () => {
  it('exported', () => {
    expect(calculateAge('2002-02-09')).toEqual(22)
  })
})
