import { Notes } from '../components'
import { withNamespaces } from '../i18n'

const Home = () => <Notes />

Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default withNamespaces('common')(Home)
