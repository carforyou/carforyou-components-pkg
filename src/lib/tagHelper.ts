const hasEventBubbledThroughTag = ({
  tagName,
  target,
  currentTarget,
}: {
  tagName: string
  target: HTMLElement
  currentTarget: HTMLElement
}) => {
  if (target == currentTarget || !target.parentElement) return false
  if (target.tagName.toLowerCase() === tagName.toLowerCase()) return true

  return hasEventBubbledThroughTag({
    tagName,
    target: target.parentElement,
    currentTarget,
  })
}

export { hasEventBubbledThroughTag }
