describe('First passing testing with jest', () => {
  test('adds 1+2 equal 3', () => {
    expect(1+2).toBe(3)
  })
})


describe('First failing testing with jest', () => {
  test('adds 1+1 equal 3', () => {
    expect(1+1).toBe(3)
  })
})
