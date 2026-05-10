import { useState } from 'react'
import './App.css';
import questions from './questions.js'


const App = () =>
{
  
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  

  return (
    <>
    <div className="card-container">
      <div className="header">
        <h1>Play The Quiz </h1>
        <p>which variable used to declare constant variable in java-script?</p>
      </div>
      <ul className='question'>
        <li>const</li>
        <li>var</li>
        <li>static</li>
        <li>let</li>
      
      </ul>
      <button>Next Quiz</button>
    </div>
    </>
  )
}

export default App




