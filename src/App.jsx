import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {

  return (
    <div>
      <h1>Curso para medicos</h1>
      { /* Componente: Div de conteudo */ }
      <div>
        { /* Celular: 1 paragrafo */ }
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem reprehenderit neque blanditiis doloremque quia quis molestiae nam. Adipisci assumenda impedit cum voluptate officia dignissimos, modi totam! Ipsum velit aliquid consequatur.
        </p>
        <br />
        { /* Tablet: 2 paragrafos */ }
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem reprehenderit neque blanditiis doloremque quia quis molestiae nam. Adipisci assumenda impedit cum voluptate officia dignissimos, modi totam! Ipsum velit aliquid consequatur.
        </p>
        <br />
        { /* Computador: 3 paragrafos */ }
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem reprehenderit neque blanditiis doloremque quia quis molestiae nam. Adipisci assumenda impedit cum voluptate officia dignissimos, modi totam! Ipsum velit aliquid consequatur.
        </p>
      </div>
      { /* Botao abertura do modal */ }
      <div>
        <img src="/images/medica.png" alt="Medica" />
        <button>
          Cadastrar
        </button>
      </div>
      { /* Componente: Redes sociais */ }
      <div>
        <a href="https://github.com/Samuel-Nun3s" target="blank" rel="external">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/samuel-nunes-5b4b72270/" target="blank" rel="external">
          <FaLinkedin />
        </a>
      </div>
      { /* Componente: Modal */ }
      <div>
        <form>
          <div>
            <input type="text" />
          </div>
          <div>
            <input type="text" />
          </div>
          <button>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
