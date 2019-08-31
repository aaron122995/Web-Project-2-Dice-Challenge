// Generate two random numbers
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// store file name in variable
var filename1 = "images/"+ "dice" + randomNumber1 + ".png";
var filename2 = "images/"+"dice" + randomNumber2 + ".png";
// change the image source
document.querySelectorAll("img")[0].setAttribute("src",filename1);
document.querySelectorAll("img")[1].setAttribute("src",filename2);

// change the content of h1 base on the result of player 1 and Player2
if(randomNumber1>randomNumber2){
document.querySelector("h1").innerHTML = "🏆Player 1 Wins";
}

else if (randomNumber1<randomNumber2){

document.querySelector("h1").innerHTML = "Player 2 Wins🏆";


}

else{

document.querySelector("h1").innerHTML = "Draw!";



}
