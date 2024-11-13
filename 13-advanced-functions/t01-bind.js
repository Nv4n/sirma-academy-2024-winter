//@ts-check

//01 - Using bind to Set this

const obj1 = {
    name: "Alice",
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    },
};

const obj2 = {
    name: "Bob",
};

obj1.greet();
obj2.greet = obj1.greet.bind(obj2);
obj2.greet();
