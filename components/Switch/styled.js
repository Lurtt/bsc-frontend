import styled, { css } from 'styled-components'

const activeButton = css`
  ${({ on }) => {
    if (on) {
      return `
        &:active {
          box-shadow: none;
        }

        &:active::after {
          margin-left: -0.6em;
        }
      `
    }
  }};
`

const Input = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;
`

const Button = styled.button.attrs({
  type: 'button',
  'aria-label': 'Toggle',
})`
  box-sizing: initial;
  display: inline-block;
  outline: 0;
  width: 1.5rem;
  height: 0.875rem;
  position: relative;
  cursor: pointer;
  user-select: none;
  background-color: ${({ theme, on }) =>
    (on && theme.color.success) || theme.color.secondary};
  border-radius: 1rem;
  padding: 0 2px;
  transition: all 0.4s ease;
  border: 2px solid transparent;

  ${activeButton};

  &:focus::after,
  &:active::after {
    box-sizing: initial;
    box-shadow: none;
    transform: scale(1.2);
  }

  &:active::after {
    padding-right: 0.6em;
  }
  &::after {
    left: ${props => (props.on && 'calc(100% - 10px)') || 0};
    position: relative;
    display: block;
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.white};
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
      padding 0.3s ease, margin 0.3s ease;
    box-shadow: 0 4px 4px 0 rgba(10, 31, 68, 0.16);
  }
`

export { Input, Button }
