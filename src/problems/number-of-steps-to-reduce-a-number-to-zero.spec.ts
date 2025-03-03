import { numberOfSteps } from "./number-of-steps-to-reduce-a-number-to-zero"

const testData = [
  {
    input: 14,
    expected: 6
  },
  {
    input: 8,
    expected: 4
  },
  {
    input: 123,
    expected: 12
  }
]

describe('number-of-steps-to-reduce-a-number-to-zero', () => {
  test.each(testData)('numberOfSteps($input) should return $expected', ({ input, expected }) => {
    expect(numberOfSteps(input)).toBe(expected)
  })
})
