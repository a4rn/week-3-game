
var machine_Pick = "";
var alertTxt = "";
var userGuess = [];
var dispName = [];
var err_Guess = 0;
var winctr = 0;
var lossctr = 0;
var correctguess = 0;
var game_end = false;
var noofSpaces = 0;
var winner_snd = new Audio('assets/images/clap.mp3');
var looser_snd = new Audio('assets/images/sad.wav');
var err_snd = new Audio('assets/images/ErrorSnd.mp3');


document.onkeyup = function(event) {
	
	var userGuessChar = String.fromCharCode(event.keyCode).toUpperCase();
    var indexNo; 

    if  (!check_prev_Guess(userGuessChar)) {
    	if (correct_Answer(userGuessChar)) {
    		display_userGuess (userGuessChar) 
    		
			if ((correctguess === machine_Pick.length) ||
			   (correctguess === machine_Pick.length-noofSpaces)) {
 				winctr++;
 				correctguess=0; err_Guess=0; noofSpaces=0;
 				game_end = true;
 				alertTxt = "You Win! ";
 				console.log(dispName);
			}
		}

    	if (game_end) {
    		if (err_Guess == 7) {
	    		looser_snd.play();
    		}else {
    			winner_snd.play();
    		}
    		
    		document.querySelector('#scores').innerHTML = 
	    	"<h2>WIN  : " + winctr.toString()  +  "    LOSS : " + lossctr + "</h2>";

    	    newgame =  confirm(alertTxt + "  Click Ok or Press Enter for a new game");
    	    if (newgame = true) {
    	     	startGame()
    	    }
    	    else {
    	    	endGame();
    	    }
    	}
    } 
}
       
function display_userGuess (keypress) {

var html1 = "";
for (var i = 0; i < machine_Pick.length; i++) {
	if (machine_Pick[i] === keypress) {
		correctguess++;
		dispName[i] = keypress;
	}
}

for (var i = 0; i < machine_Pick.length; i++) {
	if (dispName[i]) {
		html1 = html1 + dispName[i] + "  ";
	} else {
		if (machine_Pick[i] !== " ") {
			html1 = html1 + "<b><strong>__</strong></b>" + "    ";
		} else {
			html1 = html1 + "<br>";
		}
	}
}

country = "<h2> " + html1 + " </h2>";
document.querySelector('#nameline').innerHTML = country;

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
	var img = document.getElementById('hangman_img');

	if (machine_Pick.indexOf(key_press) == -1) {
		err_Guess++;
		
 		if (err_Guess == 1) {
 			img.src = "assets/images/hangmana.png";
 			err_snd.play();
 		}else if (err_Guess == 2) {	
 			img.src = "assets/images/hangmanb.png";
 			err_snd.play();
		}else if (err_Guess == 3) {	
			img.src = "assets/images/hangmanc.png";
			err_snd.play();
		}else if (err_Guess == 4) {	
			img.src = "assets/images/hangmand.png";
			err_snd.play();
 		}else if (err_Guess == 5) {	
			img.src = "assets/images/hangmane.png";
			err_snd.play();
		}else if (err_Guess == 6) {	
			img.src = "assets/images/hangmanf.png";	
			err_snd.play();
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
		if (machine_Pick[i] !== " ") {
			html1 = html1 + "<b><strong>__</strong></b>" + "    ";
		}	
		else {
			noofSpaces++;
			html1 = html1 + "<br>";
		}

	}

    country = "<h2> " + html1 + " </h2>";
    document.querySelector('#nameline').innerHTML = country;

    document.querySelector('#scores').innerHTML = 
     "<h2>WIN  : " + winctr  + 
     "    LOSS : " + lossctr + "</h2>";

 };


function endGame() {
	window.close();

 };


