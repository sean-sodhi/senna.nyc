import { ThemeProvider, createGlobalStyle } from 'styled-components'
import Head from 'next/head'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

const GlobalStyle = createGlobalStyle`
  html, body {
    margin:0; 
    padding:0; 
    box-sizing:border-box;
    background: #0f0f0f; 
    color: #eaeaea; 
    font-family: 'Inter', sans-serif;
    overflow-x:hidden;
  }

  * {
    box-sizing:border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const theme = {
  colors: {
    primary: '#eaeaea',
    secondary: '#121212',
    accent: '#09f',
    muted: '#333333'
  },
  fonts: {
    main: `'Inter', sans-serif`
  }
}

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        {/* Add the viewport meta tag here */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
