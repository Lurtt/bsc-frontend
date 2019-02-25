import styled from 'styled-components'
import { Input } from './Input'

const Note = styled.article`
  display: grid;
  align-items: center;
  grid-column-gap: 1rem;
  grid-template-columns: 2rem auto 3rem;
  grid-template-areas: 'done title icons';
`

const TitleContainer = styled.div`
  display: grid;
  grid-area: title;
`

const Title = styled(Input).attrs(({ value }) => ({
  title: value,
}))`
  text-decoration: ${({ finished }) => (finished ? 'line-through' : 'none')};
  color: ${({ theme, finished }) =>
    finished ? theme.color.disabled : theme.color.primary};
`

const Icons = styled.div`
  grid-area: icons;
  justify-self: flex-end;
`

export { Note, TitleContainer, Title, Icons }
