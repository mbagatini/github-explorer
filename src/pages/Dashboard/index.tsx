import React from 'react';

import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/17517028?s=460&u=f355d47d850ccc799cda3946acf7570b55629d8a&v=4"
            alt="avatar"
          />
          <div>
            <strong>mbagatini/next-level-week</strong>
            <p>Descrição do repo</p>
          </div>
          <FiChevronRight />
        </a>

        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/17517028?s=460&u=f355d47d850ccc799cda3946acf7570b55629d8a&v=4"
            alt="avatar"
          />
          <div>
            <strong>mbagatini/next-level-week</strong>
            <p>Descrição do repo</p>
          </div>
          <FiChevronRight />
        </a>

        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/17517028?s=460&u=f355d47d850ccc799cda3946acf7570b55629d8a&v=4"
            alt="avatar"
          />
          <div>
            <strong>mbagatini/next-level-week</strong>
            <p>Descrição do repo</p>
          </div>
          <FiChevronRight />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
