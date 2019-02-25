import { createContext } from 'react'
import gql from 'graphql-tag'

import { CreateNote, NoteList } from '.'
import { Section, Header } from './styles'

const NoteContext = createContext()

const ALL_NOTES_QUERY = gql`
  query ALL_NOTES_QUERY($search: String) {
    notes(where: { title_contains: $search }) {
      id
      title
      finished
    }
  }
`

const Notes = () => (
  <Section>
    <Header>Notes</Header>
    <CreateNote />
    <NoteList />
  </Section>
)

export { ALL_NOTES_QUERY, NoteContext }
export default Notes
