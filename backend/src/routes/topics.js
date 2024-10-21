import express from 'express';
import { getAllTopics, getTopic, createTopic, updateTopic, deleteTopic } from '../controllers/topicController.js';

const router = express.Router();

router.get('/', getAllTopics);
router.get('/:id', getTopic);

router.post('/', createTopic);

router.patch('/:id', updateTopic);

router.delete('/:id', deleteTopic);

export default router;
