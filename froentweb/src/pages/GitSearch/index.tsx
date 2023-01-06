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
            <p>Imagem</p>
           </div>
        </div>
      </></>
  );
};

export default GitSearch;
