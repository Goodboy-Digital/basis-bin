'use strict';
const log = require('logalot');
const bin = require('.');

bin.run(['-version']).then(() => {
	log.success('basis pre-build test passed successfully');
}).catch(error => {
	log.warn(error.message);
	log.warn('basis pre-build test failed');
});
