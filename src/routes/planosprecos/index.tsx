
import PlanoCard from '../../components/cards/PlanoCards'; 
import Header from '../../components/Header/PlanosHeader'; 
import { selectPlan } from '../../utils/planPaymentUtils';
import '../../routes/routes'

export default function PlanosEPrecos()  {

    const handleSelectPlan = (plan: string) => {
      selectPlan(plan);
    };
  
    return (
      <>
        <Header />
        <div className="background-planos">
          <div className="containerPlanos">
            <div className="planos">
              <h1><span className="titulo-escolha">Escolha o Plano Ideal Para Você</span></h1>
              
              {/* Silver Plan */}
              <PlanoCard
                id="silver-plan"
                title="Silver"
                benefits={[
                  'Anúncios',
                  'Acesso aos Mecânicos',
                  'Fale com nosso Bot'
                ]}
                price="19,90"
                onSelectPlan={() => handleSelectPlan('silver')}
              />
              
              {/* Gold Plan */}
              <PlanoCard
                id="gold-plan"
                title="Gold"
                benefits={[
                  'Sem Anúncios',
                  'Acesso aos Mecânicos',
                  'Fale com nosso Bot'
                ]}
                price="29,90"
                onSelectPlan={() => handleSelectPlan('gold')}
              />
              
              {/* Diamond Plan */}
              <PlanoCard
                id="diamond-plan"
                title="Diamond"
                benefits={[
                  'Sem Anúncios',
                  'Acesso aos Mecânicos',
                  'Fale com nosso Bot',
                  'Fale com Fornecedores'
                ]}
                price="39,90"
                onSelectPlan={() => handleSelectPlan('diamond')}
              />
            </div>
          </div>
        </div>
      </>
    );
  };