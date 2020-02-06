var friendName = [];
var friendAge = [];
var friendHeight = [];
var scores = [];
for (var i = 0; i < 3; i++) {
  friendName[i] = prompt("Name of friend");
  friendAge[i] = prompt("Age of friend");
  friendHeight[i] = prompt("Height of friend");
  scores[i] = friendHeight[i] + friendAge[i] * 5;
}

if (scores[0] > scores[1]) {
  console.log(friendName[0] + " winner");
} else {
  console.log(friendName[1] + " winner");
}
