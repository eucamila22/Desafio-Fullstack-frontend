import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body,html{
    width: 100vw;
    height: 100vh;
    
  }

  body {
    background-image: radial-gradient(
        circle at 100% 0%,
        #85d8db 0,
        #84d7e1 4.17%,
        #85d7e6 8.33%,
        #87d6eb 12.5%,
        #8bd5ef 16.67%,
        #8fd3f3 20.83%,
        #95d2f6 25%,
        #9cd0f8 29.17%,
        #a4cefa 33.33%,
        #acccfa 37.5%,
        #b5cafa 41.67%,
        #bec8f9 45.83%,
        #c6c6f7 50%,
        #cec4f4 54.17%,
        #d6c2f1 58.33%,
        #ddc0ed 62.5%,
        #e4bee8 66.67%,
        #eabce3 70.83%,
        #efbbdd 75%,
        #f4bad7 79.17%,
        #f7b9d1 83.33%,
        #fab9ca 87.5%,
        #fcb9c4 91.67%,
        #fcb9be 95.83%,
        #fcbab8 100%
    );
    color: var(--color-gray-300);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
    
  }

  body, input, button, textarea {
    font-size: 1.6rem;
  }

  button {
    cursor: pointer;
  }
  
`
