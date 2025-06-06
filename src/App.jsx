import { useState, useEffect } from 'react';

import ContentMobile from './components/content/ContentMobile';
import ContentLaptop from './components/content/ContentLaptop';
import ContentDesktop from './components/content/ContentDesktop';
import Networks from './components/socialMedia/Networks';

import { css } from '../styled-system/css';
import { contentStyles } from '../styled-system/recipes';

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
      <div className={contentStyles()}>
        {bp === "mobile" && <ContentMobile />}
        {bp === "laptop" && <ContentLaptop />}
        {bp === "desktop" && <ContentDesktop />}
      </div>
      
      <div
        className={css({
          position: "relative"
        })}
        >
        <img src="/images/medica.png" alt="Medica" />
        { /* Botao abertura do modal */ }
        <button className={css({
          padding: "10px",
          position: "absolute",
          bottom: 10,
          left: "50%",
          transform: "translate(-50%, 0%)",
          backgroundColor: "white",
          border: "1px solid black",
          borderRadius: "10px"
        })}>
          Cadastrar
        </button>
        {bp === "mobile" && <Networks />}
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
