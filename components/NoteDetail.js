import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import { format } from 'date-fns'
import Link from 'next/link'

import { HOME } from '../routes'
import { Section, Header, Info } from './styles'

const NOTE_QUERY = gql`
  query NOTE_QUERY($id: ID!) {
    note(noteId: $id) {
      id
      title
      finished
      createdAt
      updatedAt
    }
  }
`

const NoteDetail = ({ id }) => (
  <Query query={NOTE_QUERY} variables={{ id }} fetchPolicy="cache-and-network">
    {({ data: { note }, loading }) => {
      if (loading)
        return (
          <Section>
            <h1>Loading...</h1>
          </Section>
        )
      return (
        <Section>
          <Header>Note Detail</Header>
          <Info>
            {note.title}, [{note.finished ? 'finished' : 'unfinished'} note]
          </Info>

          <div>
            Created at:{' '}
            {format(new Date(note.createdAt), 'd MMMM YYYY HH:MM:ss', {
              awareOfUnicodeTokens: true,
            })}
          </div>
          <div>
            Last update:{' '}
            {format(new Date(note.updatedAt), 'd MMMM YYYY HH:MM:ss', {
              awareOfUnicodeTokens: true,
            })}
          </div>
          <Link
            href={{
              pathname: HOME,
            }}
          >
            <Info as="a" style={{ cursor: 'pointer' }}>
              back
            </Info>
          </Link>
        </Section>
      )
    }}
  </Query>
)

NoteDetail.propTypes = {
  id: PropTypes.string.isRequired,
}

export default NoteDetail
