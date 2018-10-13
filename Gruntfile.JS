module.exports = function(grunt) {

    grunt.initConfig({
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'Bocai/src/css',
                    src: ['**/*.css', '!*.min.css'],
                    dest: 'Bocai/dist/css',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'Bocai/src/js',
                    src: ['*.js', '!*.min.js'],
                    dest: 'Bocai/dist/js',
                    ext: '.min.js'
                }]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
};