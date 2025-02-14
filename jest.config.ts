import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest", // Add support for .ts and .tsx files
    "^.+\\.jsx?$": "babel-jest" // For JS files as well
  },
  transformIgnorePatterns: [
    "/node_modules/(?!some-package-to-transform)/" // If you need to transform some dependencies
  ]
};


export default config;
