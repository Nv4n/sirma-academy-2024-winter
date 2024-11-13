//@ts-check

//05 - Closure for Data Privacy

function createPrivateCounter() {
    let count = 0;
    return {
        increment() {
            count++;
        },
        getCount() {
            return count;
        },
    };
}

const counter = createPrivateCounter();
counter.increment();
console.log(counter.getCount()); // Output: 1
