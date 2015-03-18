module.exports = function(grunt) {
  
  grunt.initConfig({
    // Babel tasks
    babel: {
      options: {
        sourceMap: true,
        modules: 'amd'
      },
      dev: {
        files: [{
          expand: true,
          cwd: 'es6',
          src: ['**/*.js', '!tests/**/*.js'],
          dest: './src'
        }]
      },
      tests: {
        files: [{
          expand: true,
          cwd: 'es6/tests',
          src: ['**/*.js'],
          dest: './tests'
        }]        
      }
    },
    // Watch tasks
    watch: {
      es: {
        files: ['es6/**/*.js', 'es6/**/*.html'],
        tasks: ['dev']
      },
      src: {
        files: ['Gruntfile.js'],
        tasks: ['dev']
      },
      scss: {
        files: ['es6/**/*.scss', 'src/assets/**/*.scss'],
        tasks: ['sass']
      }
    },
    // Copy tasks
    copy: {
      views: {
        files: [{
          expand: true,
          cwd: 'es6/modules',
          src: ['**/views/**/*.html'],
          dest: 'src/modules'
        }]
      },
      components: {
        files: [{
          expand: true,
          cwd: 'es6/components',
          src: '**/*.html',
          dest: 'src/components'
        }]
      }
    },
    // Sass tasks
    sass: {
      dev: {
        options: {
          loadPath: '.'
        },
        files: {
          './src/assets/css/style.css': './src/assets/css/style.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-newer');

  grunt.registerTask("dev", ["newer:babel", "newer:copy", "sass"]);
  grunt.registerTask("default", ["dev", "watch"]);
}