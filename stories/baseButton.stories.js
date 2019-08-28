import React from 'react'
import { storiesOf } from '@storybook/react'

import BaseButton from "../src/components/baseButton"

storiesOf("Base Button", module)
    .add('Big', () => (
        <div className="m-40 font-bold">
            <span>Normal</span>
            <BaseButton
                className="flex h-50 w-12/12 px-10 py-16 justify-center items-center rounded text-white font-bold leading-xs transition-2 cursor-pointer bg-salmon appearance-none leading-none hover:bg-salmon-dark focus:bg-salmon outline-none"
                children="Nachricht senden"
                loading=""
            />
            <div className="mt-40">Loading</div>
            <BaseButton
                className="flex h-50 w-12/12 px-10 py-16 justify-center items-center rounded text-white font-bold leading-xs transition-2 cursor-not-allowed appearance-none leading-none bg-grey-3"
                children="Nachricht senden"
                loading=" "
            />
        </div>
    ))
    .add('Small', () => (
        <div className="m-40 font-bold">
            <span>Normal</span>
                <BaseButton
                    className="flex h-56 w-12/12 md:w-167 px-10 py-16 justify-center items-center rounded text-white font-bold leading-xs transition-2 cursor-pointer hover:bg-salmon-dark focus:bg-salmon outline-none appearance-none leading-none bg-salmon
                    "
                    children="Anmelden"
                    loading=""
                />
            <div className="mt-40">Loading</div>
                <BaseButton
                    className="flex h-56 w-12/12 md:w-167 px-10 py-16 justify-center items-center rounded text-white font-bold leading-xs transition-2 cursor-not-allowed appearance-none leading-none bg-grey-3"
                    children="Anmelden"
                    loading=" "
                />
        </div>
    ))
