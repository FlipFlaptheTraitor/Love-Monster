const submitButton = document.getElementById('submit-btn');
// let greenAnswers = document.querySelectorAll("input[name='answers1']:checked").value;
let greenAnswers = document.getElementById('green').value;
let redAnswers = document.querySelectorAll('input[id="red"]');
let yellowAnswers = document.querySelectorAll('input[id="yellow"]');
let blueAnswers = document.querySelectorAll('input[id="blue"]');

let userScore = 0;

$("input:radio").each(function(){

    var green = $(this).attr("id");
    
    
        if($("[id='green']:checked").length == 1)
        {
            var src = $('#' + green).attr("datasrc")                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    
          console.log(green);
          console.log(src);                        
    
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    });

//Event Listeners
submitButton.addEventListener('click', () =>{
    // storeAnswers();
    // answerResults();
    console.log(green)
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
