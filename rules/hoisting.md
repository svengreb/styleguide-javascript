<!--lint disable no-duplicate-headings-->

## Overview

`var` declarations get hoisted to the top of their closest enclosing function scope, their assignment does not. `const` and `let` declarations are blessed with a new concept called [Temporal Dead Zones (TDZ)][1]. It is important to know why [`typeof` is no longer safe][3].

###### References

- [JavaScript Scoping & Hoisting][2] by Ben Cherry

###### Examples

Assuming there is no `notDefined` global variable, this won't work.

```js
function snow() {
  console.log(notDefined); // throws a ReferenceError
}
```

Creating a variable declaration after referencing it will work due to variable hoisting. Note that the assignment value of `true` is not hoisted!

```js
function snow() {
  console.log(declaredButNotAssigned); // undefined
  var declaredButNotAssigned = true;
}
```

The interpreter is hoisting the variable declaration to the top of the scope, which means that the example above could be rewritten as:

```js
function snow() {
  let declaredButNotAssigned;
  console.log(declaredButNotAssigned); // undefined
  declaredButNotAssigned = true;
}
```

Using `const` and `let`:

```js
function snow() {
  console.log(declaredButNotAssigned); // throws a ReferenceError
  console.log(typeof declaredButNotAssigned); // throws a ReferenceError
  const declaredButNotAssigned = true;
}
```

## Anonymous Function Expressions

Anonymous function expressions hoist their variable name, but not the function assignment.

###### Examples

```js
function snow() {
  console.log(anonymous); // undefined

  anonymous(); // TypeError: anonymous is not a function

  var anonymous = function () {
    console.log("anonymous function expression");
  };
}
```

## Named Function Expressions

Named function expressions hoist the variable name, not the function name or the function body.

###### Examples

```js
function snow() {
  console.log(named); // undefined

  named(); // TypeError: named is not a function

  fall(); // ReferenceError: fall is not defined

  var named = function fall() {
    console.log("Falling");
  };
}
```

The same also applies when the function name is the same as the variable name.

```js
function snow() {
  console.log(named); // undefined

  named(); // TypeError: named is not a function

  var named = function named() {
    console.log("named");
  };
}
```

## Function Declaration

Function declarations hoist their name and the function body.

###### Examples

```js
function snow() {
  fall(); // Falling

  function fall() {
    console.log("Falling");
  }
}
```

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone
[2]: http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting
[3]: https://web.archive.org/web/20200121061528/http://es-discourse.com/t/why-typeof-is-no-longer-safe/15
