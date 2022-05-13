import React from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';

import { Container } from '../../styles/GlobalContainer';
import axios from '../../services/axios';
import { AlunoContainer, ProfilePicture } from './styled';

export default function Alunos() {
  const [alunos, setAlunos] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      setAlunos(response.data);
    }

    getData();
  }, []);

  return (
    <Container>
      <h1>Alunos</h1>
      <AlunoContainer>
        {alunos.map((aluno) => (
          <div key={String(aluno.id)}>
            <ProfilePicture>
              {get(aluno, 'Fotos[0].url', false) ? (
                <img crossOrigin="" src={aluno.Fotos[0].url} alt="" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>
            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>
            <div className="">
              <Link to={`/aluno/${aluno.id}/edit`} className="link">
                <FaEdit size={16} />
              </Link>
              <Link to={`/aluno/${aluno.id}/delete`} className="link">
                <FaWindowClose size={16} />
              </Link>
            </div>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
