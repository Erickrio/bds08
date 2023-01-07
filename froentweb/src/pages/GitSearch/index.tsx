import axios from 'axios';
import { useState } from 'react';
import ResultCard from '../../components/ResultCard';
import './styles.css';

type FormData = {
  login: string;
};

type GitProfile = {
  avatar_url: string;
  url: string;
  followers: string;
  location: string;
  name: string;
};

const GitSearch = () => {
  const [gitProfile, setGitProfile] = useState<GitProfile>();

  const [formData, setFormData] = useState<FormData>({
    login: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('mudou para ' + event.target.value);
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('clicou no botão');

    axios
      .get(`https://api.github.com/users/${formData.login}`)
      .then((response) => {
        setGitProfile(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setGitProfile(undefined);
        console.log(error);
      });
  };

  return (
    <>
      <div className="git-search-container">
        <div className="container search-container">
          <h1>Encontre um perfil Github</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <input
                type="text"
                name="login"
                value={formData.login}
                className="search-input"
                placeholder="Usuário Github"
                onChange={handleChange}
              />
              <button type="submit" className="btn btn-primary search-button">
                Encontrar
              </button>
            </div>
          </form>
        </div>
      </div>
      <>
        <div className="container info-container">
          <div className="container img-container">
            <img src={gitProfile?.avatar_url} alt="" />
          </div>
          <div className="container description-container">
            <h5>Informações</h5>
            <ResultCard title="Perfil" description="erickrio" />
            <ResultCard title="Seguidores" description="0" />
            <ResultCard title="Localidade" description="RJ" />
            <ResultCard title="Name" description="Erick" />
          </div>
        </div>
      </>
    </>
  );
};

export default GitSearch;
