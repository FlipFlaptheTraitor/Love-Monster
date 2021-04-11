const router = require('express').Router();

router.get('/', (req,res) => {
    res.render('mainquestions', {questionsQuiz : [
        {
            id: 1,
            questionAsked: 'Which of the following would you most hate people to call you?',
            greenAnswerChoice: 'Ordinary',
            yellowAnswerChoice: 'Selfish',
            redAnswerChoice: 'Cowardly',
            blueAnswerChoice: 'Ignorant',
        },
        {
            id: 2,
            questionAsked: 'How would you like to be known to historians?',
            greenAnswerChoice: 'The Great',
            yellowAnswerChoice: 'The Good',
            redAnswerChoice: 'The Bold',
            blueAnswerChoice: 'The Wise',
        },
        {
            id: 3,
            questionAsked: 'How do you confront conflict?',
            greenAnswerChoice: 'You react the way you feel others would best take it in order to get your point across.',
            yellowAnswerChoice: 'You approach it with enthusiasm to keep the mood positive.',
            redAnswerChoice: 'You bring a fair share of empathy to the conflict to try and see both sides.',
            blueAnswerChoice: 'You lay out the problem and multiple options for solutions with a clear path forward.',
        },
        {
            id: 4,
            questionAsked: 'Which kind of person would you enjoy having by your side?',
            greenAnswerChoice: 'Someone who is loyal',
            yellowAnswerChoice: 'Someone who is ambitious',
            redAnswerChoice: 'Someone who is honest',
            blueAnswerChoice: 'Someone who is brave',
        },
        {
            id: 5,
            questionAsked: 'At a party, you are...',
            greenAnswerChoice: 'Starting a dance party.',
            yellowAnswerChoice: 'Petting the dog.',
            redAnswerChoice: 'Catching up with friends.',
            blueAnswerChoice: 'Sparking up a lively conversation.',
        },
        {
            id: 6,
            questionAsked: 'It would be most troublesome for you if your partner was...',
            greenAnswerChoice: 'Lazy',
            yellowAnswerChoice: 'Jealous',
            redAnswerChoice: 'Clingy',
            blueAnswerChoice: 'Impulsive',
        },
        {
            id: 7,
            questionAsked: 'If you could choose the monster that lives under your bed, which of these would you choose?',
            greenAnswerChoice: 'A monster that can see into the future.',
            yellowAnswerChoice: 'A very nonthreatening monster that always tells terrible jokes.',
            redAnswerChoice: 'A monster made purely out of all the socks you lost in the laundry.',
            blueAnswerChoice: 'A monster that can rival your intellectual ability.',
        },
    ]}
    );
});

module.exports = router;