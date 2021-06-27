var myQuestions = [
	{
		question: "Which of the following statement is true about FET?",
		answers: {
			a: 'It has high output impedance',
			b: 'It has high input impedance',
			c: 'It has low input impedan',
			d: 'It does not offer any resistance'
		},
		correctAnswer: 'b'
	},
	{
		question: "For a FET when will maximum current flows?",
		answers: {
			a: 'Vgs = 0V',
			b: '5Vgs = 0v and Vds >= |Vp|',
			c: 'VDS >= |Vp|',
			d: 'Vp = 0'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is the value of current when the gate to source voltage is less than the pinch off voltage?",
		answers: {
			a: '1A',
			b: '5A',
			c: '100A',
			d: '0'
		},
		correctAnswer: 'd'
	},
	{
		question: "What is the value of drain current when Vgs=pinch off voltage?",
		answers: {
			a: '0A',
			b: '1A',
			c: '2A',
			d: 'Cannot be Determined'
		},
		correctAnswer: 'a'
	},
	{
		question: "For an n-channel FET, What is the direction of current flow?",
		answers: {
			a: 'Source to Drain',
			b: 'Drain to Source',
			c: 'Gate to Source',
			d: 'Gate to Drain'
		},
		correctAnswer: 'b'
	},
	{
		question: "For an p-channel FET, What is the direction of current flow?",
		answers: {
			a: 'Source to Drain',
			b: 'Drain to Source',
			c: 'Gate to Source',
			d: 'Gate to Drain'
		},
		correctAnswer: 'a'
	},
	{
		question: "The action of JFET in its equivalent circuit can be represented as which of the following?",
		answers: {
			a: 'Current controlled current source',
			b: 'Current controlled voltage source',
			c: 'Voltage controlled current source',
			d: 'Voltage controlled Voltage source'
		},
		correctAnswer: 'c'
	},
	{
		question: "Where does the transfer curve lie for a p- channel FET?",
		answers: {
			a: 'First Quadrant',
			b: 'Second Quadrant',
			c: 'Third Quadrant',
			d: 'Fourth Quadrant'
		},
		correctAnswer: 'b'
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