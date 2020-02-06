var names = ["John", "Jane", "Mark"];
var years = new Array(1990, 1968, 1948);
console.log(names[0]);
console.log(years);

var john = ["John", "smith", 1990, "teacher", false];
console.log(john);
console.log(john[1]);

john.push("blue");
console.log(john);

john.unshift("Wilhelm");
console.log(john);

john.pop();
console.log(john);

john.shift();
console.log(john);

john.splice(2, 0, "Ram", "Lakshman");
console.log(john);

john.splice(0, 2);
console.log(john);

var john1 = john.slice(2);
console.log(john1);

var john1 = john.slice(1,3);
console.log(john1);

console.log(john.toString())

