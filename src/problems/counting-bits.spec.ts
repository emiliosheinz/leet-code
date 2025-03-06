import { countBits } from "./counting-bits";

const testData = [
  {
    input: 2,
    output: [0, 1, 1]
  },
  {
    input: 5,
    output: [0, 1, 1, 2, 1, 2]
  }
]

describe("counting-bits", () => {
  test.each(testData)(
    "countBits($input) should return $output",
    ({ input, output }) => {
      expect(countBits(input)).toEqual(output);
    }
  )
})
