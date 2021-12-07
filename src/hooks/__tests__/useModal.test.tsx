import React, { createRef, FC, RefObject } from "react"
import { fireEvent, render, screen } from "@testing-library/react"

import useModal from "../useModal"

const modalText = "HERE BE DRAGONS"
const buttonText = "Open modal"

const Component: FC<{
  modalContainer?: RefObject<HTMLDivElement>
  onClose?: () => void
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

const ComponentWithPortal: FC = () => {
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
      renderWrapper()

      fireEvent.click(screen.getByText(buttonText))

      expect(screen.getByText(modalText)).toMatchSnapshot()
    })

    it("renders the modal within the container", () => {
      const { container } = renderWrapper()

      fireEvent.click(screen.getByText(buttonText))

      expect(container).toMatchSnapshot()
    })

    it("closes the modal when pressing ESC", async () => {
      const { container } = renderWrapper()

      fireEvent.click(screen.getByText(buttonText))
      screen.getByText(modalText)
      fireEvent.keyDown(container, { keyCode: 27 })

      expect(container.firstChild).toMatchSnapshot()
      expect(container).not.toContain(modalText)
    })

    it("calls the onClose function when pressing ESC", async () => {
      const onCloseMock = jest.fn()
      const { container } = renderWrapper(onCloseMock)

      fireEvent.click(screen.getByText(buttonText))
      screen.getByText(modalText)
      fireEvent.keyDown(container, {
        keyCode: 27,
      })

      expect(onCloseMock).toBeCalledTimes(1)
    })

    it("calls the onClose function the close button is clicked", async () => {
      const onCloseMock = jest.fn()
      renderWrapper(onCloseMock)

      fireEvent.click(screen.getByText(buttonText))
      screen.getByText(modalText)
      fireEvent.click(screen.getByTestId("modal-close"))

      expect(onCloseMock).toBeCalledTimes(1)
    })

    it("calls the onClose function when the overlay is clicked", async () => {
      const onCloseMock = jest.fn()
      renderWrapper(onCloseMock)
      fireEvent.click(screen.getByText(buttonText))
      screen.getByText(modalText)
      fireEvent.click(screen.getByTestId("modal-overlay"))

      expect(onCloseMock).toBeCalledTimes(1)
    })
  })

  describe("with a portal", () => {
    const renderWrapper = () => render(<ComponentWithPortal />)

    it("renders the modal within the portal", () => {
      renderWrapper()

      fireEvent.click(screen.getByText(buttonText))

      expect(screen.getByTestId("modal-wrapper")).toMatchSnapshot()
    })
  })
})
