// Exercise 1
const greeter = (myArray, counter) => {
    var greetText = "Hello ";
    for (let x of myArray) {
        console.log(greetText + x)
    }
}
console.log("---Exercise 1---")
greeter(['Randy Savage', 'Ric Flair', 'Hulk Holgan'], 3);

// Exercise 2
const capitalize = ([firstLetter, ...restOfWord]) => { return firstLetter.toUpperCase() + restOfWord.join("") };
console.log("\n---Exercise 2---")
console.log(capitalize('fooBar'));
console.log(capitalize('nodeJS'));

// Exercise 3
const colors = ['red', 'green', 'blue']
const capitalizedColors = colors.map(x => capitalize(x));
console.log("\n---Exercise 3---")
console.log(capitalizedColors)

// Exercise 4
var values = [1, 60, 34, 30, 20, 5]
const filterLessThan20 = values.filter((value) => value < 20);
console.log("\n---Exercise 4---")
console.log(filterLessThan20)

// Exercise 5
var array = [1, 2, 3, 4]
const calculateSum = array.reduce((previousValue, currentValue) => previousValue + currentValue);
const calculateProduct = array.reduce((previousValue, currentValue) => previousValue * currentValue);
console.log("\n---Exercise 5---")
console.log(calculateSum);
console.log(calculateProduct);

// Exercise 6
console.log("\n---Exercise 6---")
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    details() {
        return('Model: ' + this.model + ' Engine ' + this.year);
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }
    info() {
        return(this.model + ' has a balance of $' + this.balance);
    }
}

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());
const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());