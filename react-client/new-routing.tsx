// App.tsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateQuestionsPage from './CreateQuestionsPage';
import ViewQuestionsPage from './ViewQuestionsPage';

// Example of the Question type
interface Question {
  id: number;
  question: string;
  answer: string;
  username: string;
}

const App: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  // Function to handle adding a new question
  const addQuestion = (newQuestion: Question): void => {
    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
  };

  return (
    <Router>
      <Routes>
        {/* Route for creating questions */}
        <Route
          path="/create"
          element={<CreateQuestionsPage addQuestion={addQuestion} />}
        />

        {/* Route for viewing questions */}
        <Route path="/view" element={<ViewQuestionsPage questions={questions} />} />
      </Routes>
    </Router>
  );
};

export default App;




// create questions

import React, { useState } from 'react';

interface Question {
  id: number;
  question: string;
  answer: string;
  username: string;
}

interface CreateQuestionsPageProps {
  addQuestion: (newQuestion: Question) => void;
}

const CreateQuestionsPage: React.FC<CreateQuestionsPageProps> = ({ addQuestion }) => {
  const [questions, setQuestions] = useState<string[]>(["", "", ""]);

  const handleInputChange = (index: number, value: string) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = value;
    setQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions((prevQuestions) => [...prevQuestions, ""]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    questions.forEach((questionText, index) => {
      if (questionText.trim()) {
        const newQuestion: Question = {
          id: Date.now() + index,
          question: questionText,
          answer: "",
          username: "admin",
        };
        addQuestion(newQuestion);
      }
    });

    setQuestions(["", "", ""]);
  };

  return (
    <div>
      <h2>Create Questions</h2>
      <form onSubmit={handleSubmit}>
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








// view questions

import React from 'react';

interface Question {
  id: number;
  question: string;
  answer: string;
  username: string;
}

interface ViewQuestionsPageProps {
  questions: Question[];
}

const ViewQuestionsPage: React.FC<ViewQuestionsPageProps> = ({ questions }) => {
  return (
    <div>
      <h2>View Questions</h2>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            {question.question} (by {question.username})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewQuestionsPage;



// view questions

















// old app.tsx

import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateQuestionsPage from './pages/CreateQuestionsPage';
import ViewQuestionsPage  from './pages/ViewQuestionsPage ';
import './App.css'

/**
 * define the interface for the questions in state
 * Question data
 * [{"id":1,"question":"Rate how productive you have been today","answer":"","username":"admin"}]
 */
interface Question {
  id: number,
  question: string,
  answer: string,
  username: string
};

function App() {

  const [question, setQuestions] = useState<Question[]>([]);

  // Function to add a question to the shared state
  const addQuestion = async (newQuestion: Question) => {
    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);

    const response = await fetch("http://localhost:5002/api/questions/create",{
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newQuestion),
      })

    if (!response.ok) {
      throw new Error('Failed to create the question');
    }


  };

  useEffect(() =>{
    const fetchQuestionsData = async () => {
      const response = await fetch('http://localhost:5002/api/questions/index');
        if (!response.ok) {
          throw new Error('Failed to fetch questions');
        }
        const data: Question[] = await response.json();

        setQuestions(data);
    }
    fetchQuestionsData();
  }, []);

  return (
    <>
      <Router>
        <div className='app'>
          <nav>
            <h1> Sandbox </h1>
            <h2> Manager to Employee Updates Tool </h2>
            <button>
              <Link to="/create">Create Questions</Link>
            </button>
            <button>
              <Link to="/view">View Questions</Link>
            </button>
          </nav>

          <Routes>
            <Route path="/create" element={<CreateQuestionsPage  addQuestion={addQuestion}/>} />
            <Route path="/view" element={<ViewQuestionsPage questions={question} />} />
          </Routes>
        </div>    
      </Router>  
    </>
  )
}

export default App














