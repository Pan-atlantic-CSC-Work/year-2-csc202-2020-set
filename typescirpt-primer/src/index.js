"use strict";
exports.__esModule = true;
//fix error to show on ts-node command
var tools_1 = require("./tools");
//Accessing object properties
/*let firstName = "Pius";
let lastName = "Onobhayedo";
let gender = "male";
let height = 1.7;
let hobbies = ['Tennis','Programming'];
let birthday = new Date(1900,4,5);
let isAlive = true;
let person1 = new Person(firstName, lastName, gender, height, hobbies, birthday, isAlive);
let person2 = new Person("Mary","Joseph","female");*/
var person1Data = {
    firstName: "Pius",
    lastName: "Onobhayedo",
    gender: "Male",
    height: "1.5",
    hobbies: [],
    birthday: new Date(1900, 10, 10),
    isAlive: true
};
var person2Data = {
    firstName: "Mary",
    lastName: "Joseph",
    gender: "Female",
    hobbies: ['Work', 'Pray', 'Play'],
    isAlive: true
};
var person1 = new tools_1.Person(person1Data);
var person2 = new tools_1.Person(person2Data);
(0, tools_1["default"])("Person 1 is ".concat(person1.height, " whose height is ").concat(person1.height, " and birthday is ").concat(person1.birthday.toLocaleDateString()));
(0, tools_1["default"])("Person 1 is ".concat(person1.firstName, " whose height is ").concat(person1.height, " and birthday is ").concat(person1.birthday.toLocaleDateString(), " and hobbies are ").concat(person1.hobbies.length == 0, "'not yet set':person1.hobbies}. \n    Person 2 is ").concat(person2.firstName, " whose height is ").concat(person2.height, " and hobbies are ").concat(person2.hobbies.length == 0 ? 'not yet set' : person2.hobbies));
