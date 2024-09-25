var randomNumber1= Math.floor(Math.random()*6)+1;

var randomdicesource1="/dice"+ randomNumber1 +".png";

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src",randomdicesource1);



var randomNumber2= Math.floor(Math.random()*6)+1;

var randomdicesource2="/dice"+randomNumber2+".png";

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomdicesource2);


var heading=document.querySelector('h1');
if (randomNumber1>randomNumber2){
    heading.textContent="Player 1 Wins!";
}else if(randomNumber1<randomNumber2){
    heading.textContent="Player 2 Wins!";
}else{
    heading.textContent="Draw!";
}