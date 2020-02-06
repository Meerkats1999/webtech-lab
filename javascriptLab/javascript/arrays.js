var names = ["John", "Jane", "Mark"];
var years = new Array(1990, 1968, 1948);
console.log(names[0]);
console.log(years);

var john = [name[0], "smith", 1990, "teacher", false];
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

console.log(john.indexOf(1990));
