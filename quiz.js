function checkAnswer (){

    let correctAnswer = "4";

    let selectedAnswer = document.querySelector('input[name="quiz"]:checked');

    let userAnswer = selectedAnswer ? selectedAnswer.value : null;

    let feedback = document.getElementById('feedback');

  if(userAnswer === correctAnswer){
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green";
        }else{
            feedback.textContent = "That's incorrect. Try again";
            feedback.style.color = "red";
        }
        
        }
        document.getElementById('submit-answer').addEventListener('click', checkAnswer);
    
