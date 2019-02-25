import { useState } from 'react'
import PropTypes from 'prop-types'

const Toggle = ({ children, onToggle, disabled }) => {
  const [on, setOn] = useState(false)

  const toggle = async () => {
    await setOn(!on)
    if (onToggle) {
      onToggle(on)
    }
  }

  const getStateAndHelpers = () => ({
    on,
    toggle,
    disabled,
    togglerProps: {
      disabled,
      'aria-pressed': on,
      onClick: toggle,
    },
  })

  return children(getStateAndHelpers())
}

Toggle.propTypes = {
  children: PropTypes.func.isRequired,
  onToggle: PropTypes.func,
  disabled: PropTypes.bool,
}

export default Toggle
