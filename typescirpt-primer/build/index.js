"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//fix error to show on ts-node command
const tools_1 = __importStar(require("./tools"));
//Accessing object properties
let firstName = "Pius";
let lastName = "Onobhayedo";
let gender = "male";
let height = 1.7;
let hobbies = ['Tennis', 'Programming'];
let birthday = new Date(1900, 4, 5);
let isAlive = true;
let person1 = new tools_1.Person(firstName, lastName, gender, height, hobbies, birthday, isAlive);
let person2 = new tools_1.Person("Mary", "Joseph", "female");
(0, tools_1.default)(`Person 1 is ${person1.firstName} whose height is ${person1.height} and birthday is ${person1.birthday.toLocaleDateString()} and hobbies are ${person1.hobbies}. <br/>Person 2 is ${person2.firstName} whose height is ${person2.height} and hobbies are ${person2.hobbies}`);
//# sourceMappingURL=index.js.map