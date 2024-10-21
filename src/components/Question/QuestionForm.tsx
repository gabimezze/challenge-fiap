import { useState } from 'react';
import { saveQuestion, loadQuestions } from '../../utils/questionUtils';

export default function QuestionForm() {
  const [questionText, setQuestionText] = useState<string>('');

  const handleAddQuestion = () => {
    const trimmedQuestionText = questionText.trim();
    if (trimmedQuestionText === '') {
      alert('Por favor, faça uma pergunta.');
      return;
    }

    const newQuestion = {
      id: Date.now(),
      text: trimmedQuestionText,
      answer: ''
    };

    saveQuestion(newQuestion);
    setQuestionText(''); // Limpa o campo de entrada

    // Atualiza a lista de perguntas
    const updatedQuestions = loadQuestions();
    console.log(updatedQuestions); // Opcional: Exibe as perguntas atualizadas no console

    // Opcional: Adicione uma lógica para atualizar a exibição das perguntas aqui, se necessário.
  };

  return (
    <div className="duvida-form">
      <input
        type="text"
        id="questionInput"
        placeholder="Faça sua pergunta"
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
      />
      <button className="botaoAddPergunta" onClick={handleAddQuestion}>
        Adicionar
      </button>
    </div>
  );
};



