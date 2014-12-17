'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Configuration to be run (and then tested).
//    sinatra: {
//      options: {
//        app_path : 'test/bin/hi.rb',
//        debug : true,
//        args : []
//      },
//    },
    sinatra: {
      options: {
        app_cmd : 'rackup', 
        app_path : 'test/rackup/config.ru',
        debug : true,
//        args : ['-s', 'thin', '-p', '8182']  //Note: Don't daemonize the process by adding '-D'.
      },
    },
    watch: {
      sinatra: {
        options: {
          spawn : false,
        },
        files: [
          'test/bin/app.pl'
        ],
        tasks: ['sinatra']
      }
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('test-watch', ['sinatra', 'watch']);
  
  grunt.registerTask('default', ['sinatra', 'watch']);

};
