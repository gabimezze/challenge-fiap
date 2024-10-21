import'../../routes/routes';
export default function MainContent() {
  return (
    <>
      <div className="conteudo-problema">
        <p>
          <h1>
            <span className="destacada">Problema</span> no seu veículo?
          </h1>
        </p>
        <div className="textos-de-efeito">
          <p>
            Na porto, adicionamos agilidade e tecnologia <br /> no seu processo de manutenção.
          </p>
          <a href="/cadastro">Cadastre-se</a>
        </div>
      </div>

      <div className="conteudo-planos-home">
        <div className="textos-de-efeito">
          <p>
            Tenha na palma da sua mão a solução para os <br />
            problemas em seu veículo.
          </p>
          <div className="planos-home">
            <p>
              Planos a partir de R$19,90
              <span className="texto-mes-home">/mês</span>
            </p>
          </div>
          <a href="/planos">Escolha seu plano</a>
        </div>
      </div>
    </>
  );
};


