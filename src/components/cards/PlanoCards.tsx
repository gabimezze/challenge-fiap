import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

interface PlanoCardProps {
  id: string;
  title: string;
  benefits: string[];
  price: string;
  onSelectPlan: MouseEventHandler<HTMLAnchorElement>;
}

const PlanoCard = ({ id, title, benefits, price, onSelectPlan }: PlanoCardProps) => {
  return (
    <div className="plano" id={id}>
      <h1>{title}</h1>
      <hr />
      <div className="beneficios">
        <ul>
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
      <div className="preco">
        <p>R$ {price} <span className="mes">/mês</span></p>
      </div>
      <Link to="/pagamento" onClick={onSelectPlan}>Assinar</Link>
    </div>
  );
};

export default PlanoCard;
