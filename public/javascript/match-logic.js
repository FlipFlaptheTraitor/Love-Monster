const submitButton = document.getElementById('submit-btn');
// let greenAnswers = document.querySelectorAll("input[name='answers1']:checked").value;
let greenAnswers = document.getElementById('green').value;
let redAnswers = document.querySelectorAll('input[id="red"]');
let yellowAnswers = document.querySelectorAll('input[id="yellow"]');
let blueAnswers = document.querySelectorAll('input[id="blue"]');

let userScore = 0;

$("li").each(function(){
    var $this = $(this),
    id =$this.attr('id'),
    
    if($(this).prop('checked')){
        console.log()
    }

})

//Event Listeners
submitButton.addEventListener('click', () =>{
    // storeAnswers();
    // answerResults();
    console.log(greenAnswers)
});


//Store Answers
const storeAnswers = () => {
    if (greenAnswers){
        console.log('This works')
    }

}

//Answer Results
// const answerResults = () => {
//     if userScore > 
// }
