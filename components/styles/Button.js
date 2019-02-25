import styled from 'styled-components'
import { disableOutline } from '../../css'

const Button = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  padding: 0;
  background-color: transparent;
  border: 0;
  cursor: pointer;

  ${disableOutline}

  & svg {
    transition: opacity 250ms;
    opacity: 0.6;

    :hover {
      opacity: 1;
    }
  }

  & svg.icon-edit {
    fill: ${({ theme }) => theme.color.secondary};
  }

  & svg.icon-remove {
    fill: ${({ theme }) => theme.color.error};
  }
`

export { Button }
