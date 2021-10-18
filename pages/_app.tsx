import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout';
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from 'next-themes'

const GlobalStyle = createGlobalStyle`
  :root {
    --background-color: white;
    --text-color: black;
    --color-primary: #eb2f64;
    --color-primary-light: #FF3366;
    --color-primary-dark: #BA265D;

    --color-grey-light-1: #faf9f9; 
    --color-grey-light-2: #f4f2f2;
    --color-grey-light-3: #f0eeee;
    --color-grey-light-4: #ccc;
    
    --color-grey-dark-1: #333;
    --color-grey-dark-2: #777;
    --color-grey-dark-3: #999;

    --shadow-dark: 0 2rem 6rem rgba(0,0,0,.3);
    --shadow-light: 0 2rem 5rem rgba(0,0,0,.06);
    --line: 1px solid var(--color-grey-light-2);
    
    font-size: 62.5%;
    font-family: 'Open Sans', sans-serif;
    
  }
  [data-theme="dark"]{
    --color-primary: #2fbfeb;
  }

  *,
  *::before,
  *::after{
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-weight: 400;
    line-height: 1.6;
    background-image: linear-gradient(to right bottom, var(--color-primary-light), var(--color-primary-dark));
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    color: var(--color-grey-dark-2);
  }
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider defaultTheme="dark">
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </ThemeProvider>
    </>
  )
}
export default MyApp
