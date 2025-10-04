const express = require('express');
const cors = require('cors');
const quizRoutes = require('./routes/quizRoutes');

const app = express();
app.use(cors({origin:"https://emaildetailer.netlify.app"}));
app.use(express.json());

app.use('/api/quizzes', quizRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));