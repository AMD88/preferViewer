var config = {
    entry: ['babel-polyfill','./src/main.js'],

    output: {
        path:'./',
        filename: 'index.js',
    },

    devServer: {
        inline: true,
        port: 4040,
        //contentBase : "https://maps.googleapis.com/maps/api/js?key=AIzaSyAMEYanwIaEqfx_X2vIYGGAnmHuqQupVzA&callback=initMap"
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',

                query: {
                    presets: ['es2015', 'react','stage-0']
                }
            }
        ]
    }

}

module.exports = config;