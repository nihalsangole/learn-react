import { useState } from 'react';

function Question(props) {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');

  const save = () => {
    if (selectedOption === props.questions[activeQuestion].correctAnswer) {
      props.setScore(props.score + 1);
    }
    const nextQuestion = activeQuestion + 1;
    if (nextQuestion < props.questions.length) {
      setActiveQuestion(nextQuestion);
      setSelectedOption('');
    } else {
      alert(`Quiz finished! Your score: ${props.score + 1}`);
      // Reset quiz
      setActiveQuestion(0);
      setSelectedOption('');
      props.setScore(0);
    }
  };

  return (
    <div>
      <h2>Question {activeQuestion + 1}</h2>
      <p>{props.questions[activeQuestion].question}</p>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        {props.questions[activeQuestion].choices.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      {/* <ul>
        {props.questions[activeQuestion].choices.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul> */}

      <button onClick={() => save()}> save </button>
    </div>
  );
}

export default Question;
