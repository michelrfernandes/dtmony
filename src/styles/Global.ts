import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --green: #33cc95;
    --red: #E52E4D;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --background: #f0f2f5;
    --shape: #ffffff;
    --border-d7: #d7d7d7;
    --background-2: #e7e9ee;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;     
  }

  //font-size: 16px (Desktop)
  html{
    @media (max-width: 1080px){
      font-size: 93.75%; //15px     
    }

    @media (max-width: 728px){
      font-size: 87.5%; //14px  
    }
  }

  body {
    background: var(--background);
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  bottom {
    cursor: pointer;
  }
   [disabled] {
     opacity: 0.6;
     cursor: not-allowed;
   }

   .react-modal-overlay{
    background: rgb(0 0 0 / 50%);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom:0;

  }
  .react-modal-content{
    width: 100%;
    max-width: 576px;
    padding: 3rem;
    background: var(--shape);
    border-radius: 0.25rem;
    position: relative;

    .react-button-close{
      position: absolute;
      padding: 1rem;
      background: transparent;
      border: 0;
      top:0 ;
      right: 0;
      transition: 0.2s;
      cursor: pointer;

      &:hover{
        filter: brightness(0.8);
      }

    }
  }
  
`;