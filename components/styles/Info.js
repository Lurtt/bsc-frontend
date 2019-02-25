import styled from 'styled-components'

const Info = styled.div`
  font-family: ${({ theme }) => theme.font.secondary};
  font-size: ${({ theme }) => theme.font.small};
  letter-spacing: 2px;
  color: ${({ theme }) => theme.color.info};
`

export { Info }
