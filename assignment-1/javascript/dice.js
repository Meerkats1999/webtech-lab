function Dice() {
    var diceRange = document.getElementById("diceRange").value.split('d')
    alert(diceRange)
    var initialVal, finalVal;
    var modVal = diceRange[1].slice(1, 3)
    var numDice = diceRange[0];

    if (numDice == "") {
        initialVal = eval(1 + modVal)
    }
    else {
        initialVal = eval(numDice + modVal)
    }

    if (numDice > 1) {
        finalVal = eval(numDice * 6 + modVal)
    } else {
        if (numDice == 0) {
            finalVal = eval(numDice + modVal)
        } else {
            finalVal = eval(diceRange[1])
        }
    }

}