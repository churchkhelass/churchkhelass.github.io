module.exports = {
    presets: [
      '@babel/preset-env', // Для поддержки последних стандартов JS
      '@babel/preset-react', // Для обработки JSX
      '@babel/preset-typescript', // Для поддержки TypeScript
    ],
    plugins: [
      '@babel/plugin-syntax-jsx', // Для работы с JSX в TypeScript
    ],
  };