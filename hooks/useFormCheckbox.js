import { useState } from 'react'

const useFormCheckbox = initialValue => {
  const [checked, setChecked] = useState(initialValue)

  const handleChange = e => setChecked(e.target.checked)

  return {
    checked,
    onChange: handleChange,
  }
}

export { useFormCheckbox }
