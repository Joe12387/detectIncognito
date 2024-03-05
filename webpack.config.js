const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const package = require('./package.json');

const currentYear = new Date().getFullYear();

const commonConfig = {
  entry: './src/detectIncognito.ts',
  mode: 'production',
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `/**
 *
 * detectIncognito v${package.version}
 *
 * https://github.com/Joe12387/detectIncognito
 *
 * MIT License
 *
 * Copyright (c) 2021 - ${currentYear} Joe Rutkowski <Joe@dreggle.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * Please keep this comment intact in order to properly abide by the MIT License.
 *
 **/`,
      raw: true,
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: /detectIncognito v/,
          },
        },
        extractComments: false,
      }),
    ],
  },
};

const umdConfig = {
  ...commonConfig,
  output: {
    path: path.resolve(__dirname, 'dist/es5'),
    filename: 'detectIncognito.min.js',
    library: {
      name: 'detectIncognito',
      type: 'umd',
    },
    globalObject: 'this',
  },
  target: ['web', 'es5'],
};

const esmConfig = {
  ...commonConfig,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'detectIncognito.esm.js',
    library: {
      type: 'module',
    },
  },
  experiments: {
    outputModule: true,
  },
};

module.exports = [umdConfig, esmConfig];