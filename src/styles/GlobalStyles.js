import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
         --blue: #00205b;  
         --gray: #e2e2e2;
    }
    html{
        scroll-behavior: smooth;
    }
    body{
        font-family: "Quicksand", sans-serif;
        overflow-x: hidden;
        color: var(--blue);
        a{
            text-decoration: none;
            color: var(--blue);
            cursor: pointer;
        }
        a:hover{
            font-weight: 700;
        }
        a:visited{
            color: var(--blue);
        }
        li{
            list-style: none;
        }
    }
`;
