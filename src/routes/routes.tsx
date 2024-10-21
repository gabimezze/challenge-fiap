import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import Ajuda from './ajuda';
import Sobre from './sobre';
import Planos from './planosprecos';
import Pagamento from './pagamento';
import Integrantes from './integrantes';
import Login from './login';
import Cadastro from './cadastro';
export default function AppRoutes () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ajuda" element={<Ajuda />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/pagamento" element={<Pagamento />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
};

