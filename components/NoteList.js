import { useContext } from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import { withNamespaces } from '../i18n'
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

const NoteList = ({ t }) => {
  const { debouncedNote } = useContext(NoteContext)

  return (
    <Query
      query={ALL_NOTES_QUERY}
      variables={{ search: debouncedNote }}
      fetchPolicy="cache-and-network"
    >
      {({ data: { notes }, error, loading }) => {
        if (loading) return <Loading>{t('loading')}</Loading>
        if (error) return <div>{error.message}</div>
        if (notes.length === 0) return <Loading>{t('no-record')}</Loading>

        return notes.map(noteItem => (
          <NoteItem key={noteItem.id} {...noteItem} />
        ))
      }}
    </Query>
  )
}

NoteList.propTypes = {
  t: PropTypes.func.isRequired,
}

export { ALL_NOTES_QUERY }
export default withNamespaces('common')(NoteList)
