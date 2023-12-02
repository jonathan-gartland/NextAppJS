const nextJest = require('next/jest');
const createJestConfig = nextJest({
  dir: './',
});
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jsdom',
  modulePathIgnorePatterns: ['cypress'],
};
module.exports = createJestConfig(customJestConfig);
