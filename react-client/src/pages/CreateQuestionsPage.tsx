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
    const [questions, setQuestions] = useState<string[]>(["", "", ""]); // Start with 3 empty question fields

    // Handle change in a question field
    const handleInputChange = (index: number, value: string) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index] = value; // Update the question at the specific index
        setQuestions(updatedQuestions); // Update the state with the new question list
    };

    // Handle adding a new question input field
    const handleAddQuestion = () => {
        setQuestions((prevQuestions) => [...prevQuestions, ""]); // Add an empty string for a new question
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // loop through each item and validat then add to the state
        // questions.
    };


    return (
        <div>
            <h2>Create Questions</h2>
            <form>
            {questions.map((question, index) => (
                <div key={index}>
                <input
                    type="text"
                    value={question}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    placeholder={`Question ${index + 1}`}
                />
                </div>
            ))}
            <div>
                <button type="button" onClick={addQuestion}>Add More Questions</button>
            </div>
            </form>
        </div>
    );
};

export default CreateQuestionsPage;
