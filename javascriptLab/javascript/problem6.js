function soup() {
  str = document.getElementById("someText").value;
  alert(
    str
      .split("")
      .sort()
      .join("")
  );
}

function replaceDigit(){
  str = document.getElementById("someText").value;
  alert(str.replace(/[0-9]/, "$"));
}
