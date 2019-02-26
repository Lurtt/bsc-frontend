import PropTypes from 'prop-types'

import { NoteDetail } from '../components'
import { withNamespaces } from '../i18n'

const Note = ({ query }) => <NoteDetail id={query.id} />

Note.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Note.propTypes = {
  query: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
}

export default withNamespaces('common')(Note)
