const submitButton = document.getElementById('submit-btn');
const confirmButton = document.getElementById('confirm-btn');
let greenAnswers = document.querySelectorAll('input[id="green"]');
let redAnswers = document.querySelectorAll('input[id="red"]');
let yellowAnswers = document.querySelectorAll('input[id="yellow"]');
let blueAnswers = document.querySelectorAll('input[id="blue"]');

let userScore = 0;


//Event Listeners
submitButton.addEventListener('click', () =>{
    storeAnswers();
    answerResults();
});

confirmButton.addEventListener(hideBtn);

//Store Answers
const storeAnswers = () => {
    if (greenAnswers.checked){
        console.log('This works')
    }

}

//Answer Results
const answerResults = () => {

}

const hideBtn = () =>{
    confirmButton.classList.add('hide');
}