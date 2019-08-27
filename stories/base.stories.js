import React from 'react'
import { storiesOf } from '@storybook/react'

import BaseButton from "../src/components/base"

storiesOf("Base Button", module)
    .add('Big', () => (
        <div className="m-40 font-bold">
            <span>Normal</span>
            <BaseButton
                className="py-16 button appearance-none leading-none w-12/12"
                children="Nachricht senden"
                loading=""
            />
            <div className="mt-40">Loading</div>
            <BaseButton
                className="py-16 button appearance-none leading-none w-12/12"
                children="Nachricht senden"
                loading=" "
            />
        </div>
    ))
    .add('Small', () => (
        <div className="m-40 font-bold">
            <span>Normal</span>
                <BaseButton
                    className="py-16 button appearance-none leading-none h-56 w-12/12 md:w-167"
                    children="Anmelden"
                    loading=""
                />
            <div className="mt-40">Loading</div>
                <BaseButton
                    className="py-16 button appearance-none leading-none h-56 w-12/12 md:w-167"
                    children="Anmelden"
                    loading=" "
                />
        </div>
    ))
    