var num1 = Math.random();
num1 *= 6;
num1 = Math.floor(num1) + 1;

var image1 = "dice" + num1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", image1);




var num2 = Math.random();
num2 *= 6;
num2 = Math.floor(num2) + 1;

var image2 = "dice" + num2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", image2);





if (num1 > num2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!!";
}
else if (num2 > num1) {
  document.querySelector("h1").innerHTML = "Player 2 wins !!";
}
else {


  document.querySelector("h1").innerHTML = "Its a draw !!";
}

