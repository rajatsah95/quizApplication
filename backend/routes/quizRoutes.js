const express = require('express');
const router = express.Router();
const quizzes = require('../data/quizzes');

router.get('/', (req, res) => {
  const quizList = quizzes.map(q => ({ id: q.id, title: q.title }));
  res.json(quizList);
});

router.get('/:id', (req, res) => {
  const quiz = quizzes.find(q => q.id === parseInt(req.params.id));
  if (quiz) {
    const quizWithoutAnswers = {
      id: quiz.id,
      title: quiz.title,
      questions: quiz.questions.map(q => ({ question: q.question, options: q.options }))
    };
    res.json(quizWithoutAnswers);
  } else {
    res.status(404).json({ message: "Quiz not found" });
  }
});

router.post('/:id/submit', (req, res) => {
  const quiz = quizzes.find(q => q.id === parseInt(req.params.id));
  if (!quiz) return res.status(404).json({ message: "Quiz not found" });

  const { answers } = req.body;
  let score = 0;
  quiz.questions.forEach((q, index) => {
    if (answers[index] === q.answer) score++;
  });
  res.json({ score, total: quiz.questions.length });
});

module.exports = router;