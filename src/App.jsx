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
  console.log("bp =>", bp);

  return (
    <>
      <div
        className={css({
          height: "100%"
        })}  
      >
        <h1 className={css({
          fontSize: {
            base: "2.4em",
            md: "3em"
          },
          textAlign: "center",
          lineHeight: "none",
          fontWeight: "bolder",
          color: "#4C6369",
          textShadow: "1px 1px 15px rgba(0, 0, 0, 0.3)",
          pt: "50px",
          pb: "30px"
        })}>
          Course for doctors
        </h1>

        { /* Componente: Div de conteudo */ }
        <div className={contentStyles()}>
          {bp === "mobile" && <ContentMobile />}
          {bp === "laptop" && <ContentLaptop />}
          {bp === "desktop" && <ContentDesktop />}
        </div>
        
        <div
          className={css({
            position: "fixed",
            bottom: "0",
            right: bp === "laptop" || bp === "desktop" ? "0" : ""
          })}
          >
          <img 
            src="/images/medica.png"
            alt="Medica"
            className={css({
              width: "600px",
              ...(bp != "mobile" && {
                position: "relative",
                right: "-80px"
              })
            })}
          />
          { /* Botao abertura do modal */ }
          <button className={css({
            padding: "10px",
            position: "absolute",
            bottom: 10,
            left: "50%",
            transform: "translate(-50%, 0%)",
            backgroundColor: "rgb(55, 161, 50)",
            color: "#DAE3EC",
            border: "none",
            fontSize: "1.3em",
            fontWeight: "bold",
            boxShadow: "0px 0px 20px black",
            borderRadius: "10px",
            transition: ".4s",
            _hover: {
              backgroundColor:"rgb(55, 190, 48)",
              cursor: "pointer",
              transform: "translate(-50%, -25%)"
            }
          })}>
            Register
          </button>
          <Networks
            direction={bp === "mobile" ? "column" : "row"}
          />
        </div>
      </div>
        { /* Componente: Modal */ }
      <div
        className={css({
          display: "none"
        })}
      >
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
    </>
  )
}

export default App
