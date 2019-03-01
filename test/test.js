/*global describe, it, require, __dirname*/

const assert = require('yeoman-assert');
const fs = require('fs');
const _ = require('lodash');

const root = __dirname + '/..';

const ignored = [
	'.git',
	'.idea',
	'node_modules',
	'.DS_Store'
];

let rootFiles = [
	'.github',
	'test',
	'.travis.yml',
	'_headers.scss',
	'_layer.scss',
	'_links.scss',
	'_mixins.scss',
	'LICENSE',
	'package.json',
	'README.md'
];

let githubFiles = [
	'CONTRIBUTING.md',
	'ISSUE_TEMPLATE.md',
	'PULL_REQUEST_TEMPLATE.md'
];

let testFiles = [
	'test.js'
];

function has(list, arr) {
	'use strict';

	let diff = _.difference(list, arr);

	if (diff.length === 0) {
		return true;
	} else {
		throw new Error('Missing: ' + diff);
	}

}

function hasOnly(list, arr) {
	'use strict';

	// Remove ignored files and directories
	arr = _.difference(arr, ignored);

	let forward = _.difference(list, arr);
	let backward = _.difference(arr, list);

	return forward.length === backward.length;

}

function filesArray(dir) {
	'use strict';

	return fs.readdirSync(dir);

}

describe('Verify file and folder structure', function () {
	'use strict';

	it('Root file check', function () {

		let files = filesArray(root);
		
		console.log(files, rootFiles);

		assert(has(rootFiles, files));

	});

	it('Github check', function () {

		let files = filesArray(root + '/.github');

		assert(hasOnly(githubFiles, files));

	});

	it('Test check', function () {

		let files = filesArray(root + '/test');

		assert(hasOnly(testFiles, files));

	});

});

