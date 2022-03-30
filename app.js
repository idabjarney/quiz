//array of questions

const questions = [
    {
        question: 'Which one is red?',
        answers: [
            {
                answer: 'red',
                isCorrect: true
            },
            {
                answer: 'orange',
                isCorrect: false
            }, 
            {
                answer: 'yellow',
                isCorrect: false
            }
        ]
    },
    {
        question: 'Which one is blue?',
        answers: [
            {
                answer: 'blue',
                isCorrect: true
            },
            {
                answer: 'brown',
                isCorrect: false
            }, 
            {
                answer: 'green',
                isCorrect: false
            }
        ]
    },
    {
        question: 'Which one is pink?',
        answers: [
            {
                answer: 'pink',
                isCorrect: true
            },
            {
                answer: 'purple',
                isCorrect: false
            }, 
            {
                answer: 'red',
                isCorrect: false
            }
        ]
    }
];

//question index

let questionIndex = 0;

// function

function init() {
    
    renderQuestion();
}

function renderQuestion() {
    const questionText = document.querySelector('.question');
    const currentQuestion = questions[questionIndex];
    console.log(currentQuestion);
    
}

init();