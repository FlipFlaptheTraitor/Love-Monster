const submitButton = document.getElementById('submit-btn')
const confirmButton = document.getElementById('confirm-btn')

let userScore = 0;

//Connect to user-answers.js through routes
const routes = require('../../controllers/api/userAnswers');
//To hold responses from questions & user-answsers GLOBAL
let userAnswer = routes;

//Show user the question (from handlebars)


//Event Listeners
submitButton.addEventListener('click', () =>{
    storeAnswers();
    answerResults();
});

confirmButton.addEventListener(hideBtn);

//Store Answer
const storeAnswers = (userAnswer) => {
    //Taking answer response and add one pt to answer color column

}

//Answer Results
const answerResults = () => {

}

const hideBtn = () =>{
    confirmButton.classList.add('hide');
}