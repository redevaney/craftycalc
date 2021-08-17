const path = require('path');


module.exports = {
    devtool: "source-map",
    mode: "development",
    entry: "./src/app.tsx",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "[name].bundle.js",
    },
    devServer: {
        inline: false,
        contentBase: "./"
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

}
