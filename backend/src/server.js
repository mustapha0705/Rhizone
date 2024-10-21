import express from 'express';
import routeNotFound from './middleware/not-found.js';
import questions from './routes/questions.js';
import topics from './routes/topics.js';
import connectDB from './db/connect.js';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 3010;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ msg: 'API working perfectly' });
});

app.use('/api/v1/questions', questions);
app.use('/api/v1/topics', topics);

app.use(routeNotFound);

const start = async () => {
  try {
    await connectDB(MONGO_URI);
    app.listen(PORT, () => {
      console.log(`API started and running at address http://localhost:${PORT} and successfuly connected to database`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
