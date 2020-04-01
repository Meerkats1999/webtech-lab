function displayFinalPosition() {

    var commands = [];
    var value = document.getElementById("commands").value;
    commands = value.split(',').map(function(i){
        return parseInt(i, 10);
    })
    var n = commands.length;
    var count = 1;
    var x = y = 0;

    for(i=0;i<n;i++){
        if(i+1==Math.pow(count,2) - 2*count + 4){
            count++;
            if(i%2==0){
                x -= commands[i];
            }
            else{
                y -= commands[i];
            }
        }
        else{
            if(i%2==0){
                x += commands[i];
            }
            else{
                y += commands[i];
            }
        }

    }

    alert(`${x},${y}`);
}
