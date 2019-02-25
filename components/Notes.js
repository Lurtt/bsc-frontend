import { CreateNote, NoteList } from '.'
import { Section, Header } from './styles'

const Notes = () => (
  <Section>
    <Header>Notes</Header>
    <CreateNote />
    <NoteList />
  </Section>
)

export default Notes
