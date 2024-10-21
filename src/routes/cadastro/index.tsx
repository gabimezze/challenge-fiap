import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/HomeHeader';
import { validarCPF, validarCNPJ } from '../../utils/validators'; 

export default function Cadastro() {
  const [username, setUsername] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cpfOuCnpj = username.replace(/[^\d]+/g, '');

    // Validação CPF e CNPJ
    if (cpfOuCnpj.length === 11 && validarCPF(cpfOuCnpj)) {
      console.log('CPF válido:', cpfOuCnpj);
      
    } else if (cpfOuCnpj.length === 14 && validarCNPJ(cpfOuCnpj)) {
      console.log('CNPJ válido:', cpfOuCnpj);
      
    } else {
      setError('Número inválido');
    }
  };

  // Cadastro e Login
  return (
    <>
      <Header />
      <div className="form-cadastro">
        <div className="textoCadastroLogin">
          <h1>Cadastrar Conta</h1>
          <p>Preencha os dados indicados</p>
          <form id="registerForm" onSubmit={handleSubmit}>
            <label htmlFor="newUsername">CPF ou CNPJ</label><br />
            <input
              type="text"
              id="newUsername"
              name="newUsername"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            /><br />
            <button type="submit">Cadastrar</button>
            <div>
              <input
                type="checkbox"
                name="txtLembrar"
                id="idLembrar"
                value="lembrete"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="idLembrar">Lembrar-me</label>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <p>
              Já tem uma conta?{' '}
              <Link to="/login">
                <span className="facaLoginCadastro">Faça login aqui</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
