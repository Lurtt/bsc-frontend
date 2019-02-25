import { css } from 'styled-components'

const fullWidth = css`
  ${({ fullwidth }) => {
    if (fullwidth) {
      return `width: 100%`
    }
  }};
`

const disableOutline = css`
  :focus {
    outline: 0;
  }
`

export { fullWidth, disableOutline }
