import logoPorto from '../../img/logo-porto.png';
import '../../routes/routes'
export default function Header() {
  return (
    <header className="titulo-com-logo">
      <div className="logo-porto">
        <a>
          <img src={logoPorto} alt="logo-porto" />
        </a>
      </div>
      <h1>Porto</h1>
      <nav>
        <ul>
          <li className="link"><a href="/">Home</a></li>
          <li className="link"><a href="/ajuda">Ajuda</a></li>
          <li className="link"><a href="/sobre">Sobre nós</a></li>
          <li className="link"><a href="/planos">Planos e preços</a></li>
          <li className="link"><a className='active' href="/integrantes">Integrantes</a></li>
        </ul>
      </nav>
    </header>
  );
};