'use strict';

/* globals window */

var test = require('tape');
var isGeneratorFunction = require('../index');
var generatorFunc = require('make-generator-function');
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

var forEach = function (arr, func) {
	var i;
	for (i = 0; i < arr.length; ++i) {
		func(arr[i], i, arr);
	}
};

test('returns false for non-functions', function (t) {
	var nonFuncs = [
		true,
		false,
		null,
		undefined,
		{},
		[],
		/a/g,
		'string',
		42,
		new Date()
	];
	t.plan(nonFuncs.length);
	forEach(nonFuncs, function (nonFunc) {
		t.notOk(isGeneratorFunction(nonFunc), nonFunc + ' is not a function');
	});
	t.end();
});

test('returns false for non-generator functions', function (t) {
	var func = function () {};
	t.notOk(isGeneratorFunction(func), 'anonymous function is not an generator function');

	var namedFunc = function foo() {};
	t.notOk(isGeneratorFunction(namedFunc), 'named function is not an generator function');

	if (typeof window !== 'undefined') {
		t.notOk(isGeneratorFunction(window.alert), 'window.alert is not an generator function');
	} else {
		t.skip('window.alert is not an generator function');
	}
	t.end();
});

test('returns false for non-generator function with faked toString', function (t) {
	var func = function () {};
	func.toString = function () { return 'function* () { return "TOTALLY REAL I SWEAR!"; }'; };

	t.notEqual(String(func), Function.prototype.toString.apply(func), 'faked toString is not real toString');
	t.notOk(isGeneratorFunction(func), 'anonymous function with faked toString is not a generator function');
	t.end();
});

test('returns false for non-generator function with faked @@toStringTag', { skip: !hasToStringTag }, function (t) {
	var fakeGenFunction = { toString: function () { return String(generatorFunc); }, valueOf: function () { return generatorFunc; } };
	fakeGenFunction[Symbol.toStringTag] = 'GeneratorFunction';
	t.notOk(isGeneratorFunction(fakeGenFunction), 'fake GeneratorFunction with @@toStringTag "GeneratorFunction" is not a generator function');
	t.end();
});

test('returns true for generator functions', function (t) {
	if (generatorFunc) {
		t.ok(isGeneratorFunction(generatorFunc), 'generator function is generator function');
	} else {
		t.skip('generator function is generator function - this environment does not support ES6 generator functions. Please run `node --harmony`, or use a supporting browser.');
	}
	t.end();
});

test('concise methods', { skip: !generatorFunc || !generatorFunc.concise }, function (t) {
	t.test('returns true for concise generator methods', function (st) {
		st.ok(isGeneratorFunction(generatorFunc.concise), 'concise generator method is generator function');
		st.end();
    });

	t.test('returns false for concise non-generator methods', function (st) {
		var conciseMethod = Function('return { concise() {} }.concise;')();
		st.equal(typeof conciseMethod, 'function', 'assert: concise method exists');
		st.notOk(isGeneratorFunction(conciseMethod), 'concise non-generator method is not generator function');
		st.end();
	});

	t.end();
});
