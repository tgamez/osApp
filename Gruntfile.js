module.exports = function(grunt) {


  // Load Grunt tasks declared in the package.json file 
  
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  
//  grunt.registerTask('watch', [ 'watch' ]);
 
  grunt.initConfig({

    // grunt-express will serve the files from the folders listed in `bases`
    // on specified `port` and `hostname`
    express: {
      all: {
        options: {
          port: 9000,
          hostname: "0.0.0.0",
          bases: ['./public'],
          					 // Replace with the directory you want the files served from
                             // Make sure you don't use `.` or `..` in the path as Express
                             // is likely to return 403 Forbidden responses if you do
                             // http://stackoverflow.com/questions/14594121/express-res-sendfile-throwing-forbidden-error
          /*
          middleware: function (connect, options, middlewares) {
                        var fs = require('fs');
                        var path = require('path');
                        var support = ['POST', 'PUT', 'DELETE'];
                        middlewares.unshift(function (req, res, next) {
                          // 单独处理POST请求 请求的地址必须是文件 这里没有进行rewrite处理
                          if (support.indexOf(req.method.toUpperCase()) != -1) {
                            var filepath = path.join(options.base[0], req.url);
                            if (fs.existsSync(filepath) && fs.statSync(filepath).isFile()) {
                              return res.end(fs.readFileSync(filepath));
                            }
                          }

                          return next();
                        });

                        return middlewares;
                      },
          */
          livereload: true
        }
      }
    },
 
    // grunt-open will open your browser at the project's URL
    open: {
      all: {
        // Gets the port from the connect configuration
        path: 'http://localhost:<%= express.all.options.port%>'
      }
    },


    concat: {
      js: {
        options: {
          separator: ';'
        },
        src: [
          'javascript/*.js'
        ],
        dest: 'public/js/main.min.js'
      },
    },
    uglify: {
      options: {
        mangle: false
      },
      js: {
        files: {
          'public/js/main.min.js': ['public/js/main.min.js']
        }
      }
    },
    less: {
      style: {
        files: {
          "public/css/style.css": "less/style.less"
        }
      }
    },
    watch: {
      json: {
        files: ['mock_data/*.json'],
        options: {
          livereload: true,
        }
      },

      js: {
        files: ['javascript/*.js'],
        tasks: ['concat:js', 'uglify:js'],
        options: {
          livereload: true,
        }
      },
      css: {
        files: ['less/*.less'],
        tasks: ['less:style'],
        options: {
          livereload: true,
        }
      },
      html: {
        files: ['public/*.html', 'public/partials/*.html'],
        options: {
          livereload: true,
        }
      }
    }
  });

  // Creates the `server` task
  grunt.registerTask('server', [
    'express',
    'open',
    'watch'
  ]);
 
};
