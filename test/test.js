'use strict';
const path = require('path');
const test = require('ava');
const execa = require('execa');
const binCheck = require('bin-check');
const compareSize = require('compare-size');
const basis = require('..');

test('return path to binary and verify that it is working', async t => {
	t.true(await binCheck(basis, ['-version']));
});

test('minify and convert a PNG to Basis', async t => {
	const src = path.join(__dirname, 'fixtures/test.png');
	const dest = path.join(__dirname, 'fixtures/test.basis');
	const args = [
		src,
		'-output_path',
		path.dirname(src)
	];

	await execa(basis, args);
	const result = await compareSize(src, dest);

	t.true(result[dest] < result[src]);
});

test('minify and convert a JPG to Basis', async t => {
	const src = path.join(__dirname, 'fixtures/test2.jpg');
	const dest = path.join(__dirname, 'fixtures/test2.basis');
	const args = [
		src,
		'-output_path',
		path.dirname(src)
	];

	await execa(basis, args);
	const result = await compareSize(src, dest);

	t.true(result[dest] < result[src]);
});
