import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 :root {
    --color-primary: #FF577F;
    --color-primary-Focus: #FF427F;
    --color-primary-Negative: #59323F;
    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;
    --sucess: #3FE864;
    --negative: #E83F5B;

    --tile1: 18px;
    --tile2: 16px;
    --tile3: 14px;
    --text1: 16px;
    --text2: 10px;
    --text3: 12px;
    --textBold: 16px;
    --textItalic: 16px;

    --weight1: 700;
    --weight2: 600;
    --weight3: 500;
    --weight4: 400;

    --radius: 4px;
  }
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body,html{
    width: 100vw;
    
  }

  body {
    @media(min-width: 768px){
    *{
      -webkit-transition: all 1s ease;
      -moz-transition: all 1s ease;
      -o-transition: all 1s ease;
      transition: all 1s ease;
    }
  }

  @keyframes transition {
    from {
      opacity: 0;
      transform: translateY(-70%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
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
