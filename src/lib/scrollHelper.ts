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
        block: "start",
      })
    }, timeout)
  }
}

const getScrollBarWidth = () => {
  const documentWidth = document.documentElement.clientWidth
  return Math.abs(window.innerWidth - documentWidth)
}

const hasOverflow = () => {
  return getScrollBarWidth() > 0
}

export const disableScrollOnBody = () => {
  if (hasOverflow()) {
    document.body.style.paddingRight = `${getScrollBarWidth()}px`
  }
  document.body.classList.add("preventScrolling")
}

export const enableScrollOnBody = () => {
  document.body.classList.remove("preventScrolling")
  document.body.style.paddingRight = ""
}
