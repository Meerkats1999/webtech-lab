var str = "You truly are the lowest scum in history";

console.log(str.length);
console.log(str.indexOf("scum"));
console.log(str.indexOf("scum",5));
console.log(str.lastIndexOf("scum"));
console.log(str.lastIndexOf("scum",32));
console.log(str.search("scum"));
console.log(str.slice(3));
console.log(str.substring(7,13));
console.log(str.substr(7,13));
console.log(str.substr(-14));

var str1 = "You truly are a unreliable guy";
console.log(str1.replace("unreliable","reliable"));
console.log(str1.replace(/UNRELIABLE/i, "reliable"));
console.log(str1.toUpperCase())

console.log(str1.concat(" ", str));

var str2 = "      Empty space";
console.log(str2.trim());

console.log(str.charCodeAt(0));
console.log(str.charAt(0));


//str1 = "Abhrajyoti is a brilliant guy and he is dead";
//console.log(str.lastIndexOf("is"));