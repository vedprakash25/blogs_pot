
## Introduction

Promises are a powerful tool in JavaScript that allows us to write asynchronous code that is more readable and easier to manage. They provide a way to handle and manage operations that may take a long time to complete, without blocking the execution of other code.

In this article, we will explore the nature of promises in JavaScript, how they work, and how they can be used to write more efficient and effective code. We will also look at some common use cases for promises, and how they can be combined with other JavaScript concepts such as callbacks and `async/await`.

Join us as we delve into the world of promises in JavaScript, and discover how they can make your code cleaner, more maintainable, and more powerful.

## [](https://abiala.hashnode.dev/understanding-promises-in-javascript#heading-prerequisites "Permalink")Prerequisites

- Basic understanding of JavaScript fundamentals.

## [](https://abiala.hashnode.dev/understanding-promises-in-javascript#heading-ajax "Permalink")AJAX

AJAX stands for **Asynchronous JavaScript and XML**. Asynchronous operations in JavaScript allow information to be fetched from a remote server or API without disturbing the running of the program. It runs in the background and when the operation is complete, the task gives a result.

Most of the time, our programs consist of various callback functions which take time to load, and running them independently makes handling efficient.

Let's look at the lines of codes shown below:

COPY

COPY

```
const userName = "Abiala Israel";
console.log(userName);
const  age  =  56;
console.log(age);
setTimeout(function () {
    console.log('Dotun is a boy');
}, 5000);
console.log(`${userName} is ${age} years old`);

```

This will output the following result:

COPY

COPY

```
Abiala Israel
56
Abiala is 56 years old
Dotun is a boy`

```

Normally, JavaScript is a single-threaded language and it executes each line of code sequentially. But in the example shown above, the `setTimeout` function is an asynchronous operation that got the output `Dotun is a boy`delayed for 5 secs.

After 5 secs, the callback function was returned but the last line of code was executed before it. This shows clearly that the `setTimeout` function was running in the background.

## [](https://abiala.hashnode.dev/understanding-promises-in-javascript#heading-what-are-promises "Permalink")What are Promises?

Promises are returned objects which are gotten from a complete or an incomplete asynchronous operation. It can be termed as success or failure depending on the result. It is used as a placeholder for an asynchronous operation.

Fetching and manipulation of data have been made possible through Promises. It serves as a container for a finished asynchronous operation.

Various technologies can be used in updating the user interface of websites without having to refresh the browser page. The most efficient way of fetching data from web servers is through the use of Promises. The two major technologies we will consider in this article include:

- `XMLHttpRequest`
- Fetch API

For example, let's consider some code that uses `addRecipe()` that asynchronously add a recipe to a list of recipes in a cooking catalog:

COPY

COPY

```
const  successCallback  =  recipe  => {
    console.log(`I downloaded the recipe from ${recipe}`);
    };

const  failureCallback  =  error  => {
    console.log(`Could not load recipe: ${error}`);
    };

addRecipe(recipeLoader, successCallback, failureCallback);

```

Instead of attaching the callback handlers to the `addRecipe()`, you can wait for a value to be returned. Then the handlers can be attached to it.

COPY

COPY

```
addRecipe(recipeLoader).then(successCallback, failureCallback);

```

In this case, `addRecipe(recipeLoader)` returns a promise. Then, the `then()` keyword allows us to perform subsequent asynchronous operations on the returned promise.

### [](https://abiala.hashnode.dev/understanding-promises-in-javascript#heading-states-of-promises "Permalink")States of Promises

- Pending: This means that the operation is still in progress.
- Fulfilled: The operation is successful and complete. Hence, a value is returned.
- Rejected: The operation is incomplete and unsuccessful. Then, an error can be thrown.

## [](https://abiala.hashnode.dev/understanding-promises-in-javascript#heading-creating-new-promises "Permalink")Creating New Promises

To create a new promise, you can use the constructor function and the `new` keyword. The constructor function takes one executor function as an argument.

COPY

COPY

```
const newPromise = new Promise((resolve, reject) => {
    // Code contains asynchronous operation
});

```

The `new Promise()` returns a new object. The executor function takes two functions `resolve` and `reject` as arguments. The successful asynchronous operations are handled by the `resolve` callback function while the rejected ones are handled by the `reject` function.

### [](https://abiala.hashnode.dev/understanding-promises-in-javascript#heading-resolving-and-rejecting-promises "Permalink")Resolving and Rejecting Promises

After creating a new object, we can handle the object using either of the two executor functions. For example,

COPY

COPY

```
const myPromise = new  Promise((resolve, reject) => {
    resolve("This result is fulfilled")
});

```

In this case, "Hello world" is the value of the fulfilled promise.

COPY

COPY

```
const  myPromise = new Promise((resolve, reject) => {
    reject(new Error("This result is rejected"))
});

```

The promise is rejected and the error "This result is rejected" will be the value of the rejected promise.

## [](https://abiala.hashnode.dev/understanding-promises-in-javascript#heading-chaining-promises "Permalink")Chaining Promises

The methods used in handling promises is the use of `then()`, `catch()` and `finally()`. The next operation performs after the previous operation has been settled. This allows us to chain the promises, hence performing a series of asynchronous operations.

COPY

COPY

```
const fetchImage1 = new Promise((resolve, reject) => {
    // Asynchronous code
});

const  fetchImage2  =  fetchImage1.then(successHandler, failureHandler);

```

> The `then()`keyword takes one or two arguments e.g. `then(successHandler, failureHandler)` or `then(successHandler)`.

For example, let's consider an asynchronous function that fetches images from a remote server. Then the `src` of each image is added to `imageList` The code is shown below:

COPY

COPY

```
const imageList = [];

fetchImageSrc()
    .then(url => fetch(url))
    .then(res => res.json())
    .then(data => imageList.push(data));

```

The `fetchAPI` takes the URL as an argument and the src of the images is fetched. The returned promise is attached to `.then(res => res.json())` which converts it to a JSON file. This also returns a promise. Then `.then(data => imageList.push(data))` pushes the `src` of the images into the array `imageList` created.

## [](https://abiala.hashnode.dev/understanding-promises-in-javascript#heading-consuming-promises-with-catch "Permalink")Consuming Promises with `catch()`

Whenever the asynchronous operation becomes rejected, you use the `catch()` method to handle errors. Let's consider the code shown below.

COPY

COPY

```
fetchImageSrc()
        .then(url => fetch(url))
        .then(res => res.json())
        .then(data => imageList.push(data))
        .catch(console.log('Could not find image source');

```

In this case, if the promise returned an error, the result shown will be:

COPY

COPY

```
Could not find image source

```

### [](https://abiala.hashnode.dev/understanding-promises-in-javascript#heading-consuming-promises-with-asyncawait-method "Permalink")Consuming Promises with `Async/Await` method

Since ES 2017, an updated method of handling promises is the use of `async` function declaration. This method enables the use of `await` keyword within its function body. This allows us to _await_ the promised result while the asynchronous function is running in the background. The syntax is shown below:

COPY

COPY

```
const  fetchImage = async function() {
    const  res = await fetch(url);
    const data = await res.json()
    console.log(data);
};

fetchImage();

```

When the `fetchImage()` is called, and the promise is settled. The `await fetch(url)` waits for the response to be complete. The value of the await expression will be the value of the promise. Then, the `console.log(data)` logs the JSON object to the console.

### [](https://abiala.hashnode.dev/understanding-promises-in-javascript#heading-error-handling-with-try-and-catch-methods "Permalink")Error Handling with `try()` and `catch()` methods

Handling errors in promises makes it easy to write clean codes. We use the try() and catch() statements. In this case, you define the main code block in the try statement. Then in the case whereby the promise is rejected, you handle the error using the catch() statement.

COPY

COPY

```
const imageList = [];

const fetchImage = async function() {
    try {
        const res = await fetch(url);
        res = await res.json();
        data = imageList.push(data);
    } catch(error) {
        console.log(`No image found ${error}`);
    }
    };

fetchImage();

```

In the example above, the function throws an error if the promises got rejected.

## [](https://abiala.hashnode.dev/understanding-promises-in-javascript#heading-other-promises-methods "Permalink")Other Promises methods

There are other promise methods that can handle one or more promises. They include:

1.  `Promise.race()`
2.  `Promise.all()`
3.  `Promise.any()`
4.  `Promise.allSettled()`
5.  `Promise.resolve()`
6.  `Promise.reject()`

### [](https://abiala.hashnode.dev/understanding-promises-in-javascript#heading-the-promiserace-method "Permalink")The `Promise.race()` method

This method takes an array of promises as an argument and executes them simultaneously. The result of the fastest promise on execution is returned whether resolved or rejected.

### [](https://abiala.hashnode.dev/understanding-promises-in-javascript#heading-the-promiseall-method "Permalink")The `Promise.all()` method

This method waits for all the promises to be resolved. The array containing the result of the resolved promises is returned. If one of the promises reject, then all other promises' result will be ignored, In this case, you can handle the error thrown.

### [](https://abiala.hashnode.dev/understanding-promises-in-javascript#heading-the-promiseany-method "Permalink")The `Promise.any()` method

It returns when any of the promises are resolved, then the value of this promise is returned. It does not wait for another result of other promises.

### [](https://abiala.hashnode.dev/understanding-promises-in-javascript#heading-the-promiseallsettled-method "Permalink")The `Promise.allSettled()` method

This method is quite similar to `Promise.all()` method but it waits for the promises to settle. Then logs the result of the promises whether they are fulfilled or rejected

### [](https://abiala.hashnode.dev/understanding-promises-in-javascript#heading-the-promiseresolve-method "Permalink")The `Promise.resolve()` method

This method returns a new Promise object that is resolved with a given value or a resolved promise if the given value is already a promise.

### [](https://abiala.hashnode.dev/understanding-promises-in-javascript#heading-the-promisereject-method "Permalink")The `Promise.reject()` method

This method returns a new Promise object that is rejected for a reason. The error thrown by this rejection can be handled using `catch()` method.

In my next article, we will fully examine these methods.

## [](https://abiala.hashnode.dev/understanding-promises-in-javascript#heading-conclusion "Permalink")Conclusion

Wow! It's good to still have you here. I hope you were able to pick some things about Promises. I can't wait to see you use them on your next project. By using Promises effectively, you can write asynchronous code that is easier to read, debug and maintain. In this article, we were able to learn how Promises work in JavaScript, the syntax, how to create promises as well as best practices for using them.
