# grunt-sinatra

> Control your Ruby Sinatra server via Grunt

## Getting Started
If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

In the shell...
```shell
npm install grunt-sinatra
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-sinatra');
```

## The "sinatra" task

### Overview
####sinatra:start (the default sinatra task)
Launches the server and leaves it running even when the parent process is no longer running.

####sinatra:kill
Terminates an already running server.

###Options
pidFile

Type: `String`
Default: `'/tmp/sinatraServer.pid'`

Path to the pid file in case you want to run the server by itself.

debug
Type: `boolean`
Default: `false`

Extra logging output.

args
Type: `array`
Default: []

Any additional arguments to add to the sinatra command can be supplied as an array of strings.


### Getting Started
In your project's Gruntfile, add `sinatra` to the taskList object passed into `grunt.registerTask`.
ie:

```js
	grunt.registerTask('local', [
		'concat',
		'uglify',
		'sinatra',
		'watch'
	]);
```

##Running tests
To run the test suite, first invoke the following command within the repo, installing the development dependencies:
```shell
$ npm install
```
Then run the tests:
```shell
$ mocha test/test.js
```

##With grunt-contrib-watch:

You can use this plugin with watch. This is awesome because it enables you to live reload the sinatra server when you make changes to server files (or really, any files that you specify). Here's an example of my watch config:

```   
    watch: {
      sinatra: {
        options: {
          spawn : false, // IMPORTANT. will not work without this setting.
        },
        files: [
          '/bin/hi.rb'
        ],
        tasks: ['sinatra'] 
      }
    },
 
//...
  grunt.registerTask('default', ['sinatra', 'watch']);
```
The sinatra task knows if watch is running, and on interrupt will kill the sinatra server along with it.

