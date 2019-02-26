module.exports = {
  testPathIgnorePatterns: ['/.next/', '/node_modules/', '/cypress/'],
  transform: {
    '\\.(gql|graphql)$': 'jest-transform-graphql',
    '.*': 'babel-jest',
    '^.+\\.js?$': 'babel-jest',
  },
}
