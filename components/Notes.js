import { CreateNote, NoteList } from '.'
import { Section, Header } from './styles'
import { Trans } from '../i18n'

const Notes = () => (
  <Section>
    <Header>
      <Trans i18nKey="notes" />
    </Header>
    <CreateNote />
    <NoteList />
  </Section>
)

export default Notes
