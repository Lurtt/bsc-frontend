import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const DELETE_NOTE_MUTATION = gql`
  mutation DELETE_NOTE_MUTATION($id: ID!) {
    deleteNote(id: $id) {
      id
    }
  }
`

const DeleteNote = ({ id }) => (
  <Mutation
    mutation={DELETE_NOTE_MUTATION}
    variables={{ id }}
    refetchQueries={['ALL_NOTES_QUERY']}
    fetchPolicy="no-cache"
  >
    {(deleteNote, { loading }) => (
      <button type="button" onClick={deleteNote} disabled={loading}>
        delete
      </button>
    )}
  </Mutation>
)

DeleteNote.propTypes = {
  id: PropTypes.string.isRequired,
}

export default DeleteNote
