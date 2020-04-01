function completeWord() {

    var input1 = document.getElementById("word1").value;
    var input2 = document.getElementById("word2").value;
    var word1 = input1.split('');
    var word2 = input2.split('');

    var pointer = 0;
    for (i = 0; i < word2.length; i++) {
        var index = word1.indexOf(word2[i])
        if (index > -1) {
            if (index > 0) {
                pointer = 1;
            }
            word1.splice(index, 1)
        }
    }

    if (word1.length > 0 || pointer == 1) {
        alert('False')
    } else {
        alert('True')
    }
}