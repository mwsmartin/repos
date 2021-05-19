// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');

const isProduction = process.env.NODE_ENV == 'production';




const config = {
    entry:[ 
            'isomorphic-fetch/fetch-npm-browserify',
            'core-js/fn/promise',

            path.join(__dirname, "./src/index.js")
        ],
    output: {
        path: path.resolve(__dirname, './wwwroot/js'),
        filename: "index.bundle.js",
        environment: {
            arrowFunction: false,
            bigIntLiteral: false,
            const: false,
            destructuring: false,
            dynamicImport: false,
            forOf: false,
            module: false,
          }
    },
    plugins: [

        // Add your plugins here
       
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    externals: {
     
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
            {
                test: /\.(js|jsx)$/i,
                //loader: 'ts-loader',
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: [
                          
                        ['@babel/preset-env', { 
                            useBuiltIns: "usage",
                            
                            // caller.target will be the same as the target option from webpack
                            targets: { chrome: "58", ie: "11" }
                        }],
                        "@babel/preset-typescript",
                        "@babel/preset-react"
                    ],
                    plugins: [
                  //      require("@babel/plugin-transform-arrow-functions")
                      ]
                    }
                  }
            }

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js','.jsx'],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
    } else {
        config.mode = 'development';
    }
    return config;
};
