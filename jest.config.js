module.exports = {
  // collectCoverage: true,
  // coverageDirectory: 'coverage',
  clearMocks: true,
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['./src/setupTest.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/build/'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.s?[ac]ss$': 'identity-obj-proxy',
  },
};
