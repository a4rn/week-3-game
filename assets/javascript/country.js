var countries_A = [
"Afghanistan"
,"Albania"
,"Algeria"
,"Angola" 
,"Argentina"
,"Armenia"
,"Australia"
,"Austria"
,"Azerbaijan" ];


var machine_Pick;
var nameline1 = "<div id='nameline1'></div>";
var letterbox1 = "<div id='letterbox1'></div>";
var userGuess = [];
var dispName = [];
var err_Guess = 0;
var winctr = 0;
var lossctr = 0;
var correctguess = 0;
var game_end = false;

document.onkeydown = function (e) {
	if (game_end) {
		if (e.which == 13) {
			game_end = false;
			startGame();
		}
		else
			alert("Press Enter or Click Start to start new game")

	}

}

document.onkeyup = function(event) {
	var userGuessChar = String.fromCharCode(event.keyCode).toUpperCase();
    var indexNo;
   

    if  (!check_prev_Guess(userGuessChar)) {
    	if (check_Answer(userGuessChar)) {
    		for (var i = 0; i < machine_Pick.length; i++) {
				if (machine_Pick[i] === userGuessChar) {
					correctguess++;
					dispName[i] = userGuessChar;
				}
			}
			if (correctguess === machine_Pick.length) {
 				winctr++;
 				correctguess=0;
 				game_end = true;
 				document.querySelector('#scores').innerHTML = 
	    	 		"<h2>WIN  : " + winctr  + "</h2>" +
    	 			"<h2>LOSS : " + lossctr + "</h2>";
    	 			alert (" You Won. Good job! Press Enter or Click Start for a new game")
			}
		}

    	var html1 = "";
		for (var i = 0; i < machine_Pick.length; i++) {
			if (dispName[i]) {
				html1 = html1 + dispName[i] + "  ";
			} else 
				html1 = html1 + "__" + "  ";
		}
	country = "<h2> " + html1 + " </h2>";
    document.querySelector('#nameline1').innerHTML = country;

    } 
}
       

function check_prev_Guess(key_press) {
	if (userGuess.indexOf(key_press) == -1) {
 		userGuess.push(key_press);
 		return false;
 	}   
 	else {
 		alert("You already picked the letter " + key_press + " before. Try again.");
 		return true;
 	}
}

function check_Answer(key_press) {
	if (machine_Pick.indexOf(key_press) == -1) {
		err_Guess++;
		var img = document.getElementById('hangman_img');
 		if (err_Guess == 1) {
 			img.src = "assets/images/hangmana1.png";
 		}else if (err_Guess == 2) {	
 			img.src = "assets/images/hangmanb.png";
		}else if (err_Guess == 3) {	
			img.src = "assets/images/hangmanc.png";
		}else if (err_Guess == 4) {	
			img.src = "assets/images/hangmand.png";
 		}else if (err_Guess == 5) {	
			img.src = "assets/images/hangmane.png";
		}else if (err_Guess == 6) {	
			img.src = "assets/images/hangmanf.png";	
		}else if (err_Guess == 7) {	
			img.src = "assets/images/hangmang.png";	
			lossctr++;	
			game_end = true;
			document.querySelector('#scores').innerHTML = 
	    	 "<h2>WIN  : " + winctr  + "</h2>" +
    	 	"<h2>LOSS : " + lossctr + "</h2>";
		};
 		
 		return false;
 	}   
 	else {
 		return true;
 	}
}

function startGame() {
	machine_Pick = countries_A[Math.floor(Math.random() * 
					countries_A.length)].toUpperCase();
	console.log (machine_Pick);

	userGuess.length = 0; err_Guess = 0;
	dispName.length = 0;  correctguess = 0;

	var html1 = "";
	
	document.querySelector('#nameline').innerHTML = nameline1;

	var img = document.getElementById('hangman_img');
 	img.src = "assets/images/hangman0.png";

	for (var i = 0; i < machine_Pick.length; i++) {
		html1 = html1 + "__" + "  ";
	}

    country = "<h2> " + html1 + " </h2>";
    document.querySelector('#nameline1').innerHTML = country;

    document.querySelector('#scores').innerHTML = 
     "<h2>WIN  : " + winctr  + "</h2>" +
     "<h2>LOSS : " + lossctr + "</h2>";

 };


