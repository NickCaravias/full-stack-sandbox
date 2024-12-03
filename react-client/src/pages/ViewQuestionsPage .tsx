// Define a type for the question data structure
interface Question {
  id: number;
  question: string;
  answer: string;
  username: string;
}

// Define props to include the 'questions' array, which is an array of 'Question' objects
interface ViewQuestionsPageProps {
  questions: Question[]; // This should be an array of 'Question' objects
}


const ViewQuestionsPage : React.FC<ViewQuestionsPageProps> = ( {questions} ) => {
  return (
    <div>
      <h2>View Questions</h2>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <div>
              <strong>Question:</strong> {question.question}
            </div>
            <div>
              <strong>Answer:</strong> {question.answer || 'No answer yet'}
            </div>
            <div>
              <strong>Asked by:</strong> {question.username}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewQuestionsPage ;
