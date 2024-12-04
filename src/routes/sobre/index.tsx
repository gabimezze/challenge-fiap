import Header from '../../components/Header/SobreHeader';
import ServiceCard from '../../components/cards/ServiceCard';
import trocaOleoImage from '../../img/troca-oleo.jpg';
import freiosImage from '../../img/freios.jpg';
import revisaoImage from '../../img/revisao.jpg';

export default function Sobre () {
  return (
    <div>
      <Header />
      <div className="fundo-efeito">
        <div className="frase-efeito">
          <h1>
            Faça da nossa IA <br />
            o seu porto seguro
            <br />
          </h1>
        </div>
      </div>

      <div className="titulo-objetivo">
        <h2>Nosso Objetivo</h2>
      </div>
      <div className="texto-objetivo">
        <p>
          O objetivo é claro: garantir que cada peça e cada veículo recebam a atenção e o cuidado que merecem. Serviços de reparo e manutenção <br />
          que superam expectativas. Focamos na qualidade, eficiência e satisfação total do cliente, assegurando que seu carro esteja sempre pronto para rodar <br />
          com desempenho e segurança máximos.<br />
          Pensando nesse objetivo, criamos uma IA para identificar qual é o problema e constatar uma mecânica para sua resolução.
          Assim como, também, <br /> fornecedores de peças caso a mecânica não a tenha em um prazo considerável.
        </p>
      </div>

      <section className="services">
        <h2>Nossos Serviços</h2>
        <hr />
        <ServiceCard
          imageSrc={trocaOleoImage}
          altText="Troca de Óleo"
          title="Troca de Óleo"
          description="Manutenção essencial para o bom funcionamento do motor."
        />
        <ServiceCard
          imageSrc={freiosImage}
          altText="Reparo de Freios"
          title="Reparo de Freios"
          description="Segurança em primeiro lugar. Verificamos e substituímos as pastilhas de freio."
        />
        <ServiceCard
          imageSrc={revisaoImage}
          altText="Revisão Completa"
          title="Revisão Completa"
          description="Verificação completa para garantir que seu carro está em perfeitas condições."
        />
      </section>
    </div>
  );
};
