
const calculator = require('./first')

test('check correct of the function', () => {
  expect(calculator(4,4, 'adding')).toBe(8)
  expect(calculator(4,4, 'subtraction')).toBe(0)
  expect(calculator(4,4, 'multiplication')).toBe(16)
  expect(calculator(4,4, 'division')).toBe(1)
  expect(calculator(4,4, 'square')).toBe(16)
})