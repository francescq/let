module.exports = {
  rootDir: './',
  verbose: true,
  collectCoverage: false,
  collectCoverageFrom: ['./src/**/*.js'],
  coverageDirectory: '<rootDir>/coverage',
  moduleFileExtensions: ['js'],
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(scss|css|svg|png)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: ['<rootDir>test/setup/setupEnzyme.js'],
  // reporters: ['default']
  reporters: ['jest-dot-reporter']
}
