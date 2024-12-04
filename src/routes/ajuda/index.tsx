import Header from '../../components/Header/SobreHeader';
import QuestionForm from '../../components/Question/QuestionForm';
import QuestionsContainer from '../../components/Question/QuestionsContainer';
import '../../routes/routes'

export default function Ajuda() {
  return (
    <>
      <Header />
      <div className="containerDuvidas">
        <div className="duvidasFrequentes">
          <h1>FAQ - DÚVIDAS FREQUÊNTES</h1>
        </div>
        <QuestionForm />
        <QuestionsContainer />
      </div>
    </>
  );
};
