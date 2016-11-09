function submitAnswers(){
	var totalQuestionCount = 5;
	var playerScore = 0;
	
	// Get User Input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;
	
	// Validation	
	for(var i = 1; i <= totalQuestionCount; i++){
		if(eval('q' + i) === null || eval('q' + i) === ''){
			alert('You missed question ' + i);
			return false;
		}
	}
	
	// Set Correct Answers
	var answerKey = ["b", "a", "d", "b", "d"];
	
	// Check Answers
	for (var j = 0; j < totalQuestionCount; j++){
		if(eval('q' + (j + 1)) === answerKey[j]){
			playerScore++;
		}
	}
	
	// Display Results
	var results = document.getElementById('results');
	results.innerHTML = '<h3>You scored <span>' + playerScore + '<span> out of <span>' + totalQuestionCount + '</span></h3>';
	
	// Prevent Form Submission
	return false;
}