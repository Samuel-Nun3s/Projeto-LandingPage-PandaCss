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
      recipes: {
        contentStyles: {
          description: "Estilo padrao para os conteudos",
          base: {
            textAlign: "center"
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
            marginBottom: "5px"
          }
        }
      }
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
