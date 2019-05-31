/*jshint node: true */
/* globals process */
//var users = require('./users.config');

module.exports = function (grunt) {

	'use strict';

	var path = require('path');

	require('load-grunt-config')(grunt, {
		configPath: path.join(process.cwd(), 'tasks'),
		init: true,
		data: {
			pkg: require('./package.json'),
			cfg: require('./grunt.config.js')
		}
	});

};
