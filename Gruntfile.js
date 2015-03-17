module.exports = function(grunt) {
  
  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
        modules: 'amd'
      },
      dev: {
        files: [{
          expand: true,
          cwd: 'es6',
          src: ['**/*.js'],
          dest: './src'
        }]
      }
    },
    watch: {
      es: {
        files: ['es6/**/*.js', 'es6/**/*.html'],
        tasks: ['dev']
      }
    },
    copy: {
      views: {
        files: [{
          expand: true,
          cwd: 'es6/modules',
          src: ['**/views/**/*.html'],
          dest: 'src/modules'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask("dev", ["babel", "copy"]);
  grunt.registerTask("default", ["dev", "watch"]);
}