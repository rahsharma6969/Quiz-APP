document.addEventListener('DOMContentLoaded', function() {
    const questions = [
        {
            question: "What is 2 + 2?",
            options: [3, 4, 5, 6],
            answer: 4
        },
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Lisbon"],
            answer: "Paris"
        },
        {
            question: "What is 5 * 6?",
            options: [30, 28, 25, 32],
            answer: 30
        },
        {
            question: "What is the largest planet in our solar system?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            answer: "Jupiter"
        },
        {
            question: "What is the boiling point of water?",
            options: [90, 100, 80, 120],
            answer: 100
        },
        {
            question: "What is the square root of 16?",
            options: [2, 4, 8, 6],
            answer: 4
        },
        {
            question: "What is the currency of Japan?",
            options: ["Yen", "Dollar", "Euro", "Won"],
            answer: "Yen"
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Au", "Ag", "Pb", "Fe"],
            answer: "Au"
        },
        {
            question: "What is the fastest land animal?",
            options: ["Cheetah", "Lion", "Tiger", "Horse"],
            answer: "Cheetah"
        },
        {
            question: "What is the smallest prime number?",
            options: [0, 1, 2, 3],
            answer: 2
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');
    const scoreList = document.querySelector('.score_list');
    const questionList = document.querySelector('.question_list');

    function loadQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        answersContainer.innerHTML = ''; // Clear previous options

        currentQuestion.options.forEach(option => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option h-16 w-50 border-gray-200 border-2 m-2 p-4';
            optionDiv.textContent = option;
            optionDiv.setAttribute('data-answer', option === currentQuestion.answer ? 'correct' : 'wrong');
            optionDiv.addEventListener('click', handleOptionClick);
            answersContainer.appendChild(optionDiv);
        });

        questionList.textContent = `Question ${currentQuestionIndex + 1}/10`;
        scoreList.textContent = `Score: ${score}/10`;
    }

    function handleOptionClick() {
        // Check if the selected option is correct
        if (this.getAttribute('data-answer') === 'correct') {
            this.style.backgroundColor = 'green'; // Correct answer
            score++;
        } else {
            this.style.backgroundColor = 'red'; // Wrong answer
        }

        // Disable all options after selection
        const options = document.querySelectorAll('.option');
        options.forEach(option => {
            option.style.pointerEvents = 'none'; // Disable all options
        });

        // Move to the next question after a short delay
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion();
            } else {
                showFinalScore();
            }
        }, 1000); // 2 seconds delay
    }

    function showFinalScore() {
        questionText.textContent = `Quiz Over! Your final score is ${score}/10`;
        answersContainer.innerHTML = ''; // Clear options
        questionList.textContent = ''; // Clear question list
        scoreList.textContent = ''; // Clear score list
    }

    loadQuestion(); // Load the first question
});