import { useEffect, useRef, useContext } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import keycode from 'keycode'

import { NoteContext } from '.'

const CREATE_NOTE_MUTATION = gql`
  mutation CREATE_NOTE_MUTATION($title: String!) {
    createNote(title: $title) {
      id
    }
  }
`

const CreateNote = () => {
  const inputEl = useRef(null)
  const { note, setNote } = useContext(NoteContext)

  useEffect(() => {
    inputEl.current.focus()
  }, [])

  const handleOnChange = e => setNote(e.target.value)

  const handleOnKeyPress = async (event, mutation) => {
    if (keycode.isEventKey(event, 'enter') && note) {
      await mutation()
      await setNote('')
      inputEl.current.focus()
    }
  }
  return (
    <Mutation
      mutation={CREATE_NOTE_MUTATION}
      variables={{ title: note }}
      refetchQueries={['ALL_NOTES_QUERY']}
    >
      {(createNote, { loading }) => (
        <input
          value={note}
          onChange={handleOnChange}
          ref={inputEl}
          onKeyPress={e => handleOnKeyPress(e, createNote)}
          disabled={loading}
        />
      )}
    </Mutation>
  )
}

export default CreateNote
