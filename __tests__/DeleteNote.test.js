import { MockedProvider } from 'react-apollo/test-utils'
import 'jest-dom/extend-expect'
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
} from 'react-testing-library'
import { ThemeProvider } from 'styled-components'

import { DeleteNote, DELETE_NOTE_MUTATION } from '../components'
import { defaultTheme } from '../css'

afterEach(cleanup)

describe('<DeleteNote />', () => {
  it('should render', () => {
    const tree = (
      <ThemeProvider theme={defaultTheme}>
        <MockedProvider mocks={[]}>
          <DeleteNote id="123" />
        </MockedProvider>
      </ThemeProvider>
    )

    const { container } = render(tree)
    const svg = container.querySelector(['svg'])

    expect(svg).toHaveClass('icon-remove')
  })

  it('should disable button after fire event', async () => {
    const deleteNote = { id: '123', title: 'Delete Me!' }
    const mocks = [
      {
        request: {
          query: DELETE_NOTE_MUTATION,
          variables: { id: '123' },
        },
        result: { data: { deleteNote } },
      },
    ]

    const tree = (
      <ThemeProvider theme={defaultTheme}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <DeleteNote id="123" />
        </MockedProvider>
      </ThemeProvider>
    )
    const { container } = render(tree)

    const button = container.querySelector(['button'])
    expect(button.disabled).toEqual(false)

    fireEvent.click(button)

    const disabledButton = await waitForElement(() =>
      container.querySelector(['button:disabled'])
    )
    expect(disabledButton.disabled).toEqual(true)
  })
})
