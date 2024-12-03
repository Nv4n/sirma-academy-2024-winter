//@ts-check

let cloner = {
    extendObj: function (obj) {
        Object.keys(obj).forEach((key) => {
            if (typeof obj[key] !== "function") {
                this[key] = obj[key];
            } else {
                Object.getPrototypeOf(this)[key] = obj[key];
            }
        });
        return this;
    },
};

let obj = {
    test: 32,
    hell: "232dasdaqs",
    test2: () => {
        return "you did it";
    },
    test3: function (params) {},
};
console.log(Object.keys(obj));
cloner.extendObj(obj);
console.log(cloner);
console.log(cloner.test2());
