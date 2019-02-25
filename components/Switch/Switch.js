import PropTypes from 'prop-types'

import { Input, Button } from './styled'

const Switch = ({ on, children, ...props }) => (
  <div>
    <Input
      checked={on}
      onChange={() => {
        // changing is handled by clicking the button
      }}
    />
    <Button on={on} {...props} />
    {children}
  </div>
)

Switch.propTypes = {
  on: PropTypes.bool.isRequired,
  children: PropTypes.node,
}

export default Switch
