import React, { useEffect, useState } from "react";
import { getQuizzes } from "../api/quizApi";

export default function QuizList({ onSelect }) {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    getQuizzes().then(setQuizzes);
  }, []);

  return (
    <div>
      <h2>Available Quizzes</h2>
      <ul>
        {quizzes.map(q => (
          <li key={q.id}>
            <button onClick={() => onSelect(q.id)}>{q.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}