/*global describe, it, require, __dirname*/

'use strict';

// const util = require('brei-util');
const util = require('../../brei-util/index.js');
const u = require('util');

const root = __dirname + '/..';

let valid = [
	{
		'.github': [
			'CONTRIBUTING.md',
			'ISSUE_TEMPLATE.md',
			'PULL_REQUEST_TEMPLATE.md'
		]
	},
	'.gitignore',
	'.travis.yml',
	'LICENSE',
	'README.md',
	'_headers.scss',
	'_layer.scss',
	'_links.scss',
	'_mixins.scss',
	'package.json',
	{
		test: [
			'test.js'
		]
	}
];

describe('Verify file and folder structure', function () {

	it('Deep object comparison check', function () {

		let ttree = util.tree(root)

		let files = util.ftree(ttree);

		console.log('\n------- files --------\n');
		console.log(u.inspect(files, false, null));

		console.log('\n------- valid --------\n');
		console.log(u.inspect(valid, false, null));

		util.assert(util.deep(valid, files));

	});

});

