module.exports = {
   testEnvironment: 'jsdom',
   moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
   testPathIgnorePatterns: ['/node_modules/', '/.next/'],
   transform: {
     '^.+\\.(ts|tsx)$': 'ts-jest',
   },
   setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
 };
 