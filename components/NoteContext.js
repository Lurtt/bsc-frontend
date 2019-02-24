import { useState, createContext } from 'react'
import PropTypes from 'prop-types'
import { useDebounce } from 'use-hooks'

const NoteContext = createContext()

const NoteProvider = ({ children }) => {
  const [note, setNote] = useState('')
  const debouncedNote = useDebounce(note, 300)

  return (
    <NoteContext.Provider value={{ note, setNote, debouncedNote }}>
      {children}
    </NoteContext.Provider>
  )
}

NoteProvider.propTypes = {
  children: PropTypes.object.isRequired,
}

export { NoteProvider, NoteContext }
