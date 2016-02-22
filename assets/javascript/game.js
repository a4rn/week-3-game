
var machine_Pick = "";
var alertTxt = "";
var userGuess = [];
var dispName = [];
var err_Guess = 0;
var winctr = 0;
var lossctr = 0;
var correctguess = 0;
var game_end = false;
var winner_snd = new Audio('assets/images/clap.mp3');
var looser_snd = new Audio('assets/images/sad.wav');


document.onkeyup = function(event) {
	var userGuessChar = String.fromCharCode(event.keyCode).toUpperCase();
    var indexNo;
   

    if  (!check_prev_Guess(userGuessChar)) {
    	if (correct_Answer(userGuessChar)) {
    		for (var i = 0; i < machine_Pick.length; i++) {
				if (machine_Pick[i] === userGuessChar) {
					correctguess++;
					dispName[i] = userGuessChar;
				}
			}
			if (correctguess === machine_Pick.length) {
 				winctr++;
 				correctguess=0; err_Guess=0;
 				game_end = true;
 				winner_snd.play();
 				alertTxt = "You Win! ";

			}
		}

    	var html1 = "";
		for (var i = 0; i < machine_Pick.length; i++) {
			if (dispName[i]) {
				html1 = html1 + dispName[i] + "  ";
			} else 
				html1 = html1 + "<b><strong>__</strong></b>" + "  ";
		}
		country = "<h2> " + html1 + " </h2>";
    	document.querySelector('#nameline').innerHTML = country;
    	if (game_end) {
    		document.querySelector('#scores').innerHTML = 
	    	"<h2>WIN  : " + winctr.toString()  +  "    LOSS : " + lossctr + "</h2>";
	    	if (err_Guess == 7) {
    			looser_snd.play();
    		}
    	    newgame = confirm(alertTxt + "  Click Ok or Press Enter for a new game");
    	    if (newgame = true) {
    	     	startGame()
    	     }
    	}
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

function correct_Answer(key_press) {
	if (machine_Pick.indexOf(key_press) == -1) {
		err_Guess++;
		var img = document.getElementById('hangman_img');
 		if (err_Guess == 1) {
 			img.src = "assets/images/hangmana.png";
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
			alertTxt = "You Loose. ";
	
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

	userGuess.length = 0; err_Guess = 0; game_end = false;
	dispName.length = 0;  correctguess = 0;

	var html1 = "";
	
	var img = document.getElementById('hangman_img');
 	img.src = "assets/images/hangman0.png";

	document.getElementById('hangbox').style.display = "visible";
 	document.getElementById('hangman_img').style.display = "inline";
 	document.getElementById('hangman_img').style.border = "2px solid #333";
 	document.getElementById('hangman_img').style.float = "left";

	for (var i = 0; i < machine_Pick.length; i++) {
		html1 = html1 + "<b><strong>__</strong></b>" + "    ";
	}

    country = "<h2> " + html1 + " </h2>";
    document.querySelector('#nameline').innerHTML = country;

    document.querySelector('#scores').innerHTML = 
     "<h2>WIN  : " + winctr  + 
     "    LOSS : " + lossctr + "</h2>";

 };


