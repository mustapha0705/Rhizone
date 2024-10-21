const getAllTopics = (req, res) => {
  res.status(200).json({ msg: 'get all topics' });
};

const getTopic = (req, res) => {
  res.status(200).json({ msg: 'get a single topic' });
};

const createTopic = (req, res) => {
  res.status(200).json({ msg: 'create a topic' });
};

const updateTopic = (req, res) => {
  res.status(200).json({ msg: 'update a topic' });
};

const deleteTopic = (req, res) => {
  res.status(200).json({ msg: 'delete a topic' });
};

export { getAllTopics, getTopic, createTopic, updateTopic, deleteTopic };
