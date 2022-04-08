
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var correct = 0;


	if (question1 == "diablo") {
		correct++;
	}
	if (question2 == "1825") {
		correct++;
	}	
	if (question3 == "falso") {
		correct++;
	}
	if (question4 == "bolivia") {
		correct++;
	}
	if (question5 == "chile") {
		correct++;
	}
	
	var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif", "img/lose.gif"];
	var messages = ["Gran Trabajo!", "nada mal","suerte para la proxima" ,"necesitas hacer el custonario estas mal",];
	var score;

	if (correct == 0) {
		score = 3;
	}
	if (correct == 1) {
		score = 2;
	}
	if (correct > 1 && correct < 5) {
		score = 1;
	}

	if (correct == 5) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "acertaste a " + correct + " corectas.";
	document.getElementById("picture").src = pictures[score];
	document.getElementById("puntaje").innerHTML = "tu puntaje es de " + correct*20;
	}

