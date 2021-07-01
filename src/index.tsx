import React from 'react';
import ReactDOM from 'react-dom';
import DashBoard from './UI/WorkSpace/DashBoard';
import {ThemeProvider} from '@material-ui/core/styles';
import materialTheme from './UI/MaterialUI/MaterialUI'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={materialTheme}>
      <DashBoard />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

