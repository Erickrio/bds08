import ResultCard from '../../components/ResultCard';
import './styles.css';


const GitSearch = () => {
  return (
    <><div className="git-search-container">
      <div className="container search-container">
        <h1>Encontre um perfil Github</h1>
        <form>
          <div className="form-container">
            <input
              type="text"
              className="search-input"
              placeholder="Usuário Github" />
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
           </div>
           <div className="container description-container">
            <h5>Informações</h5>
           <ResultCard title={''} description={''}/>
           <ResultCard title={''} description={''}/>
           <ResultCard title={''} description={''}/>
           <ResultCard title={''} description={''}/>
           </div>
        </div>
      </></>
  );
};

export default GitSearch;
