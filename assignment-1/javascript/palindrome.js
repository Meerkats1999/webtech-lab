var numArray = []; 
var palArray = [];
var notPalArray = [];

function fetchDataPalindrome(){ 
    var value = document.getElementById("palNum").value; 
    var number = value.toString();
    numArray.push(number);
}

function isPalindrome(number){
    var l = 0; 
    var h = number.length - 1; 
  
    while (h > l) 
        if (number[l++] != number[h--]) 
            return false; 
  
    return true; 
}

function isAlmostPalindrome(number){
    if (isPalindrome(number)) 
        return true; 
  
    var n = number.length; 
    for (i = 0; i < n - 1; i++) { 
        var str1 = number.substr(i + 1, n - i - 1); 
        var str2 = number.substr(0, i + 1); 
  
        if (isPalindrome(str1.concat(str2))) 
            return true 
    } 
    return false; 
}

function displayPalindrome(){
    
    len = numArray.length;

    //Checks for Palindrome
    for(i=0;i<len;i++){
        if(isPalindrome(numArray[i])){
            palArray.push(numArray[i])
        }
        else{
            notPalArray.push(numArray[i])
        }
    }

    // Checks for Almost Palindrome
    if(notPalArray.length != 0){
        for(i=0;i<len;i++){
            if(isAlmostPalindrome(notPalArray[i])){
                palArray.push(notPalArray[i])
            }
        }
    }
    
	alert(palArray)
}