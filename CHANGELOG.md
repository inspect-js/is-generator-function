# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.0.7](https://github.com/inspect-js/is-generator-function/compare/v1.0.6...v1.0.7) - 2017-12-27

### Fixed

- [Tests] run tests with uglify-register [`#16`](https://github.com/inspect-js/is-generator-function/issues/16)
- Exclude `testling.html` from npm package. [`#8`](https://github.com/inspect-js/is-generator-function/issues/8)

### Commits

- [Tests] up to `node` `v8.4`; use `nvm install-latest-npm` to ensure new npm doesn’t break old node; remove osx builds [`365004b`](https://github.com/inspect-js/is-generator-function/commit/365004b20b302dceb7bd2cee91814f0a55ae3253)
- [Tests] up to `node` `v9.2`, `v8.9`, `v6.12`; pin included builds to LTS [`33916ea`](https://github.com/inspect-js/is-generator-function/commit/33916eadddccf2a39c8cf0160f82c9a5d4a20ecb)
- [Dev Deps] update `core-js`, `eslint`, `nsp` [`b4ce014`](https://github.com/inspect-js/is-generator-function/commit/b4ce0144a8b56fc3089b96f1b8818c6e793e552f)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `core-js`, `nsp`, `semver`, `tape` [`e4b499f`](https://github.com/inspect-js/is-generator-function/commit/e4b499fbe2e5e24593eb25bd63dfc2a1520aaa04)
- [Tests] up to `node` `v7.4`, `v4.7` [`ce642b6`](https://github.com/inspect-js/is-generator-function/commit/ce642b63f0f9c4f56ca3daefbf8b0d4cbda8c0a4)
- Only apps should have lockfiles. [`ea4dfb1`](https://github.com/inspect-js/is-generator-function/commit/ea4dfb15554de3a22656415cda985ceaf449be00)
- [Tests] on `node` `v9.3` [`307d9c1`](https://github.com/inspect-js/is-generator-function/commit/307d9c144fed8a4aec412d3e9ccc117d1c08e167)
- fix: example code missing ) after argument list [`05f62c7`](https://github.com/inspect-js/is-generator-function/commit/05f62c712a9ca08b0efcabe883affd7c0734f51c)
- [Tests] update `uglify-register` [`7376bec`](https://github.com/inspect-js/is-generator-function/commit/7376bec6c3c8ee16cf16feb285798be23e6c2c89)
- [Dev Deps] update `eslint` [`c3f5895`](https://github.com/inspect-js/is-generator-function/commit/c3f58952033c93918aa5b5ac527520b26c2460f8)

## [v1.0.6](https://github.com/inspect-js/is-generator-function/compare/v1.0.5...v1.0.6) - 2016-12-20

### Fixed

- [Fix] fix `is-generator-function` in an env without native generators, with core-js. [`#33`](https://github.com/ljharb/is-equal/issues/33)

### Commits

- [Tests] fix linting errors. [`9d12cdb`](https://github.com/inspect-js/is-generator-function/commit/9d12cdb4bb43c63801173635a7db92ced8f720d8)

## [v1.0.5](https://github.com/inspect-js/is-generator-function/compare/v1.0.4...v1.0.5) - 2016-12-19

### Commits

- Update `tape`, `semver`, `eslint`; use my personal shared `eslint` config. [`3a1192c`](https://github.com/inspect-js/is-generator-function/commit/3a1192cbf25ee5a1ca64e64c20d169c643ceb860)
- Add `npm run eslint` [`ae191b6`](https://github.com/inspect-js/is-generator-function/commit/ae191b61d3ec65de63bcd7b2c1ab08f2f9a94ead)
- [Tests] improve test matrix [`0d0837f`](https://github.com/inspect-js/is-generator-function/commit/0d0837fe00bed00ced94ef5a7bfdbd7e8e295656)
- [Dev Deps] update `tape`, `jscs`, `eslint`, `@ljharb/eslint-config`, `semver`, `nsp` [`6523655`](https://github.com/inspect-js/is-generator-function/commit/652365556b5f8eea69b4612a183b5026c952e776)
- Update `jscs`, `tape`, `semver` [`c185388`](https://github.com/inspect-js/is-generator-function/commit/c185388111ee6c0df1498a76d9c565167b5d20cd)
- Update `eslint` [`9959dbc`](https://github.com/inspect-js/is-generator-function/commit/9959dbc1450214658dc4789574b68de826ec33a7)
- Update `tape`, `jscs`, `eslint`, `@ljharb/eslint-config` [`5945497`](https://github.com/inspect-js/is-generator-function/commit/5945497bc564655ed5ea1bb6f12610a9afc33a33)
- [Dev Deps] update `tape`, `jscs`, `eslint`, `@ljharb/eslint-config` [`1754eae`](https://github.com/inspect-js/is-generator-function/commit/1754eaec79e43835bd154c81fba064b558f7ad1b)
- Update `eslint`, `semver`, `nsp` [`a40f7af`](https://github.com/inspect-js/is-generator-function/commit/a40f7afab3f6ba43193e5464faf51692f6f2199d)
- Update `covert`, `jscs`, `eslint`, `semver` [`f7c3504`](https://github.com/inspect-js/is-generator-function/commit/f7c35049406adc784b23b6b0fbfdd34b4ca8c183)
- [Fix] account for Safari 10 which reports the wrong toString on generator functions. [`3a3a52b`](https://github.com/inspect-js/is-generator-function/commit/3a3a52bdba46e03ae333af9519bf471207bf6cec)
- [Dev Deps] update `tape`, `jscs`, `eslint`, `@ljharb/eslint-config`, `semver`, `nsp` [`aaab6c3`](https://github.com/inspect-js/is-generator-function/commit/aaab6c3a331c8c8793f8f43aa1d452cc12b92c0d)
- [Dev Deps] update `jscs` [`e24641c`](https://github.com/inspect-js/is-generator-function/commit/e24641ca69ae3ee232837e9153c8b43b046cfe69)
- [Tests] up to `io.js` `v3.3`, `node` `v4.1` [`c43c5ad`](https://github.com/inspect-js/is-generator-function/commit/c43c5ade8b3b62fa27fac3e5104ab3df93278878)
- Add `npm run security` via `nsp` [`24256ca`](https://github.com/inspect-js/is-generator-function/commit/24256ca5f5308930e86c3dc75b70bbfe1033e9b6)
- Test up to `io.js` `v2.3` [`730233f`](https://github.com/inspect-js/is-generator-function/commit/730233f0ca376887c698c01799b60ee54424bf9f)
- [Tests] use pretest/posttest for linting/security [`3e6b860`](https://github.com/inspect-js/is-generator-function/commit/3e6b8603453e4d127cd1acef720f1ce214d8f69a)
- [Refactor] remove useless `Object#toString` check. [`9d4d7ac`](https://github.com/inspect-js/is-generator-function/commit/9d4d7ac23f6f2f75098903b4fe4f74e1d39a2226)
- [Dev Deps] Update `tape`, `eslint` [`34673b8`](https://github.com/inspect-js/is-generator-function/commit/34673b86aecddf149284bd8bbca5ab54e6e59694)
- Test up to `io.js` `v2.1` [`1e91585`](https://github.com/inspect-js/is-generator-function/commit/1e915850246cbd691606567850f35665a650e490)
- Test on two latest `io.js` versions. [`8702608`](https://github.com/inspect-js/is-generator-function/commit/87026087a1e3b43ba9f8dc7a5b6c2b58d572ff25)
- Test on `iojs-v1.5` and `iojs-v1.6` [`c74935e`](https://github.com/inspect-js/is-generator-function/commit/c74935ec9c187e9640f862607873aa096ddcf9fc)
- Latest `node` now supports generators. [`beb3bfe`](https://github.com/inspect-js/is-generator-function/commit/beb3bfe3d425cc0ece9a02e286727e36d53f5050)
- [Dev Deps] update `tape` [`c6e6587`](https://github.com/inspect-js/is-generator-function/commit/c6e658765c94b9edc282848f13e7bce882711c8c)
- Switch from vb.teelaun.ch to versionbadg.es for the npm version badge SVG. [`0039875`](https://github.com/inspect-js/is-generator-function/commit/0039875e6c587255470088c7867cfa314713626b)
- Test on `io.js` `v2.5` [`0017408`](https://github.com/inspect-js/is-generator-function/commit/001740801d2a29f9a25a8824b064286910601e8c)
- Test on `io.js` `v2.4` [`bc013e2`](https://github.com/inspect-js/is-generator-function/commit/bc013e20b99a89b3f592038196d69f871b39caf0)
- Test on `io.js` `v3.0` [`e195030`](https://github.com/inspect-js/is-generator-function/commit/e1950306f4e0a107101e9aeae89cfac2c18e33de)

## [v1.0.4](https://github.com/inspect-js/is-generator-function/compare/v1.0.3...v1.0.4) - 2015-03-03

### Fixed

- Add support for detecting concise generator methods. [`#2`](https://github.com/inspect-js/is-generator-function/issues/2)

### Commits

- All grade A-supported `node`/`iojs` versions now ship with an `npm` that understands `^`. [`6562e80`](https://github.com/inspect-js/is-generator-function/commit/6562e8015cf318056522a39d7a8e6ad121f9cf4c)
- Run `travis-ci` tests on `iojs` and `node` v0.12; speed up builds; allow 0.8 failures. [`592f768`](https://github.com/inspect-js/is-generator-function/commit/592f76853bcc5b46351d8842df7fd1483214d870)
- Test on latest `io.js` [`edca329`](https://github.com/inspect-js/is-generator-function/commit/edca329a4b3ddc19b5ac9491f7678240a73f4e0b)
- Forgot to add `replace` in 209fac444b4bd90eaa8df279457c4a15e6bba6d2 [`3ebfb38`](https://github.com/inspect-js/is-generator-function/commit/3ebfb380c73e29447689f0924248a5c801260371)
- Update `semver` [`c21baa5`](https://github.com/inspect-js/is-generator-function/commit/c21baa5acfe51e6bbe324c13ce5d4b6770ecfb27)
- Update `jscs` [`71a68f4`](https://github.com/inspect-js/is-generator-function/commit/71a68f47044af23ed2cd819d122202a59c2e6967)
- Update `tape` [`32c03cf`](https://github.com/inspect-js/is-generator-function/commit/32c03cf5701634f47c8d47fc383c97365adb3bb3)

## [v1.0.3](https://github.com/inspect-js/is-generator-function/compare/v1.0.2...v1.0.3) - 2015-01-31

### Commits

- `make release` [`209fac4`](https://github.com/inspect-js/is-generator-function/commit/209fac444b4bd90eaa8df279457c4a15e6bba6d2)
- Run tests against a faked @@toStringTag [`c9ba1ea`](https://github.com/inspect-js/is-generator-function/commit/c9ba1ea8163bd2e7a0f537da8fbaead0efa96a24)
- Add `sudo: false` to speed up travis-ci tests. [`a4b41e1`](https://github.com/inspect-js/is-generator-function/commit/a4b41e1b9c3856c671922f64bf5b7b41eb9ec0d6)
- Bail out early when typeof is not "function" [`a62e7a5`](https://github.com/inspect-js/is-generator-function/commit/a62e7a547307f5ba62a39e374f2cc2f46705eabc)

## [v1.0.2](https://github.com/inspect-js/is-generator-function/compare/v1.0.1...v1.0.2) - 2015-01-20

### Commits

- Update `tape`, `jscs` [`354d343`](https://github.com/inspect-js/is-generator-function/commit/354d3437426c274221ad21a2a580e9f31bfb07e3)
- Update `jscs` [`e0b6203`](https://github.com/inspect-js/is-generator-function/commit/e0b620323be47b3925fe3cd660c063a06cfde4aa)
- Fix tests in newer v8 (and io.js) [`36f0545`](https://github.com/inspect-js/is-generator-function/commit/36f054590d4f5fa994af5f2e7d592840bf9f9d27)

## [v1.0.1](https://github.com/inspect-js/is-generator-function/compare/v1.0.0...v1.0.1) - 2014-12-14

### Commits

- Use my standard jscs.json file. [`7624ca3`](https://github.com/inspect-js/is-generator-function/commit/7624ca3053cacec69d9a58e40c54e6635d8f980b)
- Use `make-generator-function` instead of a local module. [`9234a57`](https://github.com/inspect-js/is-generator-function/commit/9234a5771a3237baf3fe609540e74ce982fe6932)
- Adding license and downloads badges [`9463b6a`](https://github.com/inspect-js/is-generator-function/commit/9463b6a0c6bf254e213a2f5306f37e9849c8bb1a)
- Using single quotes exclusively. [`4b4d71f`](https://github.com/inspect-js/is-generator-function/commit/4b4d71f9e0d3753b6f2bd764ae910601352ff19e)
- Use SVG badges instead of PNG [`eaaaf41`](https://github.com/inspect-js/is-generator-function/commit/eaaaf41900c2e69c801062e8c7bb247bd3d2e402)
- Updating jscs. [`780758e`](https://github.com/inspect-js/is-generator-function/commit/780758ef1ae5e6a7a422fc8e3ac1265f53e33135)
- Update `tape`, `jscs` [`6b8f959`](https://github.com/inspect-js/is-generator-function/commit/6b8f95928274d770e9b66359e38c982a2b161e74)
- Update `tape`, `jscs` [`6e1334d`](https://github.com/inspect-js/is-generator-function/commit/6e1334d12899bed116ab3c4e82994fdfc8f8c279)
- Lock covert to v1.0.0. [`3dd5c74`](https://github.com/inspect-js/is-generator-function/commit/3dd5c74921a59481d5a699444a879ef0f80ef7c5)
- Updating `tape` [`99f61a3`](https://github.com/inspect-js/is-generator-function/commit/99f61a30692b7c00d06a6d29ac3022b242d4f1d4)
- Updating jscs [`171d96d`](https://github.com/inspect-js/is-generator-function/commit/171d96deef2bff8a840b0ef9563ad9366c8fcd98)
- Updating jscs [`847795e`](https://github.com/inspect-js/is-generator-function/commit/847795e9f951f5d28195f0bdb85ec26b427d2d33)
- Updating jscs [`cad09d8`](https://github.com/inspect-js/is-generator-function/commit/cad09d88873f2595545977f0ce9ed8ccde78b625)
- Updating covert [`8617860`](https://github.com/inspect-js/is-generator-function/commit/86178604dccea5b73ad2b386b275657366735529)
- Adding an .nvmrc file. [`1fa3ea4`](https://github.com/inspect-js/is-generator-function/commit/1fa3ea4f04139fdc28e2c0e553efd917be1f5744)

## [v1.0.0](https://github.com/inspect-js/is-generator-function/compare/v0.0.0...v1.0.0) - 2014-08-09

### Commits

- Adding `npm run lint` [`ed9cf0a`](https://github.com/inspect-js/is-generator-function/commit/ed9cf0a240ae8b3c4bf682e5ff37757d9eb6cffc)
- Make sure old and unstable nodes don't break Travis [`80a7ee7`](https://github.com/inspect-js/is-generator-function/commit/80a7ee782dc832869bccf857213ef76685303738)
- Updating tape [`d5f141f`](https://github.com/inspect-js/is-generator-function/commit/d5f141f0017aefb003911a1eb9c9b615069f1cf0)
- Fix npm upgrading on node 0.8 [`2ee0f08`](https://github.com/inspect-js/is-generator-function/commit/2ee0f08a56f493fb5d4299c7bda9cd52c41a98a2)
- Updating dependencies [`accf688`](https://github.com/inspect-js/is-generator-function/commit/accf688e8c20f05d0f24c1ff8efdaa24def0882c)
- Updating covert [`38d22e6`](https://github.com/inspect-js/is-generator-function/commit/38d22e6cdc939bb3f2cbfc5fff41473a694d4fe5)
- Updating tape [`49c1f00`](https://github.com/inspect-js/is-generator-function/commit/49c1f00cf5c66c87a8678d9c78a6b411cf1af986)
- Updating tape [`75cb7df`](https://github.com/inspect-js/is-generator-function/commit/75cb7dfef5254f4a9941a3bd77471cb783bb6fbd)
- Updating tape [`4142cc0`](https://github.com/inspect-js/is-generator-function/commit/4142cc092e157b92a6107112b2c3f3dc9b154367)
- Better code coverage [`1831d64`](https://github.com/inspect-js/is-generator-function/commit/1831d64d859ae8d45cc9aea30248d8cabc3d1e1d)

## v0.0.0 - 2014-02-09

### Commits

- Tests. [`f46e936`](https://github.com/inspect-js/is-generator-function/commit/f46e9368db04e0725a56e2bd0a246ab52123ed35)
- package.json [`189db32`](https://github.com/inspect-js/is-generator-function/commit/189db324e627257de94b68d1e6005c21ba74ebad)
- Initial commit [`8096cee`](https://github.com/inspect-js/is-generator-function/commit/8096ceedf7c9caece9acfd0ff4a0bd6eafa5dfdf)
- README. [`9eda97f`](https://github.com/inspect-js/is-generator-function/commit/9eda97fbc33113a519121a6515e777985730f3f7)
- Implementation. [`c5c3a8d`](https://github.com/inspect-js/is-generator-function/commit/c5c3a8d5dccae465c69958fc38c4ceba8b1354cc)
- Adding Travis CI [`9a6503e`](https://github.com/inspect-js/is-generator-function/commit/9a6503ebce8c9521c82e8ed1ec1b79bc856d0c5c)
