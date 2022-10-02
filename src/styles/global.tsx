import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
* {
    margin:0 ;
    padding:0 ;
    box-sizing: border-box;
    
  }
  html{
    font-size: 62.5%;
  }
  body{
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size:  1.6rem;
    background-color: var(--var-gray600);
    
  }

  :root{
    --var-danger: #E25858;
    --var-blue-dark: #1E6F9F;
    --var-blue: #4EA8DE;
    --var-purple-dark: #5E60CE;
    --var-purple: #8284FA;
    --var-gray700: #0D0D0D;
    --var-gray600: #1A1A1A;
    --var-gray500: #262626;
    --var-gray400: #333333;
    --var-gray300: #808080;
    --var-gray200: #D9D9D9;
    --var-gray100: #F2F2F2;
    
    
  }
`;
