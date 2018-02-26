var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init (){
	setupModebuttons();
	setupSquares();
	reset()
;}

function setupModebuttons(){
	// setting up easy and hard mode + selection controll
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			// ternary operator
			if (this.textContent === "Easy"){
				numberOfSquares = 3;
			} else {
				numberOfSquares = 6;
			}
			reset();
		});
	}
}
function setupSquares(){
	for (var i = 0; i < squares.length; i++) {
	// add click listeners to squares
		squares[i].addEventListener("click", function (){
			console.log(this.style.backgroundColor, pickedColor)
			if (this.style.backgroundColor === pickedColor) {
  				changeColors(this.style.backgroundColor);
  				message.textContent = "Correct!";
  				resetButton.textContent = "Play Again?"
  				h1.style.backgroundColor = pickedColor;
  			} else{
  				this.style.backgroundColor = "#232323";
  				message.textContent = "Try Again";
  			}
		});
	}
}

function reset(){
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	message.textContent = "";

	for (var i = 0; i < squares.length; i++) {
		if (colors[i]){
			squares[i].style.display = "block"
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}	
	}
	h1.style.backgroundColor = "steelblue";	
}

function changeColors (color){
	for (var i = 0; i < squares.length; i++) {
  		squares[i].style.backgroundColor = pickedColor;
  	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random]
}
function generateRandomColors(num){
	var arr = [];
	// add nu random arrays to array
	for (var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	return arr;
}

function randomColor (){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);	
	return "rgb(" + r + ", "+ g + ", " + b +")";
}

resetButton.addEventListener("click", function(){
	reset();
})
