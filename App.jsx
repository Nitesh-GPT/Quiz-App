import { useState } from 'react'
import './App.css';
import questions from './questions.js'


const App = () => {


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);



  //Handle Answer click
  const handleAnswerClick = (index) => {
    if (isAnswered || isFinished) return;

    setSelectedAnswer(index);
    setIsAnswered(true);

    if (index === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  //Handle Next click
  const handleNextClick = () => {
    if (currentQuestion < question.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true); 
      }
    };

    //Handle Reset button
    const handleReset = () => {
      setCurrentQuestion(0);
      setSelectedAnswer(null);
      setIsAnswered (false);
      setScore (0);
      setIsFinished(false);
    };


    return (
      <>
        <div className="card-container">
          <div className="header">
            <h1>Play The Quiz </h1>

            {!isFinished ? (
              <p> {currentQuestion + 1}: {questions[currentQuestion].question}
              </p>
            ) : (
              <p>
                Quiz Finished! your score: {score}/{question.length}
              </p>
            )}

          </div>

          {!isfinished && (
           <ul className='question'>
            {question[currentQuestion].option.map((option, index) => {
              let className = "";

              if (!isAnswered){
                if (index === questions[currentQuestion].correctAnswer)
                {
                  className = "incorrect";
                }
              }
              return (
              <li
              key={index}
              className={className}
              onClick={() => handleAnswerClick(index)}
              >
                {option}
                </li>
              );
          
            })}
          </ul> 
          )}


          {!isFinished ? (
            currentQuestion === questions.length -1 ? (
            <button onClick={handleNextClick}>Finished Quiz</button>
            ) : (
            <button onClick={handleNextClick}>Next Question</button>
            )
          ) : (
            <button onClick={handleReset}>Reset Quiz</button>
          )}
          
        </div>
      </>
    );
  };

  export default App