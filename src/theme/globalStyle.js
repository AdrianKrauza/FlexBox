import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=roboto:300,600');
  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin:0;
    padding:0;
  }
  
  html {
    font-size: 62.5%; 
  }
  
  body {
    background: ${colors.purple};
    font-size: 1.6rem;
    font-family: "roboto", sans-serif;
  }
  body::-webkit-scrollbar {
  width: 1.5rem;
}
 
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
body::-webkit-scrollbar-thumb {
  /* width:10rem; */
  background-color: ${colors.darkPurple};
  border-radius:5rem;
}
`;

export default GlobalStyle;
