const submitButton = document.getElementById('submit-btn')
const confirmButton = document.getElementById('confirm-btn')

let userScore = 0;
let greenAnswers = 3;
let redAnswers = 2;
let yellowAnswers = 1;
let blueAnswers = 0;

//Event Listeners
submitButton.addEventListener('click', () =>{
    storeAnswers();
    answerResults();
});

confirmButton.addEventListener(hideBtn);

//Store Answers
const storeAnswers = (userAnswer) => {
    //Taking answer response and add one pt to answer color column

}

//Answer Results
const answerResults = () => {

}

const hideBtn = () =>{
    confirmButton.classList.add('hide');
}