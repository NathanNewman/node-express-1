### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  - Async/Await
  - Promises
  - Callbacks

- What is a Promise?
  - An expectation of a future value. A promise has three states, pending, fulfilled, and rejected.

- What are the differences between an async function and a regular function?
  - An async function allows the await keyword. Await allows for a asynchonous code to behave as a promise.

- What is the difference between Node.js and Express.js?
  - Node.js is a runtime environment for executing JavaScript code. Express.js is a web application framework for Node.js.
- What is the error-first callback pattern?
  - A pattern in which the function is not executed until the asynchronous opertation ends. If the asynchronous operation results in an error, the error is handled before any other part of the function can run.

- What is middleware?
  - Code that runs in the middle of the request / response cycle.

- What does the `next` function do?
  - It runs the next route.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
  - the code would be more efficient wrapped in a promise.all()
  - the variable names do not exactly match the user names. The user name for matt might be a typo.
