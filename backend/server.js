const express = require('express');
const cors = require('cors');
const quizRoutes = require('./routes/quizRoutes');

const app = express();
app.use(cors({origin:"https://elaborate-bunny-7e1aa2.netlify.app"}));
app.use(express.json());
 app.get('/', (req, res) => {
  res.send('🚀 Quiz Application Backend is running');
});
app.use('/api/quizzes', quizRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));