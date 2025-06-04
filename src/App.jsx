import { useState, useEffect } from "react";

import ContentMobile from './components/content/ContentMobile';
import ContentLaptop from './components/content/ContentLaptop';
import ContentDesktop from './components/content/ContentDesktop';
import Networks from "./components/socialMedia/Networks";

import { css } from "../styled-system/css";

function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState("");

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;

      if (width < 768) {
        setBreakpoint("mobile");
      } else if (width < 1280) {
        setBreakpoint("laptop");
      } else {
        setBreakpoint("desktop");
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
}

function App() {
  const bp = useBreakpoint();
  console.log("bp =>", bp);

  return (
    <div>
      <h1 className={css({
        fontSize: {
          base: "2.4em",
          md: "3em"
        },
        textAlign: "center",
        lineHeight: "none"
      })}>
        Curso para medicos
      </h1>

      { /* Componente: Div de conteudo */ }
      <div>
        {bp === "mobile" && <ContentMobile />}
        {bp === "laptop" && <ContentLaptop />}
        {bp === "desktop" && <ContentDesktop />}
      </div>
      
      { /* Botao abertura do modal */ }
      <div>
        <img src="/images/medica.png" alt="Medica" />
        <button>
          Cadastrar
        </button>
      </div>
      { /* Componente: Redes sociais */ }
      <Networks />
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
