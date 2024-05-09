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
obj1.role.push("admin");
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
