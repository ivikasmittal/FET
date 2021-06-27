var myQuestions = [
	{
		question: "How many terminals does the FET have ?.",
		answers: {
			a: '1',
			b: '2',
			c: '3',
			d: '4',
		},
		correctAnswer: 'c'
	},
	{
		question: "The name for the terminals of the FET are ______",
		answers: {
			a: 'Cathode, Anode, Grid',
			b: 'Emitter, Base, Collector',
			c: 'Source, Gate, Drain',
			d: 'None of the above',
		},
		correctAnswer: 'c'
	},
	{
		question: "A JFET is also called ______ transistor",
		answers: {
			a: 'Unipolar',
			b: 'Bipolar',
			c: 'Unijunctional',
			d: 'None of the above',
		},
		correctAnswer: 'a'
	},
	{
		question: "True or False : FET is a voltage controlled device.",
		answers: {
			a: 'True',
			b: 'False',
		},
		correctAnswer: 'a'
	},
	{
		question: "The input impedance of a JFET is ______ that of an ordinary transistor",
		answers: {
			a: 'Equal to',
			b: 'More than',
			c: 'Less than',
			d: 'None of the above',
		},
		correctAnswer: 'b'
	},
	{
		question: "The JFET stands for ______",
		answers: {
			a: 'Junction Field Effect Transistor',
			b: 'Jet Field Effect Transistor',
			c: 'Joint Field Effect Transistor',
			d: 'Jammed Field Effect Transistor',
		},
		correctAnswer: 'a'
	},
	{
		question: "When drain voltage equals the pinch-off-voltage, then drain current ______ with the increase in drain voltage",
		answers: {
			a: 'Decreases',
			b: 'Increases',
			c: 'Remains Same',
			d: 'None of the above',
		},
		correctAnswer: 'c'
	},
	{
		question: "In a JFET, when drain voltage is equal to pinch-off voltage, the depletion layers ______",
		answers: {
			a: 'Almost touch each other',
			b: 'Have a large gap',
			c: 'Have a moderate gap',
			d: 'Overlap on each other',
		},
		correctAnswer: 'a'
	}
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// we'll need a place to store the output and the answer choices
		var output = [];
		var answers;

		// for each question...
		for(var i=0; i<questions.length; i++){
			
			// first reset the list of answers
			answers = [];

			// for each available answer...
			for(letter in questions[i].answers){

				// ...add an html radio button
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
						+ letter + ': '
						+ questions[i].answers[letter]
						+ '<br>'
					+ '</label>'
				);
			}

			// add this question and its answers to the output
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		// finally combine our output list into one string of html and put it on the page
		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
		
		// gather answer containers from our quiz
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		// keep track of user's answers
		var userAnswer = '';
		var numCorrect = 0;
		
		// for each question...
		for(var i=0; i<questions.length; i++){

			// find selected answer
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			// if answer is correct
			if(userAnswer===questions[i].correctAnswer){
				// add to the number of correct answers
				numCorrect++;
				
				// color the answers green
				answerContainers[i].style.color = 'lightgreen';
			}
			// if answer is wrong or blank
			else{
				// color the answers red
				answerContainers[i].style.color = 'red';
			}
		}

		// show number of correct answers out of total
		resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}

	// show questions right away
	showQuestions(questions, quizContainer);
	
	// on submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}

}