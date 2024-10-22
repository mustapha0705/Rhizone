import Topic from '../models/topicModel.js';

const getAllTopics = async (req, res) => {
  const topics = await Topic.find({});
  res.status(200).json({ topics });
};

const getTopic = async (req, res) => {
  const { id: topicID } = req.params;
  const topic = await Topic.findById(topicID);
  res.status(200).json({ topic });
};

const createTopic = async (req, res) => {
  const topic = await Topic.create(req.body);
  res.status(200).json({ topic });
};

const updateTopic = async (req, res) => {
  const { id: topicID } = req.params;
  const topic = await Topic.findByIdAndUpdate(topicID, req.body, { new: true });
  res.status(200).json({ topic });
};

const deleteTopic = async (req, res) => {
  const { id: topicID } = req.params;
  const topic = await Topic.findByIdAndDelete(topicID);
  res.status(200).json({ topic });
};

export { getAllTopics, getTopic, createTopic, updateTopic, deleteTopic };
