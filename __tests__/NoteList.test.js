import { MockedProvider } from 'react-apollo/test-utils'
import 'jest-dom/extend-expect'
import { render, cleanup, waitForElement } from 'react-testing-library'
import { ThemeProvider } from 'styled-components'

import { NoteList, ALL_NOTES_QUERY, NoteProvider } from '../components'
import { defaultTheme } from '../css'

afterEach(cleanup)

jest.mock('../i18n', () => ({
  // this mock makes sure any components using the translate HoC receive the t function as a prop
  withNamespaces: () => Component => {
    Component.defaultProps = { ...Component.defaultProps, t: () => '' }
    return Component
  },
}))

describe('<NoteList />', () => {
  it('should render', async () => {
    const notes = [
      { id: '123', title: 'Delete Me!', finished: true },
      { id: '456', title: 'Buy rolls!', finished: false },
    ]
    const mocks = [
      {
        request: {
          query: ALL_NOTES_QUERY,
          variables: { search: '' },
        },
        result: { data: { notes } },
      },
    ]

    const tree = (
      <ThemeProvider theme={defaultTheme}>
        <NoteProvider>
          <MockedProvider mocks={mocks} addTypename={false}>
            <NoteList />
          </MockedProvider>
        </NoteProvider>
      </ThemeProvider>
    )
    const { container } = render(tree)

    await waitForElement(() =>
      container.querySelector(['input[title="Buy rolls!"]'])
    )

    expect(container.children.length).toEqual(2)
  })
})
