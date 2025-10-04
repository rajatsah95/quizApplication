import React, { useState } from "react";
import QuizList from "./components/QuizList";
import Quiz from "./components/Quiz";

function App() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  return (
    <div>
      <h1>Quiz App</h1>
      {!selectedQuiz ? (
        <QuizList onSelect={setSelectedQuiz} />
      ) : (
        <Quiz quizId={selectedQuiz} onBack={() => setSelectedQuiz(null)} />
      )}
    </div>
  );
}

export default App;