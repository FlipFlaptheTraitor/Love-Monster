const submitButton = document.getElementById('submit-btn')
const confirmButton = document.getElementById('confirm-btn')

let userScore = 0;
const greenAnswers = 3;
const redAnswers = 2;
const yellowAnswers = 1;
const blueAnswers = 0;

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