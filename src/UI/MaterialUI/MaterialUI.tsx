import { createMuiTheme } from "@material-ui/core/styles";

const materialTheme = createMuiTheme({
    palette: {
      primary: {
        // Variamos Blue 500.
        main: '#2196f3',
      },
      secondary: {
        // Variamos Ligth Green 500.
        main: '#8bc34a',
      },
    },
  });

export default materialTheme;