module.exports = function(grunt) {
    var webpack = require('webpack');

    require('load-grunt-tasks')(grunt);


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        webpack: {
            options: {
                module: {
                    loaders: [{
                        test: /\.jsx?$/,
                        exclude: /(node_modules|bower_components)/,
                        loader: 'babel',
                        query: {
                            presets: ['react', 'es2015']
                        }
                    }]
                }
            },
            'app-dev': {
                devtool: 'source-map',
                entry: {
                    app: './src/app.jsx',
                    'component-tests': './src/component-tests.jsx'
                },
                output: {
                    filename: '[name]-debug.js',
                    path: 'debug/'
                },
                watch: true,
                keepalive: true
            },
            'app-dist': {
                entry: {
                    app: './src/app.jsx'
                },
                plugins: [
                    new webpack.optimize.UglifyJsPlugin({
                        compress: {
                            warnings: false
                        }
                    })
                ],
                output: {
                    filename: 'app.js',
                    path: 'dist/'
                }
            }
        },

        clean: {
            dist: {
                src: ['dist/']
            }
        },

        copy: {
            dist: {
                files: [{
                    expand: true,
                    src: ['resources/**'],
                    dest: 'dist/'
                }]
            }
        },

        processhtml: {
            dist: {
                files: {
                    'dist/index.html': ['index.html']
                }
            }
        }
    });

    grunt.registerTask('dist', ['clean:dist', 'webpack:app-dist', 'processhtml:dist','copy:dist']);

    // Default task(s).
    grunt.registerTask('default', ['webpack:app-dev']);

};
