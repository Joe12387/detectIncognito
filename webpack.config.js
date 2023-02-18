module.exports = {
  target: 'es5',
  entry: {
    detectIncognito: './src/detectIncognito.ts',
  },
  resolve: {
    extensions: ['.ts'],
  },
  output: {
    path: __dirname + '/dist/es5',
    filename: 'detectIncognito.min.js',
    chunkFormat: 'array-push',
    library: {
      type: 'assign',
      name: 'detectIncognito',
      export: 'detectIncognito',
    },
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }],
  },
};