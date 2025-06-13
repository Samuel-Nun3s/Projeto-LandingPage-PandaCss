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
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
            borderRadius: "20px",
            fontSize: {
              base: "17px",
              md: "26px"
            },
          },
          variants: {
            direction: {
              column: {
                display: "flex",
                flexDirection: "column"
              },
              row: {
                display: "flex",
                flexDirection: "row"
              }
            },
            width: {
              laptop: {
                width: "50%",
                marginLeft: "20px"
              },
              desktop: {
                width: "60%"
              }
            }
          },
          defaultVariants: {
            direction: "column"
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
        },
        button: {
          description: "Estilo padrao dos botoes",
          base: {
            color: "#DAE3EC",
            border: "none",
            fontWeight: "bold",
            boxShadow: "0px 0px 20px black",
            borderRadius: "10px",
            transition: ".4s",
            _hover: {
              cursor: "pointer",
            }
          },
          variants: {
            variant: {
              primary: {
                padding: "10px",
                position: "absolute",
                bottom: "10",
                left:  {
                  sm: "50%",
                  md: "0"
                },
                transform: {
                  sm: "translate(-50%, 0%)",
                  md: "translate(-20%, 0%)"
                },
                backgroundColor: "rgb(55, 161, 50)",
                fontSize: {
                  sm: "1em",
                  md: "1.4em"
                },
                _hover: {
                  backgroundColor:"rgb(55, 190, 48)",
                  transform: {
                    sm: "translate(-50%, -25%)",
                    md: "translate(-20%, -25%)"
                  }
                }
              }
            }
          }
        }
      }
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
