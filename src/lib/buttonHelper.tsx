import React, {
  ReactNode,
  isValidElement,
  cloneElement,
  ReactElement,
  Children,
  Fragment,
} from "react"
import classnames from "classnames"

const wrapSingleChild = (
  node: ReactNode,
  paddingClasses: string,
  renderChildren: (children: ReactNode) => ReactNode
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
        (cls) => !cls.match(/^(p|m)(x|y|t|b|l|r)?-/)
      )

      const clone = cloneElement(
        element,
        { className: "w-12/12 hover:opacity-100 flex flex-col" },
        <span
          className={classnames(
            "flex items-center justify-center",
            filteredClasses.join(" "),
            paddingClasses
          )}
        >
          {renderChildren(element.props.children)}
        </span>
      )

      return { clonedElement: clone, isWrapped: true }
    }

    const { clonedElement, isWrapped } = wrapLinkNode(
      element.props.children,
      paddingClasses,
      renderChildren
    )
    return {
      clonedElement: cloneElement(element, {}, clonedElement),
      isWrapped,
    }
  }

  return { clonedElement: node, isWrapped: false }
}

const wrapMultipleChildren = (
  nodes: ReactNode[],
  paddingClasses: string,
  renderChildren: (children: ReactNode) => ReactNode
): { clonedElement: ReactNode; isWrapped: boolean } => {
  const mappedNodes = nodes.map((element) =>
    wrapLinkNode(element, paddingClasses, renderChildren)
  )
  return {
    clonedElement: (
      <>
        {mappedNodes.map(({ clonedElement }, index) => (
          <Fragment key={index}>{clonedElement}</Fragment>
        ))}
      </>
    ),
    isWrapped: mappedNodes.reduce(
      (acc, { isWrapped }) => acc || isWrapped,
      false
    ),
  }
}

const wrapLinkNode = (
  node: ReactNode,
  paddingClasses: string,
  renderChildren: (children: ReactNode) => ReactNode
): { clonedElement: ReactNode; isWrapped: boolean } => {
  const childrenArray = Children.toArray(node)
  if (childrenArray.length <= 1) {
    return wrapSingleChild(childrenArray[0], paddingClasses, renderChildren)
  }

  return wrapMultipleChildren(childrenArray, paddingClasses, renderChildren)
}

export const wrapLink = (
  node: ReactNode,
  paddingClasses: string,
  renderChildren: (children: ReactNode) => ReactNode = (children) => children
): { clonedElement: ReactNode; isWrapped: boolean } => {
  const { clonedElement, isWrapped } = wrapLinkNode(
    node,
    paddingClasses,
    renderChildren
  )

  return isWrapped
    ? { clonedElement, isWrapped }
    : { clonedElement: renderChildren(clonedElement), isWrapped }
}
