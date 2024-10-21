const getAllQuestions = (req, res) => {
    res.status(200).json({ msg: 'get all questions' })
}

const getQuestion = (req, res) => {
    res.status(200).json({ msg: 'get a single question' })
}

const createQuestion = (req, res) => {
    res.status(200).json({ msg: 'create a question' })
}

const updateQuestion = (req, res) => {
    res.status(200).json({ msg: 'update a question' })
}

const deleteQuestion = (req, res) => {
    res.status(200).json({ msg: 'delete a question' })
}

export { getAllQuestions, getQuestion, createQuestion, updateQuestion, deleteQuestion };
