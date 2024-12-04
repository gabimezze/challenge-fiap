import Header from '../../components/Header/IntegrantesHeader'; // Certifique-se que o caminho do Header está correto
import IntegrantesContent from '../../components/Main/IntegrantesContents'; // Importando o novo componente
import '../../routes/routes'

export default function Integrantes() {
  return (
    <>
      <Header />
      <IntegrantesContent />
    </>
  );
}
