'use strict';

module.exports = function isGeneratorFunction(fn) {
	return typeof fn ==='function' && fn.constructor.name==='GeneratorFunction';
};
