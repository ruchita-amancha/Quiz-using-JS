const quizData = [{
  question: "Which of the following is a client site language?",
  a: "Java",
  b: "C",
  c: "Python",
  d: "JavaScript",
  correct: "d",
},
{
  question: "What does HTML stand for?",
  a: "Hypertext Markup Language",
  b: "Cascading Style Sheet",
  c: "Jason Object Notation",
  d: "Helicopters Terminals Motorboats Lamborginis",
  correct: "a",
},
{
  question: "What year was JavaScript launched?",
  a: "1996",
  b: "1995",
  c: "1994",
  d: "none of the above",
  correct: "b",
}

];

let index = 0;
let total=quizData.length;
let right=0;
let wrong=0;
// let correct=0
const questionEl = document.getElementById('questionBox');
let allInputs = document.querySelectorAll(".options")
const label = document.querySelectorAll('.temp');
const loadQuestion = () => {

  if(total===index){
    return endQuiz()
  }
  reset();
  const data = quizData[index];
  questionEl.innerHTML = data.question;
  console.log(data);

  label[0].innerHTML = data.a;
  label[1].innerHTML = data.b;
  label[2].innerHTML = data.c;
  label[3].innerHTML = data.d;

  // OR 
  // allInputs[0].nextElementSibling.innerText = data.a
  //   allInputs[1].nextElementSibling.innerText = data.b
  //   allInputs[2].nextElementSibling.innerText = data.c
  //   allInputs[3].nextElementSibling.innerText = data.d

}

const submitQuiz=()=>{
  const data = quizData[index];
  const ans=getAnswer();
  console.log(ans,data.correct);
  if(ans==data.correct){
    right++;
  }
  else{
    wrong++;
  }
  index++;
  loadQuestion()
  return
}

const getAnswer = () => {
  let answer;
  allInputs.forEach((input)=>{
    if(input.checked){
      console.log(input.value);
      answer= input.value;
    }
   
  })
  return answer;
}

const reset=()=>{
  allInputs.forEach((input)=>{
    
      input.checked=false;
    
   
  })
}

const endQuiz=()=>{
  document.getElementsByClassName('.box').innerHTML=`<h1>Quiz Completed</h1>
  <h3>Right Answers: ${right}</h3>`
}
// inital call
loadQuestion();