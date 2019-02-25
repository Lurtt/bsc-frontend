module.exports = {
  testPathIgnorePatterns: ['/.next/', '/node_modules/'],
  transform: {
    '\\.(gql|graphql)$': 'jest-transform-graphql',
    '.*': 'babel-jest',
    '^.+\\.js?$': 'babel-jest',
  },
}
