//01 - Custom Iterator

const obj = {
    a: "apple",
    b: "banana",
    c: "cherry",
};

obj[Symbol.iterator] = function () {
    let ind = 0;
    let keys = Object.keys(this);

    return {
        /**
         *
         * @returns {IteratorResult<string , undefined>}
         */
        next: () => {
            if (ind < keys.length) {
                return { value: this[keys[ind++]], done: false };
            } else {
                return { value: undefined, done: true };
            }
        },
    };
};

//02 - Fibonacci Generator

// for (const value of obj) {
//     console.log(value);
// }

function* fibonacci() {
    let prev = 0;
    let curr = 1;
    while (true) {
        let next = prev + curr;
        yield curr;
        prev = curr;
        curr = next;
    }
}

// const fib = fibonacci();
// console.log(fib.next().value); // 1
// console.log(fib.next().value); // 1
// console.log(fib.next().value); // 2

// 03 - Create custom iterator

function OddIterator(arr) {
    let i = 0;
    let inner = [...arr];
    return {
        /**
         *
         * @returns {IteratorResult<number,undefined>}
         */
        next: () => {
            for (; i < inner.length; i++) {
                if (inner[i] % 2 !== 0)
                    return { value: inner[i++], done: false };
            }
            return { value: undefined, done: true };
        },
        [Symbol.iterator]() {
            return this;
        },
    };
}

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const oddValues = new OddIterator(arr);
// for (const value of oddValues) {
//     console.log(value);
// }

//04 - Range Generator

function* createRange(start, end) {
    let curr = start;
    while (curr <= end) {
        yield curr;
        curr++;
    }
}

// const rangeGen = createRange(2, 6);
// console.log(rangeGen.next().value);
// console.log(rangeGen.next().value);

//05 - Infinite Sequence
function* SequenceGenerator() {
    let curr = 1;
    while (true) {
        yield curr++;
    }
}

// let seqGen = SequenceGenerator();
// console.log(seqGen.next());
// console.log(seqGen.next());
// console.log(seqGen.next());
// console.log(seqGen.next());

//06 - Reverse Iterator

function ReverseIterator(arr) {
    let ind = arr.length - 1;
    let cloned = [...arr];
    return {
        next: () => {
            if (ind >= 0) {
                return { value: cloned[ind--], done: false };
            } else {
                return { value: undefined, done: true };
            }
        },
        [Symbol.iterator]() {
            return this;
        },
    };
}

// const iterable = ReverseIterator([1, 2, 3]);
// console.log([...iterable].join(", "));

//07 - Prime Number Generator

function* PrimeGenerator() {
    let primes = [];
    let curr = 2;

    while (true) {
        for (let index = 0; index < primes.length; index++) {
            if (curr % primes[index] === 0) {
                index = -1;
                curr++;
                continue;
            }
        }
        yield curr;
        primes.push(curr);
        curr++;
    }
}

// const gen = PrimeGenerator();
// gen.return;
// for (let i = 0; i < 20; i++) {
//     console.log(gen.next().value);
// }

//08 - Combination Generator
/**
 *
 * @param {any[]} arr
 */
function* CombinationGenerator(arr) {
    let cloned = [...arr];

    /** @type {any[][]} */
    let groups = [];
    const combinations = (prefix, remaining, start) => {
        if (prefix.length > 0) {
            groups.push(prefix);
        }

        for (let i = start; i < remaining.length; i++) {
            combinations(prefix.concat(remaining[i]), remaining, i + 1);
        }
    };

    combinations([], cloned, 0);
    groups.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        }
        return a.join("").localeCompare(b.join(""));
    });

    for (let index = 0; index < groups.length; index++) {
        yield groups[index];
    }
}

// const test = CombinationGenerator(["a", "b", "c"]);
// console.log([...test].join(", "));

//09 - Skipping Iterator

/**
 *
 * @param {any[]} arr
 */
function SkippingIterator(arr) {
    let cloned = [...arr];
    let ind = 0;
    return {
        next: () => {
            if (ind < cloned.length) {
                let currInd = ind;
                ind += 2;
                return { value: cloned[currInd], done: false };
            } else {
                return { value: undefined, done: true };
            }
        },
        [Symbol.iterator]() {
            return this;
        },
    };
}

// let skip = SkippingIterator(["a", "b", "c", "d"]);
// console.log([...skip].join(", "));

//10 - Array Flatten Generator

/**
 *
 * @param {any[]} arr
 */
function* FlattenGenerator(arr) {
    let flatten = [];

    const flatArray = (arr) => {
        if (!Array.isArray(arr)) {
            flatten.push(arr);
            return;
        }
        for (let index = 0; index < arr.length; index++) {
            flatArray(arr[index]);
        }
    };

    flatArray(arr);
    for (let index = 0; index < flatten.length; index++) {
        yield flatten[index];
    }
}

// let flatten = FlattenGenerator(["a", ["b", "c"], ["d", "e"]]);
// console.log([...flatten].join(", "));

//11 - Char Code Generator

/**
 *
 * @param {string} text
 */
function* CharCodeGenerator(text) {
    for (let index = 0; index < text.length; index++) {
        yield text.charCodeAt(index);
    }
}

// let charCodes = CharCodeGenerator("cd");
// console.log([...charCodes].join(", "));

//12 - Power of Two Generator

function* PowerOfTwoGenerator() {
    let curr = 1;
    while (true) {
        yield curr;
        curr *= 2;
    }
}

// let powerOfTwo = PowerOfTwoGenerator();
// for (let index = 0; index < 10; index++) {
//     console.log(powerOfTwo.next().value);
// }

//13 - Filtered Iterator

/**
 *
 * @param {any[]} arr
 * @param {function(any):boolean} filter
 */
function FilteredIterator(arr, filter) {
    let filtered = arr.filter(filter);
    let ind = 0;
    return {
        next: () => {
            if (ind < filtered.length) {
                return { value: filtered[ind++], done: false };
            } else {
                return { value: undefined, done: true };
            }
        },
        [Symbol.iterator]() {
            return this;
        },
    };
}

// let filtered = FilteredIterator([1, 2, 3, 4, 5], (x) => x % 2 === 0);
// console.log([...filtered].join(", "));

//14 - Chained Generators

/**
 *
 * @param {Generator} gen
 */
function* ChainGenerator(gen) {
    yield 5;
    yield 6;
    yield* gen;
}

function* ChainedGenerator() {
    yield 7;
    yield 8;
}

// console.log([...ChainGenerator(ChainedGenerator())].join(", "));

//15 - Queue Iterator
/**
 *
 * @param {any[]} arr
 */
function QueueIterator(arr) {
    let cloned = [...arr];
    let ind = 0;
    return {
        next: () => {
            if (ind < cloned.length) {
                return { value: cloned[ind++], done: false };
            } else {
                return { value: undefined, done: true };
            }
        },
        [Symbol.iterator]() {
            return this;
        },
    };
}

// let queuing = new QueueIterator([1, 2, 3]);
// console.log([...queuing].join(", "));

//16 - Stack Generator

/**
 *
 * @param {any[]} arr
 */
function* StackGenerator(arr) {
    let cloned = [...arr];

    for (let ind = cloned.length - 1; ind >= 0; ind--) {
        yield cloned[ind];
    }
}

// let stackGen = StackGenerator([1, 2, 3]);
// console.log([...stackGen].join(", "));

//17 - Slice Iterator

/**
 *
 * @param {any[]} arr
 * @param {number} start
 * @param {number} end
 */
function SliceIterator(arr, start, end) {
    let cloned = arr.slice(start, end + 1);
    let ind = 0;
    return {
        next: () => {
            if (ind < cloned.length) {
                return { value: cloned[ind++], done: false };
            } else {
                return { value: undefined, done: true };
            }
        },
        [Symbol.iterator]() {
            return this;
        },
    };
}

// let arr = [1, 2, 3, 4, 5];
// let sliceIterator = SliceIterator(arr, 1, 3);

// console.log([...sliceIterator].join(", "));
// console.log(arr);

//18 - Repeat Generator

/**
 *
 * @param {any} value
 * @param {number} repeat
 */
function* RepeatGenerator(value, repeat) {
    for (let ind = 0; ind < repeat; ind++) {
        yield value;
    }
}

// let repeated = RepeatGenerator(2, 3);
// console.log([...repeated].join(", "));

//19 - Pattern Generator

/**
 *
 * @param {any[]} pattern
 * @param {number} repeat
 */
function* PatternGenerator(pattern, repeat) {
    for (let ind = 0; ind < repeat; ind++) {
        yield pattern;
    }
}

// let repeated = PatternGenerator([1, 2, 3], 2);
// console.log([...repeated].join(", "));

//20 - Decimal to Binary Converter

/**
 *
 * @param {number} value
 * @returns {string}
 */
function toBinary(value) {
    let binary = "";
    if (value === 0) {
        return "0";
    }
    while (value > 0) {
        let currDigit = value % 2;
        binary = `${currDigit}${binary}`;
        value = Math.floor(value / 2);
    }
    return binary;
}

// console.log(toBinary(6));

//21 - Map Iterator

/**
 *
 * @param {Map} map
 */
function MapIterator(map) {
    let keyValues = map.entries();
    return {
        next: () => {
            let curr = keyValues.next();
            if (!curr.done) {
                return {
                    value: `${curr.value[0]}-${curr.value[1]}`,
                    done: false,
                };
            } else {
                return { value: undefined, done: true };
            }
        },
        [Symbol.iterator]() {
            return this;
        },
    };
}

// let mapData = new Map([
//     [1, "a"],
//     [2, "b"],
//     [3, "c"],
// ]);
// let mapIterator = MapIterator(mapData);
// console.log([...mapIterator].join(", "));

//22 - Set Comprehension

/**
 * @generator
 * @template T
 * @param {Set<T>} set
 * @param {(val:T)=>T} func
 */
function* SetComprehension(set, func) {
    let newVals = [...set.values()].map(func);
    yield new Set(newVals);
}

// let set = new Set([1, 2, 3, 4, 5]);
// let setComprehension = SetComprehension(set, (x) => x * 2);

// console.log([...setComprehension.next().value].join(", "));
// console.log(set);

//23 - Value Transformation Generator

/**
 * @template T
 * @param {T[]} arr
 * @param {(T)=>any} transform
 */
function* ValueTransformGen(arr, transform) {
    let cloned = [...arr];
    for (let ind = 0; ind < cloned.length; ind++) {
        yield transform(cloned[ind]);
    }
}

// let arr = [1, 2, 3];
// let transformator = ValueTransformGen(arr,(x)=>x*2);
// console.log([...transformator].join(", "));

//24 - Pagination Iterator

/**
 * @template T
 * @param {T[]} arr
 * @param {number} pageSize
 */
function PaginationIterator(arr, pageSize) {
    let cloned = [...arr];
    let start = 0;
    let end = pageSize;
    let page = 1;
    return {
        next: () => {
            if (start < cloned.length) {
                let copy = cloned.slice(start, end);
                start = end;
                end += pageSize;

                return { value: { page: page++, values: copy }, done: false };
            } else {
                return { value: undefined, done: true };
            }
        },
        [Symbol.iterator]() {
            return this;
        },
    };
}

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let paginated = PaginationIterator(arr, 3);
// console.log(
//     [...paginated]
//         .reduce(
//             (output, curr) => `${output}, page ${curr.page}: ${curr.values}`,
//             ""
//         )
//         .replace(", ", "")
// );
