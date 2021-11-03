import { ThemeProvider } from '@material-ui/styles'
import React from 'react'
import Header from './components/Header/Header'
import theme from './constantes/theme'
import GlobalState from './global/GlobalState'
import Routers from './routers/Routers'

const App = () => {

  return (

    <ThemeProvider theme={theme}>
      <GlobalState>
        <Header />
        <Routers />
      </GlobalState>
    </ThemeProvider>

  );
}

export default App;
