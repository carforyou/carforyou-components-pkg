import { withInfo } from "@storybook/addon-info"

const withInfoStyle = {
    header: {
        h1: {
            fontsize: '24px',
            color: 'salmon',
            fontWeight: '400'
        },
    }
}

export const wInfo = text => withInfo({ inline: true, source: true, styles: withInfoStyle, text: text })
