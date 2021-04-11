const submitButton = document.getElementById('submit-btn');
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

    if((greenAnswers > redAnswers) && (greenAnswers > yellowAnswers) && (greenAnswers > blueAnswers)){
        console.log("This is Mud Monster");
        location.replace('/api/mudmonster');
    }
    else if((redAnswers > greenAnswers) && (redAnswers > yellowAnswers) && (redAnswers > blueAnswers)){
        console.log("This is Lava Monster");
        location.replace('/api/lavamonster');
    }
    else if((yellowAnswers > greenAnswers) && (yellowAnswers > redAnswers) && (yellowAnswers > blueAnswers)){
        console.log("This is Sand Monster");
        location.replace('/api/sandmonster');
    }
    else if((blueAnswers > greenAnswers) && (blueAnswers > yellowAnswers) && (blueAnswers > redAnswers)){
        console.log("This is Snow Monster");
        location.replace('/api/snowmonster');
    }
}


//Event Listeners
submitButton.addEventListener('click', () =>{
    var test = answerChoice();
    var test2 = answerArray();
});
