export const getClosestElement = (element, query) =>
  element.closest ? element.closest(query) : element
