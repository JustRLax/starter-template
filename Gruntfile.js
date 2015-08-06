module.exports = function(grunt) {

  "use strict";

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	concat: {
		options: {
			separator: ';'
		},
		vendor: {
			src: [
				'js/vendor/avoid-console.js',
				'js/vendor/jQuery.fontFlex.js',
				'js/vendor/jquery.keep-ratio.js',
				'js/vendor/owl.carousel.js'
			],
			dest: 'js/plugins.js'
		}
	},
    uglify: {
	    options: {
			compress: {
				drop_console: false
			}
		},
		global: {
        	files: {
			'js/plugins.min.js': ['js/plugins.js'],
			'js/main.min.js': ['js/main.js']
        }
      }
    },

    sass: {
      global: {
        options: {
          style: 'compressed',
          require: 'susy'
        },
        files: {
          'css/style-unprefixed.css': 'scss/style.scss'
        }
      }
    },

    autoprefixer: {
      global: {
        src: 'css/style-unprefixed.css',
        dest: 'css/style.css'
      },
      
    },

    shell: {
      jekyllServe: {
        command: 'jekyll serve --baseurl='
      },
      jekyllBuild: {
        command: 'jekyll build --config _config-dev.yml'
      }
    },
   imagemin: {
      dynamic: {
        options: {
            optimizationLevel: 4
        },
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'img/'
        }]
      }
    },
    grunticon: {
	  icons: {
	    files: [{
	      expand: true,
	      cwd: 'img/svg/',
	      src: ['*.svg'],
	      dest: 'fallbacks/'
	    }]
	  }
	},
    watch: {
      options: {
        livereload: true
      },
      site: {
        files: ['*.html', '_layouts/*.html', '_includes/*.html'],
        tasks: ['shell:jekyllBuild']
      },
      js: {
        files: ['js/*.js'],
        tasks: ['uglify', 'shell:jekyllBuild']
      },
      css: {
        files: ['scss/*.scss'],
        tasks: ['sass', 'autoprefixer', 'shell:jekyllBuild']
      },
      svgIcons: {
        files: ['img/svg/*.svg'],
        tasks: ['svgstore', 'grunticon', 'shell:jekyllBuild']
      },
	  images: {
		files: ['img/**/*.{png,jpg,gif}', 'img/*.{png,jpg,gif}'],
		tasks: ['imagemin', 'shell:jekyllBuild'],
		options: {
			spawn: false,
			}
		}
    },
    svgstore: {
      options: {
        prefix : 'shape-',
        cleanup: false,
        svg: {
          style: 'display: none;'
        }
      },
      default: {
        files: {
          'svg-defs.svg': ['img/svg/*.svg']
        }
      }
    }

  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('serve', ['shell:jekyllServe']);
  grunt.registerTask('build', 'concat');
  grunt.registerTask('default', ['sass', 'autoprefixer', 'svgstore', /* 'imagemin', */ 'shell:jekyllBuild', 'watch']);

};