import React, { createRef, RefObject, FC } from "react"
import { fireEvent, render } from "@testing-library/react"

import useModal from "../useModal"

const modalText = "HERE BE DRAGONS"
const buttonText = "Open modal"

const Component: FC<{ modalContainer?: RefObject<HTMLDivElement }> = ({ modalContainer }) => {
  const { renderModal, openModal } = useModal(() => <div>{modalText}</div>, {
    container: modalContainer
  })

  return (
    <div>
      <button onClick={openModal}>{buttonText}</button>
      {renderModal()}
    </div>
  )
}

const ComponentWithPortal: FC<{}> = () => {
  const portalRef: RefObject<HTMLDivElement> = createRef()

  return (
    <>
      <div data-testid="modal-wrapper" ref={portalRef} />
      <Component modalContainer={portalRef} />
    </>
  )
}

describe("useModal", () => {
  describe("without portal", () => {
    const renderWrapper = () => render(<Component />)

    it("renders correct markup", () => {
      const { container } = renderWrapper()

      expect(container.firstChild).toMatchSnapshot()
    })

    it("opens modal when clicking the button", () => {
      const { getByText } = renderWrapper()

      fireEvent.click(getByText(buttonText))

      expect(getByText(modalText)).toMatchSnapshot()
    })

    it("renders the modal within the container", () => {
      const { getByText, container } = renderWrapper()

      fireEvent.click(getByText(buttonText))

      expect(container).toMatchSnapshot()
    })

    it("closes the modal when pressing ESC", async () => {
      const { getByText, container } = renderWrapper()

      fireEvent.click(getByText(buttonText))
      getByText(modalText)
      fireEvent.keyDown(container, { keyCode: 27 })

      expect(container.firstChild).toMatchSnapshot()
    })
  })

  describe("with a portal", () => {
    const renderWrapper = () => render(<ComponentWithPortal />)

    it("renders the modal within the portal", () => {
      const { getByTestId, getByText } = renderWrapper()

      fireEvent.click(getByText(buttonText))

      expect(getByTestId("modal-wrapper")).toMatchSnapshot()
    })
  })
})
