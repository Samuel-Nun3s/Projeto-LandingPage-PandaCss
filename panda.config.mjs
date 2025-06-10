import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fonts: {
          sourceCodePro: {
            value: "'Source Code Pro', monospace"
          }
        }
      },
      semanticTokens: {
        typography: {
          body: {
            value: {
              fontFamily: "sourceCodePro"
            }
          }
        }
      },
      recipes: {
        contentStyles: {
          description: "Estilo padrao para os conteudos",
          base: {
            textAlign: "center",
            padding: "17px",
            backgroundColor: "rgba(255, 255, 255, 0.250)",
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
            borderRadius: "20px",
            md: {
              fontSize: "1.4em"
            }
          }
        },
        networks: {
          description: "Estilo padrao dos links para as redes sociais",
          base: {
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            color: "white",
            mr: "10px",
            marginBottom: "5px",
            boxShadow: "0px 0px 14px black",
            transition: ".2s",
            _hover: {
              transform: "translate(-11%, -5%)"
            }
          }
        }
      }
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
