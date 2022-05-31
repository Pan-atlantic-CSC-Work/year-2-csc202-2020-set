"use strict";
exports.__esModule = true;
exports.Person = void 0;
function log(output) {
    console.log(output);
}
exports["default"] = log;
var Person = /** @class */ (function () {
    /*
     constructor(firstName: string, lastName: string, gender: string, height: number = -1, hobbies: string[] = [], birthday: any = undefined, isAlive: boolean = true){
     this.firstName = firstName;
     this.lastName = lastName;
     this.gender = gender;
     this.height = height;
     this.hobbies = hobbies;
     this.birthday = birthday;
     this.isAlive = isAlive;
     }
     */
    function Person(personData) {
        this.firstName = personData.firstName;
        this.lastName = personData.lastName;
        this.gender = personData.gender;
        this.height = personData.height;
        this.hobbies = personData.hobbies;
        this.birthday = personData.birthday;
        this.isAlive = personData.isAlive;
    }
    return Person;
}());
exports.Person = Person;
;
