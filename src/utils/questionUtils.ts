
export interface Question {
    id: number;
    text: string;
    answer: string;
  }
  
  export function saveQuestion(question: Question): void {
    const questions = getQuestions();
    questions.push(question);
    localStorage.setItem('questions', JSON.stringify(questions));
  }
  
  export function getQuestions(): Question[] {
    const questions = localStorage.getItem('questions');
    return questions ? JSON.parse(questions) : [];
  }
  
  export function loadQuestions(): Question[] {
    return getQuestions();
  }
  
