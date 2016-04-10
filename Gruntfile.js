module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        webpack: {
            'app-dev': {
                devtool: 'source-map',
                entry: './src/app.jsx',
                output: {
                    filename: 'app-debug.js',
                    path: 'debug/'
                },
                watch: true,
                keepalive: true,
                module: {
                    loaders: [{
                        test: /\.jsx$/,
                        exclude: /(node_modules|bower_components)/,
                        loader: 'babel',
                        query: {
                            presets: ['react','es2015']
                        }
                    }]
                }
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};
