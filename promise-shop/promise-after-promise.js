'use strict';

const firstPromise = first();

const secondPromise = first().then((newPromise) => second(newPromise))

secondPromise.then(console.log)
