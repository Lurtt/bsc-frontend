import styled from 'styled-components'
import { disableOutline } from '../../css'

const Header = styled.h1`
  font-family: ${({ theme }) => theme.font.secondary};
  font-size: ${({ theme }) => theme.font.h1};
  letter-spacing: 2px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.info};

  ${disableOutline}
`

export { Header }
