'use strict';

var GeneratorFunction = (function* () {}).constructor;

module.exports = function isGeneratorFunction(fn) {
    return (fn instanceof GeneratorFunction);
};
