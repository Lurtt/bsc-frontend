import { useContext } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import { NoteItem, NoteContext } from '.'
import { Loading } from './styles'

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
        if (loading) return <Loading>Loading...</Loading>
        if (error) return <div>{error.message}</div>
        if (notes.length === 0) return <Loading>No record found</Loading>
        return notes.map(noteItem => (
          <NoteItem key={noteItem.id} {...noteItem} />
        ))
      }}
    </Query>
  )
}

export default NoteList
