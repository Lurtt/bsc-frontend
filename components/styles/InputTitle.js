import styled from 'styled-components'

const InputTitle = styled.input`
  text-decoration: ${({ finished }) => (finished ? 'line-through' : 'none')};
`

export { InputTitle }
