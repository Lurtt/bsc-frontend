import PropTypes from 'prop-types'

import { NoteDetail } from '../components'

const Note = ({ query }) => <NoteDetail id={query.id} />

Note.propTypes = {
  query: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
}

export default Note
