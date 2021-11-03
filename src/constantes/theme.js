import { createTheme } from '@material-ui/core/styles';
import {primaryColor, neutralColor} from './colors'

const theme = createTheme({
  //base para utilização do material ui com a definição das suas cores
  palette: {

    primary: {
      main: primaryColor,
      contrastText: "white"
    },


    text:{ 
      primary: neutralColor
    }
  }
})

export default theme