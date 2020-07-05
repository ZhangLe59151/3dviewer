/* eslint-disable no-return-assign */
const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');
const fs = require('fs');
// const OfflinePlugin = require('offline-plugin')

// const target = envConfig.BASE_URL

module.exports = (env) => {
  const envConfig = dotenv.parse(
    fs.readFileSync(path.join(__dirname, `./.env.${env.MODE || 'mock'}`)),
  );
  return {
    entry: {
      bundle: './index.tsx',
    },
    output: {
      filename: `static/js/[name].[hash].js`,
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    watch: false,
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: [path.resolve(__dirname, 'node_modules')],
          enforce: 'pre',
          use: ['cache-loader', 'babel-loader', 'awesome-typescript-loader'],
        },
        {
          test: /\.css$/,
          use: ['cache-loader', 'style-loader', 'css-loader'],
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader', // translates CSS into CommonJS
            },
            {
              loader: 'less-loader', // compiles Less to CSS
              options: {
                modifyVars: {
                  'font-size-base': '12px',
                },
                javascriptEnabled: true,
              },
            },
          ],
        },
        {
          test: /\.ico$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: `[name].[ext]`,
                publicPath: '/',
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: `static/img/[name].[hash].[ext]`,
                publicPath: '/',
              },
            },
          ],
        },
      ],
    },
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        'react-dom': '@hot-loader/react-dom',
      },
    },
    devServer: {
      host: '0.0.0.0',
      port: 8000,
      contentBase: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      headers: {
        'Service-Worker-Allowed': '/',
      },
      historyApiFallback: {
        rewrites: [
          {
            from: /^\/$/,
            to: '/index.html',
          },
          {
            from: /./,
            to: '/index.html',
          },
        ],
      },
      inline: true,
      watchOptions: {
        watch: true,
      },
      disableHostCheck: true,
      compress: true,
      proxy: {
        '/vkyc/v1': {
          target: envConfig.BASE_URL,
          changeOrigin: true,
          secure: false,
          xfwd: false,
        },
        '/ws': {
          target: envConfig.WS_URL,
          ws: true,
          changeOrigin: true,
          secure: false,
          xfwd: false,
        },
      },
    },
    plugins: [
      new webpack.DefinePlugin({ 'process.env.MODE': JSON.stringify(env.MODE) }),
      new HTMLPlugin({
        title: 'Video KYC',
        template: path.resolve(__dirname, 'src/index.ejs'),
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      /* new OfflinePlugin({
			AppCache: false,
			appShell: '/',
			ServiceWorker: {
                minify: false,
				events: true,
				output: 'static/sw.js',
				publicPath: '/dist/static/sw.js',
				scope: '/'
			},
			caches: {
				main: [
					`static/${timeStamp}/js/vendor.js`,
					`static/${timeStamp}/js/bundle.js`
				],
				//additional: [`static/${timeStamp}/static/*.png`]
			},
			externals: ['/'],
			autoUpdate: 1000 * 60 * 60 * 24,
			safeToUseOptionalCaches: true
		}) */
    ],
    optimization: {
      splitChunks: {
        chunks: 'async',
        minSize: 300,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        name: true,
        cacheGroups: {
          vendor: {
            chunks: 'all',
            test: path.resolve(__dirname, 'node_modules'),
            name: 'vendor',
            enforce: true,
          },
        },
      },
    },
  };
};
