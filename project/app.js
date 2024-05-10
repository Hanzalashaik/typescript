"use strict";
function add(num1, num2, isAdd, phrase) {
    if (isAdd) {
        console.log(phrase, num1 + num2);
    }
    else {
        return num1 + num2;
    }
}
const resultPhrase = "the addition of two number is :";
add(2, 23, true, resultPhrase);
//objects
const obj = {
    name: "hanzala",
    age: 44,
};
console.log(obj.age);
//tuples
const obj1 = {
    name: "hanzala",
    age: 44,
    hobbies: ["Sport", "Cooking"],
    role: [2, "author"],
};
// obj1.role.push("admin");
obj1.role[2] = 3;
console.log(obj1);
//Enum
//enum is a set of constants
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var obj2 = {
    name: "hanzala",
    age: 44,
    hobbies: ["Sport", "Cooking"],
    role: Role.ADMIN,
};
if (obj2.role === Role.ADMIN) {
    console.log("is admin");
}
//union types
function combine(input1, input2) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combineAges1 = combine(30, 90);
console.log(combineAges1);
const combineNames1 = combine("hanzala", " shaikh");
console.log(combineNames1);
function combinable(input1, input2) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combineAges = combine(30, 90);
console.log(combineAges);
const combineNames = combine("hanzala", " shaikh");
console.log(combineNames);
//unknown type
let userInput1;
let userName;
// userInput1 = 5;
userInput1 = "Max";
if (typeof userInput1 === "string") {
    userName = userInput1;
    console.log(userName);
}
//never type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occured!", 502);
