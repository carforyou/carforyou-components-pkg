import React, { createRef, RefObject, FC } from "react"
import { fireEvent, render } from "@testing-library/react"

import useModal from "../useModal"

const modalText = "HERE BE DRAGONS"
const buttonText = "Open modal"

const Component: FC<{
  modalContainer?: RefObject<HTMLDivElement>
  onClose?: () => {}
}> = ({ modalContainer, onClose = null }) => {
  const { renderModal, openModal } = useModal(() => <div>{modalText}</div>, {
    container: modalContainer,
    onClose,
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
    const renderWrapper = (onClose = null) =>
      render(<Component onClose={onClose} />)

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
      expect(container).not.toContain(modalText)
    })

    it("calls the onClose function when pressing ESC", async () => {
      const onCloseMock = jest.fn()
      const { getByText, container } = renderWrapper(onCloseMock)

      fireEvent.click(getByText(buttonText))
      getByText(modalText)
      fireEvent.keyDown(container, {
        keyCode: 27,
      })

      expect(onCloseMock).toBeCalledTimes(1)
    })

    it("calls the onClose function the close button is clicked", async () => {
      const onCloseMock = jest.fn()
      const { getByText, getByTestId } = renderWrapper(onCloseMock)

      fireEvent.click(getByText(buttonText))
      getByText(modalText)
      fireEvent.click(getByTestId("modal-close"))

      expect(onCloseMock).toBeCalledTimes(1)
    })

    it("calls the onClose function when the overlay is clicked", async () => {
      const onCloseMock = jest.fn()
      const { getByText, getByTestId } = renderWrapper(onCloseMock)
      fireEvent.click(getByText(buttonText))
      getByText(modalText)
      fireEvent.click(getByTestId("modal-overlay"))

      expect(onCloseMock).toBeCalledTimes(1)
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
