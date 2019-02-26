import { useEffect, useRef, useContext } from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import keycode from 'keycode'

import { withNamespaces } from '../i18n'
import { Create, Info } from './styles'
import { NoteContext } from '.'

const CREATE_NOTE_MUTATION = gql`
  mutation CREATE_NOTE_MUTATION($title: String!) {
    createNote(title: $title) {
      id
    }
  }
`

const CreateNote = ({ t }) => {
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
        <div>
          <Create
            value={note}
            placeholder={t('create-note')}
            ref={inputEl}
            onChange={handleOnChange}
            onKeyPress={e => handleOnKeyPress(e, createNote)}
            disabled={loading}
            fullwidth
          />
          {note && <Info>{t('create-note-info')}</Info>}
        </div>
      )}
    </Mutation>
  )
}

CreateNote.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withNamespaces('common')(CreateNote)
