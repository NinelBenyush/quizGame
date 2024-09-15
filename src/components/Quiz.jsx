import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

function Quiz(){
   const [userSelectedAnswer, setUserSelectedAnswer] = useState([]);

   const activeQuestionIndex = userSelectedAnswer.length;
   const quizIsComplete = activeQuestionIndex === QUESTIONS.length;


   const handleSelectedAnswer = useCallback(function handleSelectedAnswer(selectedAnswer){

     setUserSelectedAnswer((prevAnswers) => {
        return [  ...prevAnswers, selectedAnswer]
     });
    },
 [] ,)

   const handleSkipAnswer = useCallback(() => {
    handleSelectedAnswer(null),
    [handleSelectedAnswer]
   });

   if(quizIsComplete){
    return <Summary userAnswers={userSelectedAnswer} />
   }
    
   
    return(
        <div id="quiz">
        <Question 
        key={activeQuestionIndex}
        index= {activeQuestionIndex}
        onSelectAnswer={handleSelectedAnswer}
        onSkipAnswer={handleSkipAnswer}
        />
       </div>
    )
}

export default Quiz;