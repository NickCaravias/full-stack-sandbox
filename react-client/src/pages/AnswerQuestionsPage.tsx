// import React, { useEffect, useState } from 'react';

// Define a type for the question data structure
interface Question {
  id: number;
  question: string;
  answer: string;
  username: string;
};

// Define props to include the 'questions' array, which is an array of 'Question' objects
interface AnswerQuestionsPageProps {
  questions: Question[]; 
  updateQuestion: (question: Question) => void;
  updateAnswerState: (id: number, newAnswer: string) => void; // This should be an array of 'Question' objects
}

const AnswerQuestionsPage: React.FC<AnswerQuestionsPageProps> = ( { questions, updateQuestion, updateAnswerState } ) => {
  
  // update the question state to reflect a change in the answer
  const handleAnswerChange = (id: number, value: string) => {
    updateAnswerState(id, value);
  };


  // update the database for the question when an answer is submitted
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // prevent refresh

    questions.forEach((questionObject, index) => {
      const answeredQuestion: Question = {
        id: questionObject.id,
        question: questionObject.question,
        answer: questionObject.answer,
        username: questionObject.username
      }

      updateQuestion(answeredQuestion);
    });
    
    
  }

  return (
    <div>
      <h2>
          Answer Manager's Questions
      </h2>
      <form onSubmit={handleSubmit}> 
        <ul>
          {questions.map((question) => (
            <li>
              <div>
                <strong> Question: </strong> {question.question}
              </div>
              <div>
                <strong> Answer: </strong> 
                <textarea
                  placeholder="Please enter your response."
                  value={question.answer}
                  onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                />
              </div>
            </li>

          ))}
        </ul>
        <button type="submit"> Submit </button>
      </form>
    </div>   
  );
};

export default AnswerQuestionsPage;