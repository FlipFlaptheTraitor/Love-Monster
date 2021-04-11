const submitButton = document.getElementById('submit-btn');
// let greenAnswers = document.querySelectorAll("input[name='answers1']:checked").value;
// let greenAnswers = document.getElementById('green').value;
// let redAnswers = document.querySelectorAll('input[id="red"]');
// let yellowAnswers = document.querySelectorAll('input[id="yellow"]');
// let blueAnswers = document.querySelectorAll('input[id="blue"]');
let answerEl = $('#answerDiv')


const answerChoice = function () {

    var urls = [];

    $('input:radio').each(function () {

        var $this = $(this),
            id = $this.attr('id'),
            url = $this.attr('datasrc');

        if ($(this).prop('checked')) {
            urls.push('<div class="' + id + '">' + url + '</div>');
            
        }
    });

    return urls;
};

const answerArray = function () {
    var deconstruct = answerChoice();
    console.log(answerEl)
    for(i = 0; i < deconstruct.length; i++){
        answerEl.append(deconstruct[i]);
        console.log(deconstruct[i]);
    }
    var green = document.getElementsByClassName('green');
    var red = document.getElementsByClassName('red');
    var yellow = document.getElementsByClassName('yellow');
    var blue = document.getElementsByClassName('blue');

    greenAnswers = green.length
    redAnswers = red.length
    yellowAnswers = yellow.length
    blueAnswers = blue.length

    console.log(greenAnswers)
    console.log(redAnswers)
    console.log(yellowAnswers)
    console.log(blueAnswers)
}



//Function to check duplicates
// function countDups(answerChoice){
//     var answerChoice = ['green', 'red', 'yellow', 'blue'];
//     var answersArray = answerChoice.sort(); 

//     var reportAnswerDups = [];
//     for (var i = 0; i < answersArray.length - 1; i++) {
//         if (answersArray[i + 1] == answersArray[i]) {
//             reportAnswerDups.push(answersArray[i]);
//         }
//     console.log(reportAnswerDups)
//     }
// };

//Event Listeners
submitButton.addEventListener('click', () =>{
    var test = answerChoice();
    var test2 = answerArray();
    // answerResults();
    console.log(test)
});


//Answer Results
// const answerResults = () => {
//     if userScore > 
//