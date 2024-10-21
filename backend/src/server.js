import express from 'express';
import routeNotFound from './middleware/not-found.js';
import questions from './routes/questions.js';
import topics from './routes/topics.js'
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 3010;

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ msg: 'API working perfectly' });
});

app.use('/api/v1/questions', questions);
app.use('/api/v1/topics', topics)

app.use(routeNotFound);

app.listen(PORT, () => {
  console.log(`API started and running at address http://localhost:${PORT}`);
});
