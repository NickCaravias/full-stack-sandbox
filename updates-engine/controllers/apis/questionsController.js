const Question = require('../../models/Question');  // Import the Question model

const indexQuestions = async (req, res) => {
    try {
        const questions = await Question.findAll();  // Retrieve all questions from the database
        res.status(200).json(questions);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch questions' });
        console.log(err.message);
    }
};

const createQuestion = async (req, res) => {
    try {
        const { question, answer, username } = req.body;
    const newQuestion = await Question.create({ question, answer, username });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch questions' });
    }
}

module.exports = {
    indexQuestions,
    createQuestion
}