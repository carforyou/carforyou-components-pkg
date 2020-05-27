/**
 * mocks: `matchMedia` not implemented in JSDOM
 */
window.matchMedia =
  window.matchMedia ||
  (() => {
    return {
      addListener: () => {}, // tslint:disable-line: no-empty
      matches: false,
      removeListener: () => {}, // tslint:disable-line: no-empty
      media: "test",
      onchange: () => {}, // tslint:disable-line: no-empty
      addEventListener: () => {}, // tslint:disable-line: no-empty
      removeEventListener: () => {}, // tslint:disable-line: no-empty
      dispatchEvent: () => true, // tslint:disable-line: no-empty
    }
  })

/**
 * mocks `scrollTo` not implemented in JSDOM
 */
window.scrollTo = jest.fn().mockImplementation(() => null)
