## General Principles

* **Write tests** no matter which library or framework is being used!
* Strive to write many **small pure functions**, and **minimize where mutations occur**.
* **Be cautious about stubs and mocks** - they can make tests more brittle.
* **100% test coverage is a good goal to strive for**, even if it's not always practical to reach it.
* **Whenever a bug get fixed, write a regression test**. A bug fixed without a regression test is almost certainly going to break again in the future.

### Recommended libraries and frameworks

* [Jasmine][jasmine]
* [Jest][jest]
* [Mocha][mocha]
* [Sinon.js][sinon.js]

###### References

* [JavaScript Unit Testing Guide][ref-gh-js_unit_testing_guide]

[mocha]: https://mochajs.org
[jasmine]: https://jasmine.github.io
[jest]: http://facebook.github.io/jest
[ref-gh-js_unit_testing_guide]: https://github.com/mawrkus/js-unit-testing-guide
[sinon.js]: http://sinonjs.org
