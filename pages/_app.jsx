import {ThemeProvider} from 'styled-components';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import theme from '../styles/theme';
import GlobalStyle from '../styles/global';

export default function App({Component, pageProps}) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
				<Header />
        <Component {...pageProps} />
				<Footer />
      </ThemeProvider>
    </>
  )
}
