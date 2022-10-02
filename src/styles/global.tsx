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
    background-color: var(--gray600);
    
  }

  :root{
    --danger: #E25858;
    --blue-dark: #1E6F9F;
    --blue: #4EA8DE;
    --purple-dark: #5E60CE;
    --purple: #8284FA;
    --gray700: #0D0D0D;
    --gray600: #1A1A1A;
    --gray500: #262626;
    --gray400: #333333;
    --gray300: #808080;
    --gray200: #D9D9D9;
    --gray100: #F2F2F2;
  }
`;
