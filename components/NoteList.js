import { useContext } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import { NoteItem, NoteContext } from '.'

const ALL_NOTES_QUERY = gql`
  query ALL_NOTES_QUERY($search: String) {
    notes(where: { title_contains: $search }) {
      id
      title
      finished
    }
  }
`

const NoteList = () => {
  const { debouncedNote } = useContext(NoteContext)

  return (
    <Query
      query={ALL_NOTES_QUERY}
      variables={{ search: debouncedNote }}
      fetchPolicy="cache-and-network"
    >
      {({ data: { notes }, error, loading }) => {
        if (loading) return <div>Loading...</div>
        if (error) return <div>{error.message}</div>

        return notes.map(noteItem => (
          <NoteItem key={noteItem.id} {...noteItem} />
        ))
      }}
    </Query>
  )
}

export default NoteList
