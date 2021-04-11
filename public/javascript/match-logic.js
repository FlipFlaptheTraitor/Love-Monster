const submitButton = document.getElementById('submit-btn');
// let greenAnswers = document.querySelectorAll("input[name='answers1']:checked").value;
let greenAnswers = document.getElementById('green').value;
let redAnswers = document.querySelectorAll('input[id="red"]');
let yellowAnswers = document.querySelectorAll('input[id="yellow"]');
let blueAnswers = document.querySelectorAll('input[id="blue"]');

let userScore = 0;

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

//Function to check duplicates
function countDups(answerChoice){
    if(element.hasClass('green') > element.hasClass('red') && element.hasClass('yellow') && e.hasClass('blue')){
        console.log('Mud Monster')
    }
    }

//Event Listeners
submitButton.addEventListener('click', () =>{
    var test = answerChoice();
    var test2 = countDups();
    // answerResults();
    console.log(test)
});


//Answer Results
// const answerResults = () => {
//     if userScore > 
// }
