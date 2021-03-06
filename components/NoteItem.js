import { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import keycode from 'keycode'
import Link from 'next/link'

import { withNamespaces } from '../i18n'
import { NOTE } from '../routes'
import { useFormInput } from '../hooks'
import { Title, Note, Icons, Button, TitleContainer, Info } from './styles'
import { ALL_NOTES_QUERY, DeleteNote, Toggle, Switch } from '.'

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

const NoteItem = ({ id, title, finished, t }) => {
  const titleInput = useFormInput(title)
  const [checked, setChecked] = useState(finished)
  const [isEditable, setEditable] = useState(false)
  const titleEl = useRef(null)

  const handleUpdateNote = async (value, mutation) => {
    await setChecked(!value)
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
        <Note>
          <Toggle
            onToggle={() => handleUpdateNote(checked, updateNote)}
            disabled={loading}
          >
            {({ togglerProps }) => <Switch on={checked} {...togglerProps} />}
          </Toggle>
          <TitleContainer>
            <Title
              type="text"
              ref={titleEl}
              disabled={!isEditable}
              finished={finished}
              {...titleInput}
              onKeyPress={e => handleOnKeyPress(e, updateNote)}
              onBlur={() => handleOnBlur(updateNote)}
            />
            <Link
              href={{
                pathname: NOTE,
                query: { id },
              }}
            >
              <Info as="a" style={{ cursor: 'pointer' }}>
                {t('detail-link')}
              </Info>
            </Link>
          </TitleContainer>

          <Icons>
            {!checked && (
              <Button type="button" onClick={handleFocus} disabled={finished}>
                <svg
                  className="icon-edit"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                </svg>
              </Button>
            )}

            <DeleteNote id={id} />
          </Icons>
        </Note>
      )}
    </Mutation>
  )
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  finished: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
}

export { UPDATE_NOTE_MUTATION }
export default withNamespaces('common')(NoteItem)
