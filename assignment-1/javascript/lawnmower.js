function finalHeight() {
    var grassHeights = document.getElementById("grassHeight").value.split(',').map(function (i) {
        return parseInt(i, 10);
    })
    var cutHeights = document.getElementById("cutHeight").value.split(',').map(function (i) {
        return parseInt(i, 10);
    })
    var tempHeights = grassHeights
    var flag = 0;

    for(i=0;i<cutHeights.length;i++){
        for(j=0;j<grassHeights.length;j++){
            grassHeights[j] = grassHeights[j] - cutHeights[i];
            if(grassHeights[j]==0 || grassHeights[j]<0){
                flag = 1;
                break;
            }
        }
        if(flag==1){
            grassHeights = tempHeights;
            break;
        }
        else{
            tempHeights = grassHeights;
        }

    }

    alert(grassHeights)
}