const quizzes = [
  { id: 1, title: "General Knowledge", questions: [
      { question: "What is the capital of France?", options: ["Berlin", "London", "Paris", "Madrid"], answer: "Paris" },
      { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Mars" }
    ]
  },
  { id: 2, title: "Math Quiz", questions: [
      { question: "2 + 2 = ?", options: ["3", "4", "5", "6"], answer: "4" },
      { question: "5 * 6 = ?", options: ["11", "30", "25", "20"], answer: "30" }
    ]
  }
];

module.exports = quizzes;