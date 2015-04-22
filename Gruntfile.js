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
          src: ['**/*.js', '!tests/**/*.js', '!**/*.spec.js', '!vendor/**', '!bootstrap/config.js'],
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
        tasks: ['dev'],
        options: {
          livereload: true
        }
      },
      src: {
        files: ['Gruntfile.js', 'src/index.html', 'src/modules/**/*.html', 'src/components/**/*.html'],
        tasks: ['dev'],
        options: {
          livereload: true
        }
      },
      scss: {
        files: ['src/**/*.scss', 'dist/assets/**/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true
        }
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
      },
      vendor: {
        files: [{
          expand: true,
          cwd: 'src/vendor',
          src: '**/*',
          dest: 'dist/vendor' 
        }]        
      },
      index: {
        files: [{
          expand: true,
          cwd: 'src',
          src: ['index.html','assets/images/**/*', 'bootstrap/config.js'],
          dest: 'dist' 
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
          './dist/assets/css/style.css': './src/assets/scss/style.scss'
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
  grunt.registerTask("default", ["babel", "ngAnnotate","copy", "sass", "watch"]);
}