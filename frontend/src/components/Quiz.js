import React, { useEffect, useState } from "react";
import { getQuizById, submitQuiz } from "../api/quizApi";

export default function Quiz({ quizId, onBack }) {
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    getQuizById(quizId).then(setQuiz);
  }, [quizId]);

  const handleChange = (qIndex, value) => {
    setAnswers({ ...answers, [qIndex]: value });
  };

  const handleSubmit = () => {
    submitQuiz(quizId, answers).then(res => setScore(res));
  };

  if (!quiz) return <div>Loading...</div>;

  return (
    <div>
      <h2>{quiz.title}</h2>
      {quiz.questions.map((q, idx) => (
        <div key={idx}>
          <p>{q.question}</p>
          {q.options.map(opt => (
            <label key={opt}>
              <input
                type="radio"
                name={`q${idx}`}
                value={opt}
                onChange={() => handleChange(idx, opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={onBack}>Back</button>
      {score && <p>Your Score: {score.score} / {score.total}</p>}
    </div>
  );
}