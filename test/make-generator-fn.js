'use strict';

var makeGeneratorFunction = function () {
    return Function('return function* () { var x = yield 6; return x * 7; }')();
};
var generatorFunc;
try { generatorFunc = makeGeneratorFunction(); } catch (e) {}

module.exports = generatorFunc;

