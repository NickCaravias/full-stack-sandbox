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
  questions: Question[]; // This should be an array of 'Question' objects
}

// const addAnswer = async (answeredQuestion: Question) => {
//   try {
//     const response = await fetch("http://localhost:5002/api/questions/update", {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(answeredQuestion)
//     })
//   } catch {
//     const errorMsg = "Could not update question with ID: " + answeredQuestion.id;
//     throw new Error(errorMsg);
//   }
// }

const AnswerQuestionsPage: React.FC<AnswerQuestionsPageProps> = ( { questions } ) => {
  

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault(); // prevent refresh

  //   answers.forEach((question, index) => {
  //     if (question.trim()) {
  //       const answeredQuestion: Question = {
  //         id: question.id,
  //         question: question.

  //       }

  //     }

  //   })

  // }

  return (
    <div>
      <h2>
          Answer Manager's Questions
      </h2>
      <ul>
        {questions.map((question) => (
          <li>
            <strong> Question: </strong> {question.question}

          </li>
        ))}
      </ul>
    </div>   
  );
};

export default AnswerQuestionsPage;