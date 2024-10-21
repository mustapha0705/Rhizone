import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({ msg: 'get all topics' })
});
router.get('/:id', (req, res) => {
    res.status(200).json({ msg: 'get a single topic' })
});

router.post('/', (req, res) => {
    res.status(200).json({ msg: 'create a topic' })
});

router.patch('/:id', (req, res) => {
    res.status(200).json({ msg: 'update a topic' })
});

router.delete('/:id', (req, res) => {
    res.status(200).json({ msg: 'delete a topic' })
});

export default router;
