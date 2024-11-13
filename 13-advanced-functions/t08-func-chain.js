//@ts-check

// 08 - Function Chaining

const stringManipulator = {
    value: "",
    setValue(text) {
        this.value = text;
        return this;
    },
    toUpperCase() {
        this.value = this.value.toUpperCase();
        return this;
    },
    toLowerCase() {
        this.value = this.value.toLowerCase();
        return this;
    },
    print() {
        console.log(this.value);
        return this;
    },
};

stringManipulator.setValue("Hello").toUpperCase().print().toLowerCase().print();
// HELLO
// hello
