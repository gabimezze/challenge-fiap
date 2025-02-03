import '../../style/estilo.css'; 
import gabrielaImage from '../../img/integrante-gabriela.jpg';
import mateusImage from '../../img/integrante-mateus.jpg.png';
import anaImage from '../../img/integrante-ana.jpg.png'
;import githubLogo from '../../img/logo-github.png';

export default function IntegrantesContent() {
  return (
    <section className="integrantes">
      <div className="titulo-integrantes">
        <p>Integrantes</p>
        <hr />
      </div>
      <div className="containerIntegrantes">
        <div className="integrante">
          <p> Ana Carolina de Castro Gonçalves</p>
          <img src={anaImage} alt="Foto do Integrante 1" />
          <p>RM: 554669</p>
        </div> 
        <div className="integrante">
          <p>Gabriela Gomes Cezar</p>
          <img src={gabrielaImage} alt="Foto do Integrante 2" />
          <p>RM: 556941</p>
        </div>
         <div className="integrante">
          <p>Mateus De Castro Nappe</p>
          <img src={mateusImage} alt="Foto do Integrante 3" />
          <p>RM: 556474</p>
        </div> 
        <div className="repositorio">
          <p>Touch the cat!</p>
          <a href="https://github.com/mateuscastronappe/challenge-front.git" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="logo do github" />
          </a>
          <p>Veja nosso repositório</p>
        </div>
      </div>
    </section>
  );
}
