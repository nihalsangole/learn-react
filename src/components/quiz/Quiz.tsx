import { useState } from 'react';
import Question from './Question';
import { quiz } from './QuestionBank';
import Score from './Score';

function Quiz() {
  const questions = quiz.questions;
  const [score, setScore] = useState(0);

  return (
    <>
      <h1>Quiz App</h1>
      <Score score={score} questions={questions} setScore={setScore} />
      <Question questions={questions} score={score} setScore={setScore} />
    </>
  );
}
export default Quiz;
