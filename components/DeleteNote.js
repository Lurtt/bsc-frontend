import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Button } from './styles'

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
      <Button type="button" onClick={deleteNote} disabled={loading}>
        <svg
          className="icon-remove"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </Button>
    )}
  </Mutation>
)

DeleteNote.propTypes = {
  id: PropTypes.string.isRequired,
}

export default DeleteNote
