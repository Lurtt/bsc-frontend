import { createContext } from 'react'
import gql from 'graphql-tag'

import { CreateNote, NoteList } from '.'

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
  <section>
    <CreateNote />
    <NoteList />
  </section>
)

export { ALL_NOTES_QUERY, NoteContext }
export default Notes
