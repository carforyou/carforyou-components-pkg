/**
 * Debounces the given callback for a certain delay by wrapping it into a timeout.
 *
 * @note: The given callback has to be bound to a context
 * @note: Currently only supports callbacks with a single parameter (for form input events)
 */
function debounce(
  callback?: (event) => void,
  delay?: number
): (event) => void | undefined {
  if (!callback || !delay) {
    return callback
  }
  let timer
  return (event): void => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      callback.call(null, event)
    }, delay)
  }
}

export default debounce
