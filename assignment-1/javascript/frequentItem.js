var numArray = [];

function fetchDataFrequent(){ 
    var value = document.getElementById("frequentNum").value; 
    numArray = value.split(",");
}

function displayFrequent(){
    numArray.sort()
    n = numArray.sort()

    var max_count = 1, res = numArray[0], curr_count = 1;

    for (i = 1; i < n; i++) { 
        if (numArray[i] == numArray[i - 1]) 
            curr_count++; 
        else { 
            if (curr_count > max_count) { 
                max_count = curr_count; 
                res = numArray[i - 1]; 
            } 
            curr_count = 1; 
        } 
    }
    
    if (curr_count > max_count) 
    { 
        max_count = curr_count; 
        res = numArray[n - 1]; 
    }
    
    alert(res)
}