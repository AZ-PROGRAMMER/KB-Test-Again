// referencing the html dom element will need

const  questionName = document.querySelector('.question'),
answerName = document.querySelector('.answerList'),
result = document.querySelector('.result'),
nextButton = document.querySelector('p');

// preparation of question in array

const questions = [
     {
          question: 'who has create the world?',
          answers : [
               {text:'god',correct: 'true'},
               {text:'satan',correct: 'false'},
               {text:'judha',correct: 'false'},
               {text:'john',correct: 'false'}
          ]
     },
          {
          question: 'who has made sign while in heaven?',
          answers : [
               {text:'mosse',correct: 'false'},             
               {text:'maria',correct: 'false'},
               {text:'satan',correct: 'true'},
               {text:'john',correct: 'false'}
          ]
     },
          {
          question: 'who has birth jesus?',
          answers : [
               {text:'david',correct: 'false'},
               {text:'papa',correct: 'false'},
               {text:'maria',correct: 'true'},
               {text:'john',correct: 'false'}
          ]
     },
          {
          question: 'who has baptsized jesus?',
          answers : [
               {text:'god',correct: 'false'},
               {text:'elizabeth',correct: 'false'},
               {text:'david',correct: 'false'},
               {text:'john',correct: 'true'}
          ]
     }
];

// quiz functions and functionality initialization
let currentQuestionIndex = 0,
questionScore = 0;

const startQuiz = () =>{
     currentQuestionIndex = 0;
     questionScore = 0;
     nextButton.innerHTML = 'Next';
     showQuestions();
}

const showQuestions = () =>{
     resetSt();
     let currentQuestion = questions[currentQuestionIndex],
     questionNo= currentQuestionIndex+1;
     questionName.innerHTML = questionNo +'. '+ currentQuestion.question;
     currentQuestion.answers.forEach(answer =>{
          let btn = document.createElement('button');
          btn.innerHTML = answer.text;
          answerName.appendChild(btn);
          if(answer.correct){
               btn.dataset.correct = answer.correct;
          }
          btn.addEventListener('click', ()=>{
          if(answer.correct === 'true'){
               btn.classList.add('correct');
               questionScore++;
          }else{
               btn.classList.add('inCorrect');
          }
          Array.from(answerName.children).forEach(btn =>{
               if(btn.dataset.correct ==='true'){
                    btn.classList.add('correct')
               }
               btn.disabled = true;
          })
          nextButton.style.display= 'block';
          });
     })
}
const resetSt = ()=>{
     nextButton.style.display = 'none';
     while(answerName.firstChild){
          answerName.removeChild(answerName.firstChild)
     }
}
  let theResult = ()=>{
      let mediumMarks = (questions.length) / 2;
          if(questionScore >= mediumMarks){
                    questionName.innerHTML = 'Congratelation you have competenced!'
           }else{
                    questionName.innerHTML = 'soory you have failled kindly we advice you to repeat!'
             }
          }
const showScore=()=>{
                         resetSt();
                         theResult();
                         answerName.innerHTML = `your score ${questionScore} out of ${questions.length}`;
                         nextButton.innerHTML='play again';
                         nextButton.style.display='block';
                    }
const nextQeustion =()=>{
               currentQuestionIndex++;
               if(currentQuestionIndex<questions.length){
                    showQuestions();
               }else{
                    showScore();
               }
          }
nextButton.addEventListener('click', ()=>{
     if(currentQuestionIndex < questions.length){
      nextQeustion();
     }else{
          startQuiz();
     }
})

startQuiz();