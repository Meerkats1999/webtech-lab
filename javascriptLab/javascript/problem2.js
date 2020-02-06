function calculateAge(yearofbirth) {
  var age = 2016 - yearofbirth;
  return age;
}
var ageJohn = calculateAge(1990);
console.log(ageJohn);

function yearUntilRetirement(name, yearofbirth) {
  var age = calculateAge(yearofbirth);
  var retirement = 65 - age;
  console.log(retirement);
}
yearUntilRetirement("John", 1990);
