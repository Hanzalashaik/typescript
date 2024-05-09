function add(num1, num2, isAdd, phrase) {
    if (isAdd) {
        console.log(phrase, num1 + num2);
    }
    else {
        return num1 + num2;
    }
}
var resultPhrase = "the addition of two number is :";
add(2, 23, true, resultPhrase);
//objects
var obj = {
    name: "hanzala",
    age: 44
};
console.log(obj.age);
//tuples
var obj1 = {
    name: "hanzala",
    age: 44,
    hobbies: ['Sport', 'Cooking'],
    role: [2, 'author']
};
obj1.role.push('admin');
obj1.role[2] = 3;
console.log(obj1);
//Enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var obj2 = {
    name: "hanzala",
    age: 44,
    hobbies: ["Sport", "Cooking"],
    role: Role.ADMIN,
};
if (obj2.role === Role.ADMIN) {
    console.log("is admin");
}
