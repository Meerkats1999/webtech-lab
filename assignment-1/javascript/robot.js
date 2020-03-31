var commands = [];

function fetchCommands(){
    var value = document.getElementById("commands").value; 
    commands.push(value);
}

function displayFinalPosition(){
    alert(commands)
}