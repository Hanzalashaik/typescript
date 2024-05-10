function add(num1: number, num2: number, isAdd: boolean, phrase: string) {
  if (isAdd) {
    console.log(phrase, num1 + num2);
  } else {
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
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
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

function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
const combineAges1 = combine(30, 90);
console.log(combineAges1);

const combineNames1 = combine("hanzala", " shaikh");
console.log(combineNames1);

// type alias

type Combinable = number | string;

function combinable(input1: Combinable, input2: Combinable) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAges = combine(30, 90);
console.log(combineAges);

const combineNames = combine("hanzala", " shaikh");
console.log(combineNames);

//unknown type
let userInput1: unknown;
let userName: string;

// userInput1 = 5;
userInput1 = "Max";
if (typeof userInput1 === "string") {
  userName = userInput1;
  console.log(userName);
}

//never type
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occured!", 502);
