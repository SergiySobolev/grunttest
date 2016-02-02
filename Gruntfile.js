module.exports = function(grunt) {
    grunt.initConfig({
        distFolder: 'webapp',
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            js: {
                files: ['webapp/**/*.js'],
                tasks: ['build:dev']
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            lib: {
                src: ['webapp/libs/*/*.js', '!webapp/libs/lib.js'],
                dest: '<%= distFolder %>/libs/lib.js'
            },
            app: {
                src: [ '!webapp/app/app.js', 'webapp/app/*.js'],
                dest: '<%= distFolder %>/app/app.js'
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: ['webapp/app/**/*.js', '!webapp/app/app.js']
        },
        uglify: {
            grunttest: {
                files: {
                    '<%= distFolder %>/minified.js': ['<%= distFolder %>/libs/lib.js', '<%= distFolder %>/app/app.js']
                }
            }
        },
        karma: {
            unit: {
                options: {
                    frameworks: ['jasmine'],
                    singleRun: true,
                    browsers: ['Chrome'],
                    files: [
                        'bower_components/angular/angular.js',
                        'bower_components/angular-mocks/angular-mocks.js',
                        'webapp/**/*.js'
                    ]
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('build', ['concat:lib','concat:app','jshint:all']);
    grunt.registerTask('unit-test', ['karma']);
    grunt.registerTask('prod', ['build', 'uglify:grunttest']);
};