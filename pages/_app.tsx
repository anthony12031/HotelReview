import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout';
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from 'next-themes'

const GlobalStyle = createGlobalStyle`
  :root {
    --background-color: white;
    --text-color: black;
    --primary-color: #4567;
  }
  [data-theme="dark"]{
    --background-color: black;
    --text-color: white;
    --primary-color: #4567;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--background-color);
    color: var(--text-color);
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
