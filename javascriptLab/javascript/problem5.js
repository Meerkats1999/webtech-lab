function calcArea() {
  firstSide = document.getElementById("firstSide").value;
  secondSide = document.getElementById("secondSide").value;
  thirdSide = document.getElementById("thirdSide").value;
  semiPerimeter = (firstSide + secondSide + thirdSide) / 2;
  triangleArea = Math.sqrt(
    semiPerimeter *
      (semiPerimeter - firstSide) *
      (semiPerimeter - secondSide) *
      (semiPerimeter - thirdSide)
  );
  alert(triangleArea);
}
