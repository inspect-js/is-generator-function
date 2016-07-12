const oldCheck = require("./benchmark/old");
const newCheck = require("./benchmark/new");

const hrtimeToMilliseconds = function (hrtime) {
    return (hrtime[0] * 1000) + (hrtime[1] / 1000000.0);
};

const runBenchmark = function (check, fn) {
    const start = process.hrtime();

    const acc = [];
    for (let i = 0; i < 1000000; i++) {
        acc.push(check(fn));
    }

    return hrtimeToMilliseconds(process.hrtime(start));
};

const fn = function* () {};
console.log(`new time: ${ runBenchmark(newCheck, fn) }ms`);
console.log(`old time: ${ runBenchmark(oldCheck, fn) }ms`);
