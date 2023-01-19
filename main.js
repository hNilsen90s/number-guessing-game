// Learning about arrays in javascript

// Create an array
/*
const varer = ['banana', 'grape', 'apple', 'orange'];
varer.push('eple');
varer.push('🎄');

console.log(varer.slice(0,2))
// console.log(varer);
*/

/*
const person = {
    name: "Henrik",
    shirt: "white",
    age: 30,
    gender: "male",
    hobbies: ["basketball", "swimming", "running"],
}

const person2 = {
    name: "Qazi",
    shirt: "black",
    age: 20,
    gender: "female",
    phone: "555-555-5555",
}

const introducer = (name, shirt) => {
    const person = {
        name: name,
        shirt: shirt,
    }
    console.log(`${person.name} has a ${person.shirt} shirt.`);
}

introducer(person.name, person.shirt);
*/

/*
const car = (brand, hp, tuning) => {
    const car = {
        brand: brand,
        hp: hp,
        tuning: function() {
            return this.hp + tuning
        }
    }
    console.log(`${car.brand} has ${car.hp} hp. We just tuned the car, so it now has more hp. It has ${car.tuning()}`);
}

car('Audi', 100, 1000);
*/

// const varer = ['banana', 'apple', 'grape', 'peach', 'orange', 'pear']
// var tracker = 1;
/*
for (let i = 0; i < varer.length; i++) {
    console.log(`Vare: ${tracker} - ${varer[i]}`)
    tracker++;
}*/

/*
for (const vare of varer) {
    console.log(vare)
}*/

/*
const calc = (array) => {
    let sum = 0;
    for (const num of array) {
        sum += num
    }
    return sum;
}

const numbers = [1, 2, 3, 4, 5, 6]

/*
for (const number of numbers) {
    console.log(number)
}*/

// console.log(calc(numbers))

/*
const numbers = [1, 2, 3, 4, 5, 6]
let result = []

for (const number of numbers) {
    console.log(result.push(number * 2))
}

console.log(result)
*/

/*
const howManyLetters = (sentence) => {

    let letters = 0;
    for (const index in sentence) {
        letters = Number(index) + 1
    }
    return letters;

}

const sentence = "Det var en gang en liten mann som skulle gå over en bro."
console.log(howManyLetters(sentence))
*/

// const array = [11,2,63,54,111145,6,71,8,100,102,3981]

// Find the biggest number inside of an array

/*
const max = (numbers) => {
 
    let higestNumber = 0;
    for (const number of numbers) {
        if (number > higestNumber) {
            higestNumber = number;
        }
    }

    return higestNumber;
}

console.log(max(array))
*/

// Finding the frequanche inside a string

/*
const letterFrequency = (phrase) => {
    phrase = phrase.trim()
    phrase = phrase.replaceAll(' ', '')

    let letterFrequency = {};
    for (const letter of phrase) {
        if (!letterFrequency[letter]) {
            letterFrequency[letter] = 1;
        } else {
            letterFrequency[letter] += 1;
        }
    }
    return letterFrequency;
}

const phrase = "Det var en gang en liten mann som skulle gå en kul tur, men så skjedde det noe rart"

console.log(letterFrequency(phrase))

*/

/*
let person1 = {
    name: "Henrik",
    age: 30,
    gender: "male",
    money: 10000
}

let person2 = {
    name: "Vilde",
    age: 29,
    gender: "female",
    money: 10000
}

const takeMoney = (person, amount) => {
    
    if (person.money >= amount) {
        person.money -= amount;
    } else {
        console.log("Not enough money");
    }

    return person;

}

const giveMoney = (person, amount) => {
    person.money += amount;
    console.log("Updated balance: " + person.money);
    return person
}

console.log(person1.money)
person1 = takeMoney(person1, 100)
console.log(person1.money)
person1 = giveMoney(person1, 10000000)
console.log(person1.money)
*/

/*
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers.map(numbers => {
    console.log(numbers)
    console.log("Haha")
})
*/

/*
const numbers = [1,2,3,4,5,6,7,8]

const filter = (numbers, graterThan) => {
    const result = [];
    numbers.map(number => {
        if (number > graterThan) {
            result.push(number)
        }
    })
    return result;
}

// console.log(filter(numbers, 3))

console.log(numbers.filter(num => num > 3 || num == 1))
*/

/*
const skuespillere = [
    { name : "Henrik", "Networth": 1000000},
    { name : "Vilde", "Networth": 1000},
    { name : "Leo", "Networth": 100},
    { name : "Ida", "Networth": 100000},
    { name : "Yvonne", "Networth": 1000000},
]

const result = skuespillere.filter(skuespiller => skuespiller.Networth >= 1000)
let names = result.map(person => person.name).join(", ")
console.log(names)
*/

const products = [
    { title : "Xbox", price : 4000 },
    { title : "Playstation", price : 5000 },
    { title : "Xbox 360", price : 2000 },
    { title : "PS4", price : 1000 },
    { title : "PS5", price : 1500 },
    { title : "Nintendo", price : 2000 },
]

// Get all products with a price below certian number
const filterProductsByPrice = (products, productsBelowPrice) => {
    const result = products.filter(product => product.price <= productsBelowPrice)
    return result;
}

const result = filterProductsByPrice(products,2500)

let numProducts = 0
result.map(numbers => numProducts = numProducts + 1)

console.log("Number of products found " + numProducts)
console.log(result)