/**
 * mocks: `matchMedia` not implemented in JSDOM
 */
window.matchMedia =
  window.matchMedia ||
  (() => {
    return {
      addListener: jest.fn(),
      matches: false,
      removeListener: jest.fn(),
      media: "test",
      onchange: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: () => true, // tslint:disable-line: no-empty
    }
  })

/**
 * mocks `scrollTo` not implemented in JSDOM
 */
window.scrollTo = jest.fn().mockImplementation(() => null)
