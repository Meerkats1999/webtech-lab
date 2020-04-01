function lastNameSort() {
    var names = document.getElementById('name').value.split(',');
    var order = document.getElementById('order').value;

    if(order == "ASC"){
        var sorted = names.sort(compare);
    }
    else{
        var sorted = names.sort(compare).reverse();
    }
    alert(sorted)
}


function compare(a, b) {
    var splitA = a.split(" ");
    var splitB = b.split(" ");
    var lastA = splitA[splitA.length - 1];
    var lastB = splitB[splitB.length - 1];

    if (lastA < lastB) return -1;
    if (lastA > lastB) return 1;
    return 0;
}

