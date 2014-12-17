'use strict';
var fs = require('fs');

module.exports = function(grunt) {

  var spawn = require('child_process').spawn,
      sinatra = require('../lib/sinatra');

  grunt.event.once('watch',function(){
    process._sinatra_session = true;
  });
  grunt.registerTask('sinatra', 'Control your sinatra server via Grunt', function(command) {

    command = command || 'start';
    //defaults
    var options = this.options({
      pidFile : "/tmp/sinatraServer.pid",
      args : [],
      app_cmd : 'ruby',
      app_path : 'bin/app.pl', 
      debug : false,
    });

    if (command === 'start'){
        if( process._sinatra_session){
          process._sinatra_session = true;
          var done = this.async();
          process.once('exit', done);
          sinatra.kill(grunt, options, function(){
            sinatra.start(grunt, options, function(){});
          });
        }else{
          var done = this.async();
          sinatra.start(grunt, options, done);
        }
    }else if (command === 'kill' || command === 'exit' || command == 'stop'){
        var done = this.async();
        sinatra.kill(grunt, options, done);
    }
  })
}
