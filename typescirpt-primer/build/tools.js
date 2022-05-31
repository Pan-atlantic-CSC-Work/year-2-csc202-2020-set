"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
function log(output) {
    console.log(output);
}
exports.default = log;
class Person {
    constructor(firstName, lastName, gender, height = -1, hobbies = [], birthday = undefined, isAlive = true) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.height = height;
        this.hobbies = hobbies;
        this.birthday = birthday;
        this.isAlive = isAlive;
    }
}
exports.Person = Person;
;
//# sourceMappingURL=tools.js.map