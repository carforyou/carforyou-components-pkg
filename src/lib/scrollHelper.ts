export const scrollIntoViewIfMobile = (
  target: HTMLElement | Element,
  timeout = 300,
  onlyAndroid = true
) => {
  const shouldScroll = onlyAndroid
    ? /(android)/i.test(navigator.userAgent)
    : true
  if (
    window.matchMedia("(max-width: 991px)").matches &&
    target &&
    shouldScroll
  ) {
    setTimeout(() => {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }, timeout)
  }
}
