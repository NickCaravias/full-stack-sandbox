import React, { useState } from "react";

// Define a type for the question data structure
interface Question {
    id: number;
    question: string;
    answer: string;
    username: string;
  }
  
interface CreateQuestionsPageProps {
    addQuestion: (newQuestion: Question) => void; 
}

const CreateQuestionsPage: React.FC<CreateQuestionsPageProps> = ( {addQuestion} ) => {
    // State to store questions input
    const [questions, setQuestions] = useState<Question[]>([
      { id: 0, question: "", answer: "", username: "admin" }
    ]); 

    // Handle change in a question field
    // const handleInputChange = (index: number, value: string) => {
    //     const updatedQuestions = [...questions];
    //     updatedQuestions[index].question = value; // Update the question at the specific index
    //     setQuestions(updatedQuestions); // Update the state with the new question list
    // };

    // Handle adding a new question input field
    const handleAddQuestion = () => {
        setQuestions((prevQuestions) => [...prevQuestions, new Question]); // Add an empty string for a new question
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // loop through each item and validat then add to the state
        // questions.
        // Loop through all questions and send them to the parent component via addQuestion function
        questions.forEach((questionObject, index) => {  
          const newQuestion: Question = {
            id: index, // You can generate the ID however you'd like
            question: questionObject.question,
            answer: questionObject.answer, // Default empty answer
            username: questionObject.username, // Or use the current logged-in user's username
          };
  
          // Call the addQuestion function passed from App
          addQuestion(newQuestion);
            
        });
  
      // Optionally, reset form fields after submission
      setQuestions([""]); // Clear the form after submission (or keep questions if you prefer)
    };


    return (
        <div>
          <h2>Create Questions</h2>
          <form onSubmit={handleSubmit}>
            {questions.map((question, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={question.question}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  placeholder={`Question ${index + 1}`}
                />
              </div>
            ))}
            <div>
              <button type="button" onClick={handleAddQuestion}>
                Add More Questions
              </button>
            </div>
            <div>
              <button type="submit">Submit Questions</button>
            </div>
          </form>
        </div>
      );
};

export default CreateQuestionsPage;
