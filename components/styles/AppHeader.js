import styled from 'styled-components'
import { disableOutline } from '../../css'

const AppHeader = styled.header`
  display: grid;
  grid-template-columns: minmax(20rem, 40rem);
  justify-content: center;
  padding: 2rem 2rem 0;
  font-family: ${({ theme }) => theme.font.secondary};
  font-size: ${({ theme }) => theme.font.large};
  letter-spacing: 2px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.info};

  ${disableOutline}

  & span {
    margin-left: 1rem;
  }
`

export { AppHeader }
