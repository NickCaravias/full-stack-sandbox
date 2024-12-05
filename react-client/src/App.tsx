

import { useEffect, useState, useCallback } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateQuestionsPage from './pages/CreateQuestionsPage';
import ViewQuestionsPage  from './pages/ViewQuestionsPage ';
import AnswerQuestionsPage from './pages/AnswerQuestionsPage';
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

  const updateAnswerState = (id: number, newAnswer: string) => {
    setQuestions((prevQuestions) => 
      prevQuestions.map((question) => 
      question.id === id ? {...question, answer: newAnswer} : question)
    );

  };  

  // todo useEffect
  const updateQuestion = async (question: Question) => {
    try {
      const response = await fetch("http://localhost:5002/api/questions/update", 
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(question)
      }) } catch {
        const errorMSg = "Could not update question with ID" + question.id;
        throw new Error(errorMSg);
      }
    };

  // todo useEffect
  // Function to add a question to the shared state
  const addQuestion = useCallback(async (newQuestion: Question) => {
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


  }, []);

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
            <button className='button-pages'>
              <Link to="/create">Create Questions</Link>
            </button>
            <button className='button-pages'>
              <Link to="/view">View Questions</Link>
            </button>
            <button className='button-pages'>
              <Link to="/answer"> Answer Questions</Link>
            </button>
          </nav>

          <Routes>
            <Route 
              path="/create" 
              element={<CreateQuestionsPage addQuestion={addQuestion}/>} 
            />
            <Route 
              path="/view" 
              element={<ViewQuestionsPage questions={question} />} 
            />
            <Route 
              path='/answer'
              element={<AnswerQuestionsPage questions={question} updateQuestion={updateQuestion} updateAnswerState={updateAnswerState} /> }
            />
            
          </Routes>
        </div>    
      </Router>  
    </>
  )
}

export default App
