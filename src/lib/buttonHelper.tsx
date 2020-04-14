import React, {
  ReactNode,
  isValidElement,
  cloneElement,
  ReactElement,
  Children
} from "react"
import classnames from "classnames"

const wrapSingleChild = (
  node: ReactNode,
  paddingClasses: string
): { clonedElement: ReactNode; isWrapped: boolean } => {
  // ReactNode can be either an element or a text
  // isValidElement return false for the latter
  if (isValidElement(node)) {
    const element = node as ReactElement

    // We want to add padding inside `a` tag to keep the clickable area
    if (element.type === "a") {
      // clone the classes but strip the padding/margins
      // to preserve `flex` & `width` related behaviour etc.
      const originalClasses = (element.props.className || "").split(" ")
      const filteredClasses = originalClasses.filter(
        cls => !cls.match(/^(p|m)(x|y|t|b|l|r)?-/)
      )

      const clone = cloneElement(
        element,
        { className: "w-12/12 hover:opacity-100" },
        <span
          className={classnames(
            "flex items-center justify-center",
            filteredClasses.join(" "),
            paddingClasses
          )}
        >
          {element.props.children}
        </span>
      )

      return { clonedElement: clone, isWrapped: true }
    }

    const { clonedElement, isWrapped } = wrapLink(
      element.props.children,
      paddingClasses
    )
    return {
      clonedElement: cloneElement(element, {}, clonedElement),
      isWrapped
    }
  }

  return { clonedElement: node, isWrapped: false }
}

const wrapMultipleChildren = (
  nodes: ReactNode[],
  paddingClasses: string
): { clonedElement: ReactNode; isWrapped: boolean } => {
  const mappedNodes = nodes.map(element => wrapLink(element, paddingClasses))
  return {
    clonedElement: <>{mappedNodes.map(({ clonedElement }) => clonedElement)}</>,
    isWrapped: mappedNodes.reduce(
      (acc, { isWrapped }) => acc || isWrapped,
      false
    )
  }
}

export const wrapLink = (
  node: ReactNode,
  paddingClasses: string
): { clonedElement: ReactNode; isWrapped: boolean } => {
  const childrenArray = Children.toArray(node)
  if (childrenArray.length <= 1) {
    return wrapSingleChild(childrenArray[0], paddingClasses)
  }

  return wrapMultipleChildren(childrenArray, paddingClasses)
}
