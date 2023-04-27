## General Principles

- **Write tests** no matter which library or framework is being used!
- Strive to write many **small pure functions**, and **minimize where mutations occur**.
- **Be cautious about stubs and mocks** - they can make tests more brittle.
- **100% test coverage is a good goal to strive for**, even if it's not always practical to reach it.
- **Whenever a bug get fixed, write a regression test**. A bug fixed without a regression test is almost certainly going to break again in the future.

### Recommended libraries and frameworks

- [Jasmine][1]
- [Jest][2]
- [Mocha][3]
- [Sinon.js][4]

###### References

- [JavaScript Unit Testing Guide][5]

[1]: https://jasmine.github.io
[2]: https://jestjs.io
[3]: https://mochajs.org
[4]: https://sinonjs.org
[5]: https://github.com/mawrkus/js-unit-testing-guide
