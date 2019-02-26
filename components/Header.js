import PropTypes from 'prop-types'
import { i18n, withNamespaces } from '../i18n'

import { Toggle, Switch } from '.'
import { AppHeader } from './styles'

const Header = ({ t }) => {
  const HandleChangeLanguage = () =>
    i18n.changeLanguage(i18n.language === 'en' ? 'cs' : 'en')

  return (
    <AppHeader>
      <Toggle onToggle={HandleChangeLanguage}>
        {({ on, togglerProps }) => (
          <Switch on={on} {...togglerProps}>
            <span>{t('change-locale')}</span>
          </Switch>
        )}
      </Toggle>
    </AppHeader>
  )
}

Header.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withNamespaces('common')(Header)
