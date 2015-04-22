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
          src: ['**/*.js', '!tests/**/*.js', '!**/*.spec.js'],
          dest: './dist'
        }]
      },
      unit: {
        files: [{
          expand: true,
          cwd: 'src/modules',
          src: ['**/tests/unit/*.js'],
          dest: './tests'
        }]
      },
      e2e: {
        options: {
          modules: 'common'         
        },
        files: [{
          expand: true,
          cwd: 'src/modules',
          src: ['**/tests/e2e/*.js'],
          dest: './tests'
        }]         
      }
    },
    // Watch tasks
    watch: {
      es: {
        files: ['src/**/*.js'],
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
    },
    // clean tasks
    clean: ['dist/modules', 'dist/components'],
    // annotate
    ngAnnotate: {
      options: {},
      build: {
        files: [{
          expand: true,
          src: ['./dist/modules/**/*.js', './dist/app/*.js']
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-ng-annotate');
  grunt.loadNpmTasks('grunt-newer');

  grunt.registerTask("dev", ["newer:babel", "newer:ngAnnotate","newer:copy", "sass"]);
  grunt.registerTask("default", ["dev", "watch"]);
}