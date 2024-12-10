module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    transform: {
      '^.+\\.(ts|tsx)$': 'babel-jest', // Для TypeScript файлов
      '^.+\\.(js|jsx)$': 'babel-jest', // Для обычных JS/JSX файлов
    },
    transformIgnorePatterns: [
      '/node_modules/(?!react|@babel).+\\.js$', // Пропускаем обработку только для указанных пакетов в node_modules
    ],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    moduleNameMapper: {
        '\\.css$': 'identity-obj-proxy', // Игнорировать CSS файлы
      },
  };