var oldCheck = require('./benchmark/old');
var newCheck = require('./benchmark/new');

var hrtimeToMilliseconds = function (hrtime) {
    return (hrtime[0] * 1000) + (hrtime[1] / 1000000.0);
};

var runBenchmark = function (check, fn) {
    var start = process.hrtime();

    var acc = [];
    for (let i = 0; i < 1000000; i++) {
        acc.push(check(fn));
    }

    return hrtimeToMilliseconds(process.hrtime(start));
};

var fn = function * () {};
console.log(`new time: ${ runBenchmark(newCheck, fn) }ms`);
console.log(`old time: ${ runBenchmark(oldCheck, fn) }ms`);
