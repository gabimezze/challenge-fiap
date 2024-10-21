import { useState, useEffect } from 'react';
import { getQuestions, Question } from '../../utils/questionUtils';


export default function QuestionsContainer() {
    const [questions, setQuestions] = useState<Question[]>([]);

    useEffect(() => {
      const loadedQuestions = getQuestions();
      setQuestions(loadedQuestions);
    }, []);
  
    const renderQuestions = () => {
      return questions.map((question) => (
        <div key={question.id} className="question">
          <h3>{question.text}</h3>
          <textarea
            placeholder="Responda aqui..."
            value={question.answer}
            onChange={(e) => updateAnswer(question.id, e.target.value)}
          />
          <button onClick={() => updateAnswer(question.id, question.answer)}>
            Salvar Resposta
          </button>
        </div>
      ));
    };
  
    const updateAnswer = (questionId: number, answer: string) => {
      const updatedQuestions = questions.map((question) =>
        question.id === questionId ? { ...question, answer } : question
      );
      setQuestions(updatedQuestions);
      localStorage.setItem('questions', JSON.stringify(updatedQuestions));
    };
  
    return <div id="questionsContainer">{renderQuestions()}</div>;
  };
  