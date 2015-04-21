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
          cwd: 'src',
          src: ['**/*.js', '!tests/**/*.js'],
          dest: './dist'
        }]
      },
      unit: {
        files: [{
          expand: true,
          cwd: 'src/tests',
          src: ['**/unit/*.js'],
          dest: './tests'
        }]
      },
      e2e: {
        options: {
          modules: 'common'         
        },
        files: [{
          expand: true,
          cwd: 'src/tests',
          src: ['**/e2e/*.js'],
          dest: './tests'
        }]         
      }
    },
    // Watch tasks
    watch: {
      es: {
        files: ['src/**/*.js', 'src/**/*.html'],
        tasks: ['dev']
      },
      src: {
        files: ['Gruntfile.js'],
        tasks: ['dev']
      },
      scss: {
        files: ['src/**/*.scss', 'dist/assets/**/*.scss'],
        tasks: ['sass']
      }
    },
    // Copy tasks
    copy: {
      views: {
        files: [{
          expand: true,
          cwd: 'src/modules',
          src: ['**/views/**/*.html'],
          dest: 'dist/modules'
        }]
      },
      components: {
        files: [{
          expand: true,
          cwd: 'src/components',
          src: '**/*.html',
          dest: 'dist/components'
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
          './dist/assets/css/style.css': './dist/assets/css/style.scss'
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