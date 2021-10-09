var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetColor=document.querySelector("#resetColor");
var h1 = document.querySelector("h1");
var h2 = document.querySelector("h2");
var colour_select = document.querySelector("#color_select");
var modeButton =document.querySelectorAll(".modeb");

init();

function init(){
	
	setupbuttons();
	setupsquare();
	resetColor();
}

function setupbuttons(){
	for(var i = 0; i < modeButton.length; i++) {
		modeButton[i].addEventListener("click", function() {
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");	
			this.textContent === "Easy" ?	numSquares = 3 : numSquares = 6;
			resetColor();
		});
	}
}

function createbuttons(){
	for(var i = 0; i < modeButton.length; i++) {
		modeButton[i].addEventListener("click", function() {
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");	
			this.textContent === "Easy" ?	numSquares = 3 : numSquares = 6;
			resetColor();
		});
	}
}

function setupsquare(){
	for(var i = 0; i < squares.length; i++){

		squares[i].addEventListener("click", function() {

			var clickedColor = this.style.backgroundColor;
			var select = this.colour_select;
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct !!";
				resetColor.textContent="Play_Again";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				h2.style.backgroundColor = clickedColor;

			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again !!";
			}
		});
	}
}

function resetColor(){
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	resetColor.textContent="New Colours";
	messageDisplay.textContent = "";
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}	
	}
	h1.style.backgroundColor = "steelblue";
	h2.style.backgroundColor = "steelblue";

}

resetColor.addEventListener("click", function(){
	resetColor();
});

function changeColors(color) {

	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {

	var arr = [];
	for(var i = 0; i < num; i++) {

		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {

	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

