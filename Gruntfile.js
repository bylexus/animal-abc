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
                    app: ['babel-polyfill', './src/app.jsx'],
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
                    app: ['babel-polyfill', './src/app.jsx']
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
        },

        shell: {
            distToProd: {
                command: 'rsync -av --rsh="ssh -p 1979" dist/ alex@hal.alexi.ch:~/animal-abc/'
            }
        },

        sass: {
            dev: {
                options: {
                    sourceMap: true
                },
                files: {
                    'main.css': 'sass/main.scss'
                }
            },
            dist: {
                options: {
                    sourceMap: false,
                    outputStyle: 'compressed'
                },
                files: {
                    'dist/main.css': 'sass/main.scss'
                }
            }
        },

        watch: {
            sass: {
                files: ['sass/**/*.scss'],
                tasks: ['sass:dev']
            }
        }
    });

    grunt.registerTask('dist', ['clean:dist', 'sass:dist', 'webpack:app-dist', 'processhtml:dist', 'copy:dist']);
    grunt.registerTask('deployProd', ['dist', 'shell:distToProd']);

    // Default task(s).
    grunt.registerTask('default', ['webpack:app-dev']);

};

