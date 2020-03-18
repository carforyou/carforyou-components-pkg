import React from "react"

import { storiesOf } from "@storybook/react"
import { wInfo } from "./utils"

import useModal from "../src/hooks/useModal"
import Button from "../src/components/button"

function ModalDemo() {
  const { openModal, renderModal } = useModal(() => (
    <div>
      <p className="mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br /> Vestibulum urna augue, consectetur at sapien eu, facilisis
        gravida justo. In euismod velit dui, at porta purus semper nec. Quisque
        lectus libero, pharetra sit amet suscipit placerat, auctor sed mauris.
        Integer imperdiet odio aliquam dolor scelerisque, quis ornare massa
        ultricies. Sed accumsan magna eget nisi laoreet cursus. Aenean ut
        egestas leo, id consectetur neque. Phasellus vel est orci. Nulla sed
        felis et tortor consequat gravida ut id ipsum. Quisque blandit
        sollicitudin ipsum, a condimentum eros varius a.
      </p>
      <p>
        Nam elementum sit amet velit ut euismod. Mauris imperdiet odio mauris,
        ac posuere augue malesuada id. Sed at lectus faucibus, vestibulum quam
        hendrerit, vulputate nibh. Maecenas ut leo id leo tincidunt egestas id
        eget sapien. Morbi quis pharetra mauris. Pellentesque pharetra ante at
        laoreet convallis. Aliquam pharetra at ipsum quis vulputate. In
        convallis eros tellus, ut rhoncus urna euismod ut.
      </p>
    </div>
  ))

  return (
    <>
      <Button onClick={openModal}>Click to open modal</Button>
      {renderModal()}
    </>
  )
}

storiesOf("Modal", module).add(
  "Default",
  wInfo(`
  Description
  ~~~
  function ModalDemo() {
    const { openModal, renderModal } = useModal(() => (
      <div>Modal Content</div>
    ))

    return (
      <>
        <Button onClick={openModal}>Click to open modal</Button>
        {renderModal()}
      </>
    )
  }
  ~~~
  `)(() => {
    return (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Example</div>
        <div className="w-12/12 md:w-3/12">
          <ModalDemo />
        </div>
      </div>
    )
  })
)
