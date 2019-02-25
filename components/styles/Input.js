import styled from 'styled-components'

import { disableOutline, fullWidth } from '../../css'

const Input = styled.input`
  border: 0;
  font-size: ${({ theme }) => theme.font.large};
  letter-spacing: 1px;
  ${disableOutline};
  ${fullWidth};
`

const Create = styled(Input)`
  border-bottom: 2px solid ${({ theme }) => theme.color.disabled};
  line-height: 2;
  margin-bottom: 0.5rem;
  transition: border-bottom-color 250ms;

  :focus {
    border-bottom-color: ${({ theme }) => theme.color.success};
  }
`

export { Input, Create }
