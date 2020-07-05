const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
// const OfflinePlugin = require('offline-plugin')

process.env.BABEL_ENV = '"production"';

const timeStamp = new Date().getTime();

module.exports = (env) => {
  return {
    entry: {
      bundle: './index.tsx',
    },
    output: {
      filename: `static/${timeStamp}/js/[name].js`,
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    mode: 'production',
    context: path.resolve(__dirname, 'src'),
    watch: false,
    // devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: [path.resolve(__dirname, 'node_modules')],
          enforce: 'pre',
          use: ['babel-loader', 'awesome-typescript-loader'],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
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
          test: /\.mtl$/,
          loader: 'mtl-loader',
        },
        {
          test: /\.obj$/,
          // CHANGE HERE
          loader: 'url-loader',
          include: path.obj,
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: `static/${timeStamp}/img/[name].[ext]`,
                publicPath: '/',
              },
            },
          ],
        },
        {
          test: /\.(png|gif|jpg|svg)$/,
          include: path.images,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'client/assets/[name]-[hash].[ext]',
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
        '/api/v1': {
          // target: 'https://boss.shopintar.net/',
          target: 'https://xxx.net/',
          changeOrigin: true,
          secure: false,
          xfwd: false,
        },
      },
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.BABEL_ENV': '"production"',
        'process.env.MODE': JSON.stringify(env.MODE),
      }),
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
				publicPath: '/static/sw.js',
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
        minChunks: 5,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        name: false,
        cacheGroups: {
          vendor: {
            chunks: 'initial',
            test: path.resolve(__dirname, 'node_modules'),
            name: 'vendor',
            enforce: true,
          },
        },
      },
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            parallel: 4,
            ecma: 6,
            warnings: false,
            compress: {
              pure_funcs: ['console.log', 'console.debug'],
              drop_debugger: true,
            },
            output: {
              comments: false,
            },
          },
        }),
      ],
    },
  };
};
