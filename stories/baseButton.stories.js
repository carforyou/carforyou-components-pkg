import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import Button from "../src/components/button"

storiesOf("Button", module).add("Big", () => (
  <div className="m-40 font-bold">
    <span>Sizes</span>
    <div className="mb-20">
      <Button>Nachricht senden</Button>
    </div>
    <div className="mb-20 w-3/12">
      <Button>Nachricht senden</Button>
    </div>
    <div className="mb-20 w-3/12">
      <Button large>Nachricht senden</Button>
    </div>

    <div className="mt-40">Colors</div>
    <div className="mb-20">
      <Button>Nachricht senden</Button>
    </div>
    <div className="mb-20">
      <Button teal>Nachricht senden</Button>
    </div>

    <div className="mt-40">States</div>
    <div className="mb-20">
      <Button disabled>Nachricht senden</Button>
    </div>

    <div className="mt-40">Links</div>
    <div className="mb-20">
      <Button onClick={action("link clicked")}>Nachricht senden</Button>
    </div>
    <div className="mb-20">
      <Button>
        <a href="#">Nachricht senden</a>
      </Button>
    </div>
  </div>
))
