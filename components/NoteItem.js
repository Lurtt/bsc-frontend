import { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import keycode from 'keycode'

import { useFormInput } from '../hooks'
import { InputTitle } from './styles'
import { ALL_NOTES_QUERY, DeleteNote } from '.'

const UPDATE_NOTE_MUTATION = gql`
  mutation UPDATE_NOTE_MUTATION($id: ID!, $title: String, $finished: Boolean!) {
    updateNote(
      where: { id: $id }
      data: { title: $title, finished: $finished }
    ) {
      id
    }
  }
`

const NoteItem = ({ id, title, finished }) => {
  const titleInput = useFormInput(title)
  const [checked, setChecked] = useState(finished)
  const [isEditable, setEditable] = useState(false)
  const titleEl = useRef(null)

  const handleUpdateNote = async (event, mutation) => {
    await setChecked(event.target.checked)
    await setEditable(false)
    mutation()
  }

  const handleOnKeyPress = (event, mutation) => {
    if (keycode.isEventKey(event, 'enter')) {
      setEditable(false)
      mutation()
    }
  }

  const handleOnBlur = async mutation => {
    setEditable(false)
    if (title !== titleInput.value) {
      mutation()
    }
  }

  const handleFocus = async () => {
    await setEditable(true)
    titleEl.current.focus()
  }

  return (
    <Mutation
      mutation={UPDATE_NOTE_MUTATION}
      variables={{ id, finished: checked, title: titleInput.value }}
      refetchQueries={[{ query: ALL_NOTES_QUERY }]}
    >
      {(updateNote, { loading }) => (
        <article>
          <input
            type="checkbox"
            checked={checked}
            onChange={e => handleUpdateNote(e, updateNote)}
            disabled={loading}
          />
          <InputTitle
            type="text"
            ref={titleEl}
            disabled={!isEditable}
            finished={finished}
            {...titleInput}
            onKeyPress={e => handleOnKeyPress(e, updateNote)}
            onBlur={() => handleOnBlur(updateNote)}
          />
          <button type="button" onClick={handleFocus} disabled={finished}>
            edit
          </button>
          <DeleteNote id={id} />
        </article>
      )}
    </Mutation>
  )
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  finished: PropTypes.bool.isRequired,
}

export default NoteItem
