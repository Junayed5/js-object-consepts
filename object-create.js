// 1.Using objrcts literal
const student = {name:"Sakib AL Hasan", job:'cricketer'}

// 2.Using object constractor
const person = new Object();
console.log(person);

// 3 
// const human = Object.create(null);
const human = Object.create(student);
console.log(human.name);

//Class type object (syntectical sugar)

class People {
    constructor(name, age) {
        this.name = name;
        this.age  = age;
    }
}

const person2 = new People('Manus',12)
console.log(person2);