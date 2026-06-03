
function makeCounter(start = 0) {
    let count = start;
    return {
        increment() { count++ },  // This is a function
        decrement() { count-- },  // This is a function
        get() { return count; }   // This is a function
    }
}

let counter = makeCounter(0);
counter.increment();
counter.increment();
counter.increment();
console.log(counter.get())
counter.decrement();
console.log(counter.get())

